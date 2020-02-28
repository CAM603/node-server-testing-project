const request = require('supertest');

const server = require('../api/server');

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
})