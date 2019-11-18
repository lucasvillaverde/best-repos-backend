const Repository = require('../../src/models/Repository');
const Owner = require('../../src/models/Owner');
const Sequelize = require('sequelize');
const dbConfig = require('../../src/config/database');
const truncate = require('../utils/truncate_all');

const connection = new Sequelize(dbConfig);

Owner.init(connection);
Repository.init(connection);    
Owner.associate(connection.models);
Repository.associate(connection.models);

describe("Create a repository", () => {
    beforeAll(async () => {
        await truncate(connection);
    });
    
    it('should create an owner', async () => {
        let owner = await Owner.create({
            github_id: 1,
            login: "lgvverde",
            avatar_url: "http://google.com",
            type: "owner",
            html_url: "http://github.com",
            url: "http://api.github.com",
            site_admin: false
        });
        expect(owner.login).toBe('lgvverde');
    });

    it('should create a repository', async () => {
    
        const repository = await Repository.create({
            github_id: 1,
            name: "Repo Test",
            full_name: "Test/RepoTest",
            description: "A test repository.",
            html_url: "http://github.com",
            url: "http://api.github.com",
            stargazers_count: 100,
            forks_count: 10,
            open_issues_count: 20,
            language: 'JavaScript',
            owner_github_id: 1
        })

        expect(repository.name).toBe("Repo Test");
    });
})
