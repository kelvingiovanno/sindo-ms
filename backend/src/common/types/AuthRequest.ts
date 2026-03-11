import { Request } from 'express';
import { Payload } from './Payload';

export interface AuthRequest extends Request {
    user: Payload;
}
