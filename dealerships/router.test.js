const request = require('supertest');
const server = require('../api/server');
const db = require("../data/connection.js");
const Dealers = require('./model');

describe('dealerships router', () => {
    it('should run the tests', () => {
        expect(true).toBe(true);
    })

    describe('GET /api/dealerships', () => {
        it('should return 200 OK', () => {
            return request(server).get('/api/dealerships').then(res => {
                expect(res.status).toBe(200);
            })
        })
        it('should return dealerships as the router value', () => {
            return request(server).get('/api/dealerships').then(res => {
                expect(Array.isArray(res.body)).toBe(true)
            })
        })
        it('should return dealerships as the router value (async)', async () => {
            const res = await request(server).get('/api/dealerships')
            
            expect(Array.isArray(res.body)).toBe(true)
        })
        it('should return json formatted body (async)', async () => {
            const res = await request(server).get('/api/dealerships')
            
            expect(res.type).toMatch(/json/)
        })
    })
    describe('POST /api/dealerships', () => {
        it('should add a dealership into the database', async () => {
            
            request(server).post('/api/dealerships').send({name: "SVM"})
            request(server).post('/api/dealerships').send({name: "NPS"})

            const dealers = await request(server).get('/api/dealerships')

            expect(dealers.body).toHaveLength(2)
        })
    })
    describe('POST /api/dealerships', () => {
        it('should add a dealership into the database', async () => {

            await db('dealerships').truncate();
            await Dealers.add({name: 'test'})
            await Dealers.add({name: 'testing'})
            
            const dealers = await db('dealerships')
            expect(dealers).toHaveLength(2)
        })
    })
    // describe('DELETE /api/dealerships', () => {
    //     it('should remove a dealership from the database', async () => {
    //         await db('dealerships').truncate();
    //         await Dealers.add({name: 'test'})
    //         await Dealers.add({name: 'testing'})
    //         await Dealers.remove(2)
            
    //         const dealers = await db('dealerships')
    //         expect(dealers).toHaveLength(1)
    //     })
    // })
})