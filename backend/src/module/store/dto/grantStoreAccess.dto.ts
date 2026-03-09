import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class GrantStoreAccessDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('all', { each: true })
    userIds: string[];
}
