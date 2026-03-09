import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class RevokeStoreAccessDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('all', { each: true })
    userIds: string[];
}
