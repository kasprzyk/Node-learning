const request = require('supertest');
const app = require('../src/app');

test('should sign up a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Piotr',
      email: 'asd@asd.pl',
      password: 'Mypass!',
    })
    .expect(201);
});
