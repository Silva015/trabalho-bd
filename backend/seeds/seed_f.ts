/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ratings').del();

  // Inserts seed entries
  await knex('ratings').insert([
    {
      commentary: 'Foi bem legalm',
      rating_value: 5,
      id_student_fk: 1,
      id_class_fk: 2,
    },
    {
      commentary: 'Foi bem ruim',
      rating_value: 5,
      id_student_fk: 1,
      id_class_fk: 2,
    },
  ]);
}
