const { posts } = require('../models');

const postsData = [
  {
    title: 'How to make a website',
    content: 'This is how you make a website',
    user_id: 1,
    category: 'web development',
    date_created: '2021-01-01'
  },
  {
    title: 'How to make a blog',
    content: 'This is how you make a blog',
    user_id: 2,
    category: 'web development',
    date_created: '2021-01-02'
  },
  {
    title: 'How to make a game',
    content: 'This is how you make a game',
    user_id: 3,
    category: 'game development',
    date_created: '2021-01-03'
  },
  {
    title: 'How to make a mobile app',
    content: 'This is how you make a mobile app',
    user_id: 4,
    category: 'mobile development',
    date_created: '2021-01-04'
  }
];

const seedPosts = () => posts.bulkCreate(postsData);

module.exports = seedPosts;