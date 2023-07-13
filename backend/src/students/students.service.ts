import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class StudentsService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createStudentDto: CreateStudentDto) {
    // 'This action adds a new student' using knex.raw;
    return this.knex.raw(
      `INSERT INTO students (name, email, register, course, password) VALUES ('${createStudentDto.name}', '${createStudentDto.email}', '${createStudentDto.register}', '${createStudentDto.course}', '${createStudentDto.password}');`,
    );
  }

  async findAll() {
    const res = await this.knex.raw(`SELECT * FROM students;`);
    return res.rows;
  }

  async findOne(id: number) {
    // return `This action returns a #${id} student` using knex.raw;
    const res = await this.knex.raw(
      `SELECT * FROM students WHERE id_student_pk = ${id};`,
    );
    return res.rows[0];
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    // return `This action updates a #${id} student`;
    return this.knex.raw(
      `UPDATE students SET name = '${updateStudentDto.name}', email = '${updateStudentDto.email}', register = '${updateStudentDto.register}', course = '${updateStudentDto.course}', password = '${updateStudentDto.password}' WHERE id_student_pk = ${id};`,
    );
  }

  async remove(id: number) {
    // remove the student with this id and return the removed student using knex.raw;
    return this.knex.raw(`DELETE FROM students WHERE id_student_pk = ${id};`);
  }
}
