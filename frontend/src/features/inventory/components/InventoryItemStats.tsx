import { formatCurrencyIDR } from '@/shared/utils/number.utils';
import type { InventoryStatus } from '../types/inventory.type';
import { getInventoryStatusStyle } from '../utils/inventory-status.utils';

interface Props {
    currentStock: number;
    stockStatus: InventoryStatus;
    inventoryValue: number;
    isLoading: boolean;
}

const InventoryItemStats = ({
    currentStock,
    stockStatus,
    inventoryValue,
    isLoading = false,
}: Props) => {
    const statusStyle = getInventoryStatusStyle(stockStatus);
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white border border-slate-300 rounded-sm p-6 animate-pulse"
                    >
                        <div className="h-3 w-24 bg-slate-200 rounded" />
                        <div className="mt-3 h-6 w-20 bg-slate-200 rounded" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-300 rounded-sm p-6">
                <p className="text-xs text-slate-500">Current Stock</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                    {currentStock}
                </p>
            </div>

            <div className="bg-white border border-slate-300 rounded-sm p-6">
                <p className="text-xs text-slate-500">Status</p>

                <div
                    className={`inline-block px-2 py-1 rounded-sm mt-2 ${statusStyle.bg}`}
                >
                    <p
                        className={`text-base font-semibold ${statusStyle.text}`}
                    >
                        {statusStyle.label}
                    </p>
                </div>
            </div>

            <div className="bg-white border border-slate-300 rounded-sm p-6">
                <p className="text-xs text-slate-500">Inventory Value</p>
                <p className="mt-2 text-xl font-semibold text-slate-900">
                    {formatCurrencyIDR(inventoryValue)}
                </p>
            </div>
        </div>
    );
};

export default InventoryItemStats;
