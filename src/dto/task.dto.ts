import { IsNumber, IsString } from 'class-validator';

export class TaskDto {
    @IsNumber()
    id!: number;

    @IsString({groups: ['newTask']})
    title!: string;

    @IsString({groups: ['newTask']})
    description!: string;
}