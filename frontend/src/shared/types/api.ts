export type AuthMeResponse = {
    accessToken: string;
};

export type AuthLoginResponse = {
    accessToken: string;
    refreshToken: string;
    stores: {
        storeId: string,
        storeName: string,
    }[],
}