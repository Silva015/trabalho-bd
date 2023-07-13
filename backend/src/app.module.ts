import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { DepartmentsModule } from './departments/departments.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { RatingsModule } from './ratings/ratings.module';
import { ComplaintsModule } from './complaints/complaints.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          host: 'localhost',
          user: 'arthurcarneiro',
          password: 'tutu',
          database: 'BD',
          charset: 'utf8',
        },
      },
    }),
    StudentsModule,
    DepartmentsModule,
    SubjectsModule,
    TeachersModule,
    ClassesModule,
    RatingsModule,
    ComplaintsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
