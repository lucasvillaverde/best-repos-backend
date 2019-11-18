const Owner  = require('../models/Owner');
const Repository = require('../models/Repository');
module.exports = {

    async index(req, res){
        const owner = await Owner.findAll();

        return res.json(owner);
    },

    async find(req, res){
        const param_id = req.params.id;
        const repository = await Owner.findAll({
            where: { id: param_id },
        });

        return res.json(repository);
    },

    async store(req, res){
        const { owner } = req.body;
        console.log("Storing owner..." + JSON.stringify(owner));
        let storedOwner = await Owner.findCreateFind(
            {
                where: { github_id: owner.id }
            },
            {
                github_id: owner.id,
                login: owner.login,
                avatar_url: owner.avatar_url,
                type: owner.type,
                html_url: owner.html_url,
                url: owner.url,
                site_admin: owner.site_admin,
            }
        );

        return res.json(storedOwner);
    },

    async delete(req, res){
        await Owner.truncate({
            cascade: false,
            restartIdentity: true
        }).then(function(){
            return res.sendStatus(200);
        })
        .catch(function(error){
            res.status(404).send('Erro: ' + error)
        })
    }
}