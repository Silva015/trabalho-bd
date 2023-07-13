/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('students').del();

  // Inserts seed entries
  await knex('students').insert(
    // make an array of objects to insert into the table 'students';
    [
      {
        name: 'John Doe',
        email: 'john@gmail.com',
        register: '123456789',
        course: 'Computer Science',
        password: '123456',
      },
      {
        name: 'Jane Doe',
        email: 'jane@gmail.com',
        register: '987654321',
        course: 'Computer Science',
        password: '123456',
      },
      {
        name: 'Jaque',
        email: 'jaque@gmail.com',
        register: '111111111',
        course: 'Computer Science',
        password: '123456',
      },
      {
        name: 'Jessica',
        email: 'jessica@gmail.com',
        register: '222222222',
        course: 'Computer Science',
        password: '123456',
      },
      {
        name: 'Jack',
        email: 'jack@gmail.com',
        register: '333333333',
        course: 'Computer Science',
        password: '123456',
      },
    ],
  );
}
