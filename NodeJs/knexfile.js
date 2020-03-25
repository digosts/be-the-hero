// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '123456',
      database : 'bethehero'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
};
