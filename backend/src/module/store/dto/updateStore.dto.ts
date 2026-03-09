import { IsString, MinLength } from 'class-validator';

export class UpdateStoreDto {
    @IsString()
    @MinLength(5)
    name: string;
}
