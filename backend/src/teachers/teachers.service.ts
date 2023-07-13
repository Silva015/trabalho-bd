import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class TeachersService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createTeacherDto: CreateTeacherDto) {
    // 'This action adds a new teacher' using knex.raw;
    return this.knex.raw(
      `INSERT INTO teachers (name, id_department_fk) VALUES ('${createTeacherDto.name}', ${createTeacherDto.id_department_fk});`,
    );
  }

  async findAll() {
    const res = await this.knex.raw(`SELECT * FROM teachers;`);
    return res.rows;
  }

  async findOne(id: number) {
    // return `This action returns a #${id} teacher` using knex.raw;
    const res = await this.knex.raw(
      `SELECT * FROM teachers WHERE id_teacher_pk = ${id};`,
    );
    return res.rows[0];
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    // return `This action updates a #${id} teacher`;
    return this.knex.raw(
      `UPDATE teachers SET name = '${updateTeacherDto.name}', id_department_fk = ${updateTeacherDto.id_department_fk} WHERE id_teacher_pk = ${id};`,
    );
  }

  remove(id: number) {
    // remove the teacher with this id and return the removed teacher using knex.raw;
    return this.knex.raw(`DELETE FROM teachers WHERE id_teacher_pk = ${id};`);
  }
}
