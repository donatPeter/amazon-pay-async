const { Config } = require('./lib/config');
const { Amazon } = require('./lib/amazon');
const Environment = require('./lib/environment');

function connect(opts) {
  return new Amazon(new Config(opts));
}

module.exports = {
  connect,
  Environment,
};
