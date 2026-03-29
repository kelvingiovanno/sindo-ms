export type InventoryStatus =
    | 'IN_STOCK'
    | 'OUT_OF_STOCK'
    | 'LOW_STOCK'
    | 'DISCONTINUED';

export interface Inventory {
    name: string;
    code: string;
    partnumber: string;
    brand: string;
    category: string;
    type: string;
    unit: string;
    status: InventoryStatus;
    lowStockAlert: string;
    location: string;
    cost: number;
    price: number;
    description: string;
    models: string[];
    measurements: string[];
}
