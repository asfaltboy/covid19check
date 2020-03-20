import { IsString, IsArray, IsNumber, Min, IsUUID, Max, MaxLength, IsBoolean, IsObject, IsOptional, IsEnum, IsInt } from 'class-validator';

export class GetSubmissionsDto {

    @IsString()
    @IsOptional()
    limit: number;

    @IsString()
    @IsOptional()
    offset: number;
    
}
