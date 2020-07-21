const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
  name: 'kasprzyk',
  email: 'kasprzyk@asd.pl',
  password: '56asdsasd!!',
};

beforeEach(async () => {
  console.log('beforeEach');
  await User.deleteMany();
  await new User(userOne).save();
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

test('should log in existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      name: 'kasprzyk',
      email: 'kasprzyk@asd.pl',
      password: '56asdsasd!!',
    })
    .expect(200);
});
