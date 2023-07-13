/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('complaints').del();

  // Inserts seed entries
  await knex('complaints').insert([
    {
      id_student_fk: 1,
      id_rating_fk: 2,
      description: 'Muito ofensivo',
    },
  ]);
}
