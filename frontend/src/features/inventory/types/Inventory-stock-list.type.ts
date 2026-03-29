export interface StockItem {
    code: string;
    date: string;
    reference: string;
    in: number;
    out: number;
    balance: number;
    description: string;
}

export interface StockList {
    data: StockItem[];
    meta: {
        page: number;
        row: number;
        total: number;
        totalPage: number;
    };
}
