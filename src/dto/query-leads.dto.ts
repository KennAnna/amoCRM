import {IsOptional, IsString, MinLength} from "class-validator";

export class QueryLeadsDto {
    @IsString()
    @IsOptional()
    @MinLength(3)
    query: string;
}