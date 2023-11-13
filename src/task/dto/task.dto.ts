import { IsNotEmpty, IsString, MinLength, IsBoolean } from "class-validator";

export class TaskDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    readonly description: string;
    @IsNotEmpty()
    @IsBoolean()
    readonly isDone: boolean;
};