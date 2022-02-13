const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in. Nunc vel risus commodo viverra maecenas. Rutrum quisque non tellus orci ac auctor augue mauris. At in tellus integer feugiat scelerisque varius morbi enim nunc. Id eu nisl nunc mi ipsum faucibus vitae. Quam pellentesque nec nam aliquam sem et tortor. Eget lorem dolor sed viverra ipsum nunc aliquet. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Vivamus arcu felis bibendum ut tristique et.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Ultrices gravida dictum fusce ut placerat. Orci a scelerisque purus semper eget duis at. Nec nam aliquam sem et tortor consequat id porta nibh. Purus viverra accumsan in nisl. Est velit egestas dui id ornare arcu odio ut. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Elit eget gravida cum sociis natoque penatibus et magnis dis. Pretium nibh ipsum consequat nisl vel pretium lectus. Duis tristique sollicitudin nibh sit. Senectus et netus et malesuada fames ac turpis egestas. Neque gravida in fermentum et. Lacus suspendisse faucibus interdum posuere lorem. Augue ut lectus arcu bibendum. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Faucibus in ornare quam viverra orci sagittis eu volutpat. Amet dictum sit amet justo. Ac ut consequat semper viverra. In hac habitasse platea dictumst vestibulum rhoncus est. Dui vivamus arcu felis bibendum ut tristique et. Faucibus nisl tincidunt eget nullam. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Diam sollicitudin tempor id eu nisl. In vitae turpis massa sed elementum tempus egestas. Vel pharetra vel turpis nunc eget lorem dolor. Diam quam nulla porttitor massa id. Consectetur adipiscing elit ut aliquam. Facilisis volutpat est velit egestas dui id ornare. Bibendum enim facilisis gravida neque convallis a cras semper. Amet venenatis urna cursus eget nunc. Ultrices dui sapien eget mi proin sed libero enim. Dictum at tempor commodo ullamcorper a lacus vestibulum',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Leo vel fringilla est ullamcorper. Cursus mattis molestie a iaculis. Tincidunt id aliquet risus feugiat in ante metus dictum. Et tortor consequat id porta. Neque egestas congue quisque egestas.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Vestibulum morbi blandit cursus risus at. Proin nibh nisl condimentum id venenatis. Mollis nunc sed id semper risus in. In nulla posuere sollicitudin aliquam.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Condimentum id venenatis a condimentum vitae sapien pellentesque.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Tellus cras adipiscing enim eu turpis egestas. Nibh venenatis cras sed felis eget velit. Penatibus et magnis dis parturient montes nascetur. Ligula ullamcorper malesuada proin libero nunc consequat.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Tempus iaculis urna id volutpat lacus laoreet non. Sed elementum tempus egestas sed sed risus pretium quam.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Nulla porttitor massa id neque aliquam vestibulum. Libero nunc consequat interdum varius sit amet. A diam maecenas sed enim ut sem viverra.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Eget gravida cum sociis natoque penatibus et magnis dis. Felis eget nunc lobortis mattis aliquam faucibus purus. In egestas erat imperdiet sed euismod nisi porta lorem. Id volutpat lacus laoreet non curabitur gravida arcu.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Volutpat est velit egestas dui id ornare arcu odio ut Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Tortor consequat id porta nibh venenatis. Pretium fusce id velit ut. Tellus pellentesque eu tincidunt tortor aliquam.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat est velit egestas dui id ornare arcu odio ut. Tortor consequat id porta nibh venenatis. Pretium fusce id velit ut. Tellus pellentesque eu tincidunt tortor aliquam.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Volutpat est velit egestas dui id ornare arcu odio ut.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
