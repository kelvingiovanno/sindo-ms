export type PricingStatus = 'ACTIVE' | 'INACTIVE' | 'EXPIRED';

export interface PricingItem {
    code: string;
    customer: string;
    customerCode: string;
    specialPrice: number;
    minQty: number;
    startDate: string;
    endDate: string;
    status: PricingStatus;
}

export interface PricingList {
    data: PricingItem[];
    meta: {
        page: number;
        row: number;
        total: number;
        totalPage: number;
    };
}
