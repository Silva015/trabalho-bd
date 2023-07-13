/* eslint-disable prettier/prettier */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('teachers').del();

  // Inserts seed entries
  await knex('teachers').insert([
    { name: 'Pedro', id_department_fk: 508 },
    { name: 'Lamar', id_department_fk: 508 },
    { name: 'Díbio', id_department_fk: 508 },
    { name: 'Carla', id_department_fk: 508 },
    { name: 'Mandelli', id_department_fk: 508 },
  ]);
}
