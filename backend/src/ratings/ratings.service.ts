import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Knex } from 'nestjs-knex';
import { InjectConnection } from 'nest-knexjs';

@Injectable()
export class RatingsService {
  constructor(@InjectConnection() private readonly knex: Knex) {
    this.knex = knex;
  }

  create(createRatingDto: CreateRatingDto) {
    // 'This action adds a new rating' using knex.raw;
    return this.knex.raw(
      `INSERT INTO ratings (id_student_fk, id_class_fk, rating_value, commentary) VALUES (${createRatingDto.id_student_fk}, ${createRatingDto.id_class_fk}, ${createRatingDto.rating_value}, '${createRatingDto.commentary}');`,
    );
  }

  findAll() {
    // return `This action returns all ratings` using knex.raw;
    return this.knex.raw(`SELECT * FROM ratings;`).then((res) => res.rows);
  }

  findOne(id: number) {
    // return `This action returns a #${id} rating` using knex.raw;
    return this.knex
      .raw(`SELECT * FROM ratings WHERE id_rating_pk = ${id};`)
      .then((res) => res.rows[0]);
  }

  findByClassId(id: number) {
    // return `This action returns a #${id} rating` and gets the name of the student according to his foreign key using knex.raw;
    return this.knex
      .raw(
        `
      SELECT
        r.id_rating_pk AS id_rating_pk,
        s.name AS student_name,
        r.id_class_fk AS id_class_fk,
        r.rating_value AS rating_value,
        r.commentary AS commentary
      FROM
        ratings r
        INNER JOIN students s ON r.id_student_fk = s.id_student_pk
      WHERE
        r.id_class_fk = ${id};
      `,
      )
      .then((res) => res.rows);
    // return this.knex
    // .raw(`SELECT * FROM ratings WHERE id_class_fk = ${id};`)
    // .then((res) => res.rows);
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    // return `This action updates a #${id} rating` using knex.raw;
    return this.knex.raw(
      `UPDATE ratings SET id_student_fk = ${updateRatingDto.id_student_fk}, id_class_fk = ${updateRatingDto.id_class_fk}, rating_value = ${updateRatingDto.rating_value}, commentary = '${updateRatingDto.commentary}' WHERE id_rating_pk = ${id};`,
    );
  }

  remove(id: number) {
    // return `This action removes a #${id} rating` using knex.raw;
    return this.knex.raw(`DELETE FROM ratings WHERE id_rating_pk = ${id};`);
  }
}
