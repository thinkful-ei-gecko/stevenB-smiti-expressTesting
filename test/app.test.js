const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('app module test', () => {
  it('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express!');
  });
});

describe('GET /sum', () => {
  it('8/4 should be 2', () => {
    return supertest(app)
      .get('/sum')
      .query({ a: 8, b: 4})
      .expect(200, '8 divided by 4 is 2');
  });

  it('will return a 400 if a is missing', () => {
    return supertest(app)
      .get('/sum')
      .query({ b: 4 })
      .expect(400, 'Value for a is needed');
  });
});