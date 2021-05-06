
const fs = require('fs');
const actions = {};

fs
  .readdirSync(__dirname)
  .filter(file => ((file.indexOf('.') !== 0) && (file !== 'index.js')))
  .forEach((file) => {
    const name = file.replace('.js', '');
    actions[name.replace('.controller','')] = require(`./${file}`);
  });

module.exports = actions;