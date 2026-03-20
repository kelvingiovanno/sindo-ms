type Props = {
  total: number;
  inStock: number;
  lowStock: number;
  outOfStock: number;
};

export const InventoryStatusBar = ({
  total,
  inStock,
  lowStock,
  outOfStock,
}: Props) => {
  const inStockPercent = (inStock / total) * 100;
  const lowStockPercent = (lowStock / total) * 100;
  const outOfStockPercent = (outOfStock / total) * 100;

  return (
    <div className="w-full max-w-md space-y-2">
      {/* HEADER */}
      <div className="flex items-end gap-2">
        <h2 className="text-lg font-semibold text-slate-900">
          {total.toLocaleString()}
        </h2>
        <span className="text-sm text-slate-500">Product</span>
      </div>

      {/* BAR */}
      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden flex">
        <div
          className="bg-green-500"
          style={{ width: `${inStockPercent}%` }}
        />
        <div
          className="bg-yellow-400"
          style={{ width: `${lowStockPercent}%` }}
        />
        <div
          className="bg-red-500"
          style={{ width: `${outOfStockPercent}%` }}
        />
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span>In stock: {inStock}</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span>Low stock: {lowStock}</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span>Out of stock: {outOfStock}</span>
        </div>
      </div>
    </div>
  );
};