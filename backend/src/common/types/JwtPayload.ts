export interface JwtPayload {
    sub: string;
    username: string;
    role: string;
    storeIds: string[];
}
