import { Edit3, Trash2 } from 'lucide-react';
import type { PricingItem } from '../types/inventory-pricing-list.types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/shared/components/ui/table';
import { Button } from '@/shared/components/ui/button';
import { getInventoryPricingStatusStyle } from '../utils/inventory-pricing-status.utils';
import { formatCurrencyIDR } from '@/shared/utils/number.utils';

const InventoryPricingTable = ({
    data,
    unit,
    isLoading,
}: {
    data: PricingItem[];
    unit: string;
    isLoading: boolean;
}) => {
    return (
        <div
            className={`bg-white rounded-sm border border-slate-300 overflow-hidden transition-opacity ${
                isLoading ? 'opacity-70 animate-pulse' : ''
            }`}
        >
            <Table>
                <TableHeader>
                    <TableRow className="text-xs bg-slate-200">
                        <TableHead className="pl-4 text-left text-slate-500">
                            Code
                        </TableHead>
                        <TableHead className="text-left text-slate-500">
                            Customer Code
                        </TableHead>
                        <TableHead className="text-left text-slate-500">
                            Customer
                        </TableHead>
                        <TableHead className="text-left text-slate-500">
                            Price
                        </TableHead>
                        <TableHead className="text-left text-slate-500">
                            Min Qty
                        </TableHead>
                        <TableHead className="text-left text-slate-500">
                            Start Date
                        </TableHead>
                        <TableHead className="text-left text-slate-500">
                            End Date
                        </TableHead>
                        <TableHead className="text-center text-slate-500">
                            Status
                        </TableHead>
                        <TableHead className="text-center text-slate-500 pr-4">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                {Array.from({ length: 6 }).map((_, j) => (
                                    <TableCell key={j}>
                                        <div className="h-4 w-full bg-slate-200 rounded" />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : data.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={10}
                                className="text-center text-xs text-slate-500"
                            >
                                No data available
                            </TableCell>
                        </TableRow>
                    ) : (
                        data.map((item, index) => {
                            const statusStyle = getInventoryPricingStatusStyle(
                                item.status,
                            );

                            return (
                                <TableRow
                                    key={index}
                                    className="hover:bg-slate-100 text-xs"
                                >
                                    <TableCell className="text-left text-slate-700 pl-4">
                                        {item.code}
                                    </TableCell>
                                    <TableCell className="text-left text-slate-700">
                                        {item.customerCode}
                                    </TableCell>
                                    <TableCell className="text-left text-slate-700">
                                        {item.customer}
                                    </TableCell>
                                    <TableCell className="text-left text-slate-700">
                                        {formatCurrencyIDR(item.specialPrice)}
                                    </TableCell>
                                    <TableCell className="text-left text-slate-700">
                                        {item.minQty
                                            ? `${item.minQty} ${unit}`
                                            : `- ${unit}`}
                                    </TableCell>
                                    <TableCell className="text-left text-slate-700">
                                        {item.startDate}
                                    </TableCell>
                                    <TableCell className="text-left text-slate-700">
                                        {item.endDate ?? '-'}
                                    </TableCell>
                                    <TableCell className="text-center text-slate-700">
                                        <div
                                            className={`inline-block px-1.5 py-1 rounded  ${statusStyle.bg}`}
                                        >
                                            <p
                                                className={`font-medium ${statusStyle.text}`}
                                            >
                                                {statusStyle.label}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell className="pr-4">
                                        <div className="flex justify-center items-center gap-2">
                                            <Button
                                                variant={'outline'}
                                                size={'icon-xs'}
                                                className="rounded"
                                            >
                                                <Edit3 size={16} />
                                            </Button>
                                            <Button
                                                variant={'destructive'}
                                                size={'icon-xs'}
                                                className="rounded"
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default InventoryPricingTable;
