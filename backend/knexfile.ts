/* eslint-disable prettier/prettier */
import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'arthurcarneiro',
      password: 'tutu',
      database: 'BD',
      charset: 'utf8',
    },
  },
};

module.exports = config;
