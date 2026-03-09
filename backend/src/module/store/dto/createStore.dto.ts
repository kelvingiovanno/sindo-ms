import { IsString, MinLength } from 'class-validator';

export class CreateStoreDto {
    @IsString()
    @MinLength(5)
    name: string;
}
