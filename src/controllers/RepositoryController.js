const Repository = require('../models/Repository');
const Owner = require('../models/Owner');

module.exports = {

    async index(req, res) {
        const repository = await Repository.findAll({
            include: [
                {
                    model: Owner,
                    as: 'owner',
                }
            ],
            order: [['created_at', 'DESC'],['stargazers_count', 'DESC']]
        });

        return res.json(repository);
    },

    async find(req, res) {
        const param_id = req.params.id;
        const repository = await Repository.findOne({
            where: { id: param_id },
            include: [
                {
                    model: Owner,
                    as: 'owner',
                    foreignKey: 'owner_github_id'
                }
            ]
        });

        return res.json(repository);
    },

    async store(req, res) {
        const { repositories } = req.body;
        try {
            if (Object.keys(repositories).length > 0) {

                let owners = [];
                let updated_repositories = [];

                //Getting the owners to do a bulkCreate.
                await repositories.map(element => {
                    let repositoryToPush = {...element, github_id: element.id, owner_github_id: element.owner.id }
                    let ownerToPush = { ...element.owner, github_id: element.owner.id }
                    delete ownerToPush.id;
                    delete repositoryToPush.id;

                    updated_repositories.push(repositoryToPush);
                    owners.push(ownerToPush);
                });

                console.log('Storing owners...');
                await Owner.bulkCreate(
                    owners,
                    {
                        ignoreDuplicates: true,
                    }
                )
                
                console.log('Storing repositories...');
                await Repository.bulkCreate(
                    updated_repositories,
                    {
                        updateOnDuplicate: ["github_id","owner_github_id"]
                    }
                )

            } else {
                return res.status(400).send("Could not store this repository. Check your input fields and try again.");
            }

            return res.sendStatus(200);
        } catch (error) {
            console.log('ERROR CATCH: ' + error);
            return res.status(400).send("Could not store these repositories. Check your input fields and try again.");
        }
    },

    async delete(req, res) {
        await Repository.truncate({
            cascade: false,
            restartIdentity: true
        }).then(function () {
            return res.sendStatus(200);
        })
            .catch(function (error) {
                res.status(404).send('Erro: ' + error)
            })
    }

}