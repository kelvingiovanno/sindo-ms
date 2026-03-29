import type { PricingStatus } from '../types/inventory-pricing-list.types';

export const getInventoryPricingStatusStyle = (status: PricingStatus) => {
    switch (status) {
        case 'ACTIVE':
            return {
                label: 'Active',
                bg: 'bg-green-100 border border-green-300',
                text: 'text-green-600',
            };
        case 'INACTIVE':
            return {
                label: 'Inactive',
                bg: 'bg-slate-100 border border-slate-300',
                text: 'text-slate-600',
            };
        case 'EXPIRED':
            return {
                label: 'Expired',
                bg: 'bg-red-100 border border-red-300',
                text: 'text-red-600',
            };
        default:
            return {
                label: status,
                bg: 'bg-slate-100 border border-slate-300',
                text: 'text-slate-600',
            };
    }
};
