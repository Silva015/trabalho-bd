import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class ClassesService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createClassDto: CreateClassDto) {
    // 'This action adds a new class' using knex.raw;
    return this.knex.raw(
      `INSERT INTO classes (class_number, class_period, id_subject_fk, id_department_fk, id_teacher_fk) VALUES (${createClassDto.class_number}, '${createClassDto.class_period}', '${createClassDto.id_subject_fk}', ${createClassDto.id_department_fk}, ${createClassDto.id_teacher_fk});`,
    );
  }

  async findAll() {
    const res = await this.knex.raw(`SELECT * FROM classes;`);
    return res.rows;
  }

  async findAllNames() {
    // get the names of each object related to foreign keys in the classes table using knex.raw;
    const res = await this.knex.raw(
      `
      SELECT
        c.id_class_pk AS id_class_pk,
        sub.name AS subject_name,
        class_number AS class_number,
        class_period AS class_period,
        t.name AS professor_name,
        d.name AS department_name
      FROM
        classes c
        INNER JOIN teachers t ON c.id_teacher_fk = t.id_teacher_pk
        INNER JOIN departments d ON c.id_department_fk = d.id_department_pk
        INNER JOIN subjects sub ON c.id_subject_fk = sub.id_subject_pk;
      `,
    );
    return res.rows;
  }

  async findOne(id: number) {
    // return `This action returns a #${id} class` using knex.raw;
    const res = await this.knex.raw(
      `SELECT * FROM classes WHERE id_class_pk = ${id};`,
    );
    return res.rows[0];
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    // return `This action updates a #${id} class`;
    return this.knex.raw(
      `UPDATE classes SET class_number = ${updateClassDto.class_number}, class_period = '${updateClassDto.class_period}', id_subject_fk = '${updateClassDto.id_subject_fk}', id_department_fk = ${updateClassDto.id_department_fk}, id_teacher_fk = ${updateClassDto.id_teacher_fk} WHERE id_class_pk = ${id};`,
    );
  }

  remove(id: number) {
    // remove the class with this id and return the removed class using knex.raw;
    return this.knex.raw(`DELETE FROM classes WHERE id_class_pk = ${id};`);
  }
}
