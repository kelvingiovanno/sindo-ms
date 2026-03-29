import type { InventoryStatus } from '../types/inventory.type';

export const getInventoryStatusStyle = (status: InventoryStatus) => {
    switch (status) {
        case 'IN_STOCK':
            return {
                label: 'In Stock',
                bg: 'bg-green-100 border border-green-300',
                text: 'text-green-600',
            };
        case 'LOW_STOCK':
            return {
                label: 'Low Stock',
                bg: 'bg-yellow-100 border border-yellow-300',
                text: 'text-yellow-600',
            };
        case 'OUT_OF_STOCK':
            return {
                label: 'Out of Stock',
                bg: 'bg-red-100 border border-red-300',
                text: 'text-red-600',
            };
        case 'DISCONTINUED':
            return {
                label: 'Discontinued',
                bg: 'bg-slate-200 border border-slate-300',
                text: 'text-slate-600',
            };
        default:
            return {
                label: status,
                bg: 'bg-slate-100 border border-slate-300',
                text: 'text-slate-600',
            };
    }
};
