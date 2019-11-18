const request = require('supertest');
const truncate = require('../utils/truncate_all');
const App = require('../../src/application');
const Sequelize = require('sequelize');
const dbConfig = require('../../src/config/database');
const Repository = require('../../src/models/Repository');
const Owner = require('../../src/models/Owner');


const connection = new Sequelize(dbConfig);

Owner.init(connection);
Repository.init(connection);    
Owner.associate(connection.models);
Repository.associate(connection.models);

describe('Test if the API is returning the correct values', () => {
    beforeAll(async () => {
        await truncate(connection);
    });

    it('should create an owner through the controller', async () => {

        const owner = {
            id: 123,
            login: "lgvv",
            avatar_url: "http://google.com",
            type: "owner",
            html_url: "http://github.com",
            url: "http://api.github.com",
            site_admin: false
        };

        const response = await request(App).post("/owners").send({
            owner
        })

        expect(response.status).toBe(200);
    });

    it('should create a repository through the controller', async () => {

        const repositories = [{
            id: 1,
            name: "Repo Test",
            full_name: "Test/RepoTest",
            description: "A test repository.",
            html_url: "http://github.com",
            url: "http://api.github.com",
            stargazers_count: 100,
            forks_count: 10,
            open_issues_count: 20,
            language: 'JavaScript',
            owner: {
                id: 1234,
                login: "lucasvillaverde",
                avatar_url: "http://google.com",
                type: "owner",
                html_url: "http://github.com",
                url: "http://api.github.com",
                site_admin: false
            },
        }];

        const response = await request(App).post("/repositories").send({
            repositories
        })

        expect(response.status).toBe(200);
    });


    it('should find an owner through the controll', async () => {

        const response = await request(App).get("/owners/1");

        expect(response.status).toBe(200);
    });

    it('should find a repository through the controll', async () => {

        const response = await request(App).get("/repositories/1");

        expect(response.status).toBe(200);
    });

    it('should find all repositories through the controll', async () => {

        const response = await request(App).get("/repositories");

        expect(response.status).toBe(200);
    });

    it('should find all owners through the controll', async () => {

        const response = await request(App).get("/owners");

        expect(response.status).toBe(200);
    });

    it('should delete the repositories data on the DB.', async () => {

        const response = await request(App).delete("/repositories");

        expect(response.status).toBe(200);
    });
})

