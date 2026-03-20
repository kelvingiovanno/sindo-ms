import { type ReactNode } from "react";

type StatCardProps = {
    title: string,
    children: ReactNode,
};

const StatCard = ({ 
    title, 
    children 
}: StatCardProps) => {
    return (
        <div className="bg-white border border-slate-200 rounded-md p-6 space-y-2">
            <p className="text-sm text-slate-500">{title}</p>
            {children}
        </div>
     );
}

const ProductStats = () => {
    
    const formatNumber = (value: number) =>
        new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <StatCard title="Total Products">
            <p className="text-2xl font-semibold text-slate-900">
                {531}
            </p>
        </StatCard>

        <StatCard title="Inventory Value">
            <div className="flex justify-start items-center gap-2 tabular-nums">
                <span className="text-slate-400 text-sm">Rp</span>
                <span className="text-2xl font-semibold text-slate-900">
                    {formatNumber(52983200)}
                </span>
            </div>
        </StatCard>

        <StatCard title="Low Stock">
            <p className="text-2xl font-semibold text-yellow-500">
                {34}
            </p>
        </StatCard>

        <StatCard title="Out of Stock">
            <p className="text-2xl font-semibold text-red-500">
                {4}
            </p>
        </StatCard>
    </div>
  );
}

export default ProductStats;