import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class SubjectsService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createSubjectDto: CreateSubjectDto) {
    // 'This action adds a new subject' using knex.raw;
    return this.knex.raw(
      `INSERT INTO subjects (id_subject_pk, name, id_department_fk) VALUES ('${createSubjectDto.id_subject_pk}', '${createSubjectDto.name}', ${createSubjectDto.id_department_fk});`,
    );
  }

  async findAll() {
    const res = await this.knex.raw(`SELECT * FROM subjects;`);
    return res.rows;
  }

  async findOne(id: string) {
    // return `This action returns a #${id} subject` using knex.raw;
    const res = await this.knex.raw(
      `SELECT * FROM subjects WHERE id_subject_pk = '${id}';`,
    );
    return res.rows[0];
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto) {
    // return `This action updates a #${id} subject`;
    return this.knex.raw(
      `UPDATE subjects SET id_subject_pk = '${id}', name = '${updateSubjectDto.name}', id_department_fk = ${updateSubjectDto.id_department_fk} WHERE id_subject_pk = '${id}';`,
    );
  }

  remove(id: string) {
    // remove the subject with this id and return the removed subject using knex.raw;
    return this.knex.raw(`DELETE FROM subjects WHERE id_subject_pk = '${id}';`);
  }
}
