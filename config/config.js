var config = {};

config.connection = {
  'host': 'localhost',
  'user': 'root',
  'port': '8889',
  'password': 'root'
};
config.database = {
  'name': 'sampledb',
  logging: false,
  dialect: 'mysql'
}

module.exports = config;