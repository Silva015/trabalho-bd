export class CreateRatingDto {
  id_student_fk: number;
  id_class_fk: number;
  rating_value: number;
  commentary: string;
}
