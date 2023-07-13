import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class DepartmentsService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createDepartmentDto: CreateDepartmentDto) {
    // 'This action adds a new department' using knex.raw;
    return this.knex.raw(
      `INSERT INTO departments (id_department_pk, name) VALUES ( ${createDepartmentDto.id_department_pk}, '${createDepartmentDto.name}');`,
    );
  }

  async findAll() {
    const res = await this.knex.raw(`SELECT * FROM departments;`);
    return res.rows;
  }

  async findOne(id: number) {
    // return `This action returns a #${id} department` using knex.raw;
    const res = await this.knex.raw(
      `SELECT * FROM departments WHERE id_department_pk = ${id};`,
    );
    return res.rows[0];
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    // return `This action updates a #${id} department`;
    return this.knex.raw(
      `UPDATE departments SET id_department_pk = ${id}, name = '${updateDepartmentDto.name}' WHERE id_department_pk = ${id};`,
    );
  }

  remove(id: number) {
    // remove the department with this id and return the removed department using knex.raw;
    return this.knex.raw(
      `DELETE FROM departments WHERE id_department_pk = ${id};`,
    );
  }
}
