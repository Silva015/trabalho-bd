/* eslint-disable prettier/prettier */
exports.down = function (knex) {
  return knex.raw(`
    DROP TABLE IF EXISTS complaints;
    DROP TABLE IF EXISTS ratings;
    DROP TABLE IF EXISTS classes;
    DROP TABLE IF EXISTS subjects;
    DROP TABLE IF EXISTS teachers;
    DROP TABLE IF EXISTS students;
    DROP TABLE IF EXISTS departments;
    `);
};

exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE IF NOT EXISTS students (
        id_student_pk SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        register VARCHAR(255) NOT NULL,
        course VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS departments (
        id_department_pk INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS subjects (
        id_subject_pk VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        id_department_fk INTEGER NOT NULL,
        FOREIGN KEY (id_department_fk) REFERENCES departments (id_department_pk)
    );

    CREATE TABLE IF NOT EXISTS teachers (
        id_teacher_pk SERIAL PRIMARY KEY,
        id_department_fk INTEGER NOT NULL,
        name VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_department_fk) REFERENCES departments (id_department_pk)
    );
    
    
    CREATE TABLE IF NOT EXISTS classes (
        id_class_pk SERIAL PRIMARY KEY,
        id_subject_fk VARCHAR(255) NOT NULL,
        id_department_fk INTEGER NOT NULL,
        id_teacher_fk INTEGER NOT NULL,
        class_number INTEGER NOT NULL,
        class_period VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_subject_fk) REFERENCES subjects (id_subject_pk),
        FOREIGN KEY (id_department_fk) REFERENCES departments (id_department_pk),
        FOREIGN KEY (id_teacher_fk) REFERENCES teachers (id_teacher_pk)
    );
        
    CREATE TABLE IF NOT EXISTS ratings (
        id_rating_pk SERIAL PRIMARY KEY,
        commentary VARCHAR(255) NOT NULL,
        rating_value INTEGER NOT NULL,
        id_student_fk INTEGER NOT NULL,
        id_class_fk INTEGER NOT NULL,
        FOREIGN KEY (id_student_fk) REFERENCES students (id_student_pk),
        FOREIGN KEY (id_class_fk) REFERENCES classes (id_class_pk)
    );
            
    CREATE TABLE IF NOT EXISTS complaints (
        id_complaint_pk SERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL,
        id_student_fk INTEGER NOT NULL,
        id_rating_fk INTEGER NOT NULL,
        FOREIGN KEY (id_student_fk) REFERENCES students (id_student_pk),
        FOREIGN KEY (id_rating_fk) REFERENCES ratings (id_rating_pk)
    );
  `);
};
