import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
// why is this file here? because we need to update the student
// and we need to update the student with the same fields as the create student dto
// but we don't want to make all the fields required
// so we use the PartialType from @nestjs/mapped-types
// and we pass the CreateStudentDto as a generic
// and now all the fields are optional
// and we can use this dto in the update method in the students service
// and we can use this dto in the update method in the students controller
// and we can use this dto in the update method in the students resolver

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
