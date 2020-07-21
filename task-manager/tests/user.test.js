const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

beforeEach(async () => {
  console.log('beforeEach');
  await User.deleteMany();
});

afterEach(() => {
  console.log('afterEach');
});

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
