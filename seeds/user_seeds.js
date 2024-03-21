const { Users } = require('../models');

const usersData = [
  {
    username: 'johndoe',
    password: 1234
  },
  {
    username: 'janedane',
    password: 1234
  },
  {
    username: 'Anja',
    password: 1234
  },
  {
    username: 'johnrow',
    password: 1234
  }
];

const seedUsers = () => Users.bulkCreate(usersData);

module.exports = seedUsers;

    