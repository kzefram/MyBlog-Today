const { comments } = require('../models');

const commentsData = [
  {
    content: 'This is a great post',
    user_id: 1,
    post_id: 1,
    date_created: '2021-01-01'
  },
  {
    content: 'This is a great post',
    user_id: 2,
    post_id: 2,
    date_created: '2021-01-02'
  },
  {
    content: 'This is a great post',
    user_id: 3,
    post_id: 3,
    date_created: '2021-01-03'
  },
  {
    content: 'This is a great post',
    user_id: 4,
    post_id: 4,
    date_created: '2021-01-04'
  }
];

const seedComments = () => coments.bulkCreate(commentsData);

module.exports = seedComments;