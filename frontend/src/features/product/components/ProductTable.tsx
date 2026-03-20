import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table"
import { formatNumber } from "@/shared/lib"
import { Eye } from "lucide-react"
import { products } from "../dummy"

const ProductTable = () => {
    return (
        <Table className="bg-white ">
            <TableHeader>
                <TableRow className="bg-slate-100 border-t border-b border-slate-300">
                    <TableHead className="text-xs text-slate-500 font-medium">SKU</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium">Name</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium">Part Number</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium">Model</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium">Category</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium">Brand</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium text-center">Stock</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium text-center">Unit</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium text-center">Cost</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium text-center">Price</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium text-center">Status</TableHead>
                    <TableHead className="text-xs text-slate-500 font-medium text-center">Details</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody className="bg-white ">
                {
                    products.map((product) => (
                        <TableRow
                            key={product.sku}
                            className="hover:bg-slate-50 border-b border-slate-300 text-sm text-slate-700"
                        >
                        
                            <TableCell >{product.sku}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.partNumber}</TableCell>
                            <TableCell>{product.model}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.brand}</TableCell>
                            <TableCell className="text-center">{product.stock}</TableCell>
                            <TableCell className="text-center">{product.unit}</TableCell>
                            <TableCell>
                                <div className="flex justify-between items-center tabular-nums">
                                    <span className="text-slate-500">Rp</span>
                                    <span>{formatNumber(product.price)}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-between items-center tabular-nums">
                                    <span className="text-slate-500">Rp</span>
                                    <span>{formatNumber(product.cost)}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                <span
                                className={`px-2 py-1 rounded text-xs font-medium ${
                                    product.stock === 0
                                    ? "bg-red-100 text-red-700"
                                    : product.stock <= 5
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                                >
                                {product.stock === 0
                                    ? "Out of Stock"
                                    : product.stock <= 5
                                    ? "Low Stock"
                                    : "Active"}
                                </span>
                            </TableCell>
                            <TableCell className="text-center">
                                <button
                                    className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600"
                                >
                                    <Eye className="w-3 h-3" />
                                    View
                                </button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default ProductTable;