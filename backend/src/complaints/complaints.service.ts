import { Injectable } from '@nestjs/common';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class ComplaintsService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createComplaintDto: CreateComplaintDto) {
    // 'This action adds a new complaint' using knex.raw;
    return this.knex.raw(
      `INSERT INTO complaints (id_student_fk, id_rating_fk, description) VALUES (${createComplaintDto.id_student_fk}, ${createComplaintDto.id_rating_fk}, '${createComplaintDto.description}');`,
    );
  }

  findAll() {
    // return `This action returns all complaints` using knex.raw;
    return this.knex.raw(`SELECT * FROM complaints;`).then((res) => res.rows);
  }

  findOne(id: number) {
    // return `This action returns a #${id} complaint` using knex.raw;
    return this.knex
      .raw(`SELECT * FROM complaints WHERE id_complaint_pk = ${id};`)
      .then((res) => res.rows[0]);
  }

  update(id: number, updateComplaintDto: UpdateComplaintDto) {
    // return `This action updates a #${id} complaint` using knex.raw;
    return this.knex.raw(
      `UPDATE complaints SET id_student_fk = ${updateComplaintDto.id_student_fk}, id_rating_fk = ${updateComplaintDto.id_rating_fk}, description = '${updateComplaintDto.description}' WHERE id_complaint_pk = ${id};`,
    );
  }

  remove(id: number) {
    // return `This action removes a #${id} complaint` using knex.raw;
    return this.knex.raw(
      `DELETE FROM complaints WHERE id_complaint_pk = ${id};`,
    );
  }
}
