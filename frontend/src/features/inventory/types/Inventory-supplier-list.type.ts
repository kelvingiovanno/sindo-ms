export interface SupplierItem {
    code: string;
    supplier: string;
    price: number;
    lastPurchase: string;
    totalPurchase: number;
    totalQuantity: string;
    preferred: boolean;
}

export interface SupplierList {
    data: SupplierItem[];
    meta: {
        page: number;
        row: number;
        total: number;
        totalPage: number;
    };
}
