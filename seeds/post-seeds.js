const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://techcrunch.com/',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://thenextweb.com/',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://www.wired.com/',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_url: 'https://mashable.com/',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'https://www.theverge.com/',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://www.digitaltrends.com/',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'https://www.techradar.com/',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://technorati.com/',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'https://www.businessinsider.com/',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://www.macrumors.com/',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'https://blog.playstation.com/',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'https://gigaom.com/ ',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://www.engadget.com/',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://www.slashgear.com/',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'https://www.ubergizmo.com/',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://www.droid-life.com/',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://www.eurogamer.net/',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
