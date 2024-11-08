import { IsBoolean, IsNumber, IsString } from "class-validator";

export class TaskDto {
  @IsString({ groups: ["newTask"] })
  id!: string;

  @IsString({ groups: ["newTask"] })
  title!: string;

  @IsString({ groups: ["newTask"] })
  description!: string;

  @IsString({ groups: ["newTask"] })
  createAt!: string;

  @IsBoolean({ groups: ["newTask"] })
  complete!: boolean;
}
