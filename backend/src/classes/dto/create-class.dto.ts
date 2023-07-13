export class CreateClassDto {
  class_number: number;
  class_period: string;
  id_subject_fk: number;
  id_department_fk: number;
  id_teacher_fk: number;
}
