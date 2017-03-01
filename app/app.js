// load root
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./redux-tools/root.prod');
} else {
  module.exports = require('./redux-tools/root.dev');
}
