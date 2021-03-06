const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/user');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: 'kasprzyk111',
  email: 'kasprzyk111@asd.pl',
  password: '56asdsasd!!',
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
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
      name: userOne.name,
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test('should not log in non-existing user', async () => {
  await request(app)
    .post('/users/login')
    .send({
      name: userOne.name,
      email: 'asdasd',
      password: userOne.password,
    })
    .expect(400);
});

test('should get profile for user', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({})
    .expect(200);
});

test('should not get profile for not authenticated user', async () => {
  await request(app).get('/users/me').send({}).expect(401);
});

test('should delete account for user', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({})
    .expect(200);
});

test('should not delete account for not authenticated user', async () => {
  await request(app).delete('/users/me').send({}).expect(401);
});
