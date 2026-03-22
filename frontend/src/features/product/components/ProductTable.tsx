import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/components/ui/table"
import { formatNumber } from "@/shared/lib"
import { Eye } from "lucide-react"
import { products } from "../dummy"
import { Button } from "@/shared/components/ui/button"

const ProductTable = () => {
    return (
        <div className="bg-white rounded-sm border border-slate-300 overflow-hidden">
            <Table className="w-full border-spacing-0">
                
                <TableHeader>
                    <TableRow className="bg-slate-200 border-b border-slate-200">
                        <TableHead className="text-xs text-slate-500 font-medium pl-4">SKU</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium">Brand</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium">Model</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium">Category</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium">Part Number</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium">Name</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium text-center">Cost</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium text-center">Price</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium text-center">Status</TableHead>
                        <TableHead className="text-xs text-slate-500 font-medium text-center pr-4">Details</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody className="divide-y divide-slate-200">
                    {
                        products.map((product) => (
                            <TableRow
                                key={product.sku}
                                className="hover:bg-slate-100 text-sm text-slate-700"
                            >
                                <TableCell className="pl-4">{product.sku}</TableCell>
                                <TableCell>{product.brand}</TableCell>
                                
                                <TableCell>{product.model}</TableCell>
                                
                                <TableCell>{product.category}</TableCell>
                                
                                <TableCell>{product.partNumber}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                
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

                                <TableCell className="pr-4 text-center">
                                    <span
                                        className={`px-2 py-1 rounded text-xs ${
                                            product.stock === 0
                                            ? "bg-red-100 text-red-700"
                                            : product.stock <= 5
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                    {
                                        product.stock === 0
                                            ? "Out of Stock"
                                            : product.stock <= 5
                                            ? "Low Stock"
                                            : "Active"
                                    }
                                    </span>
                                </TableCell>

                                <TableCell className="text-center pr-4">
                                    <Button variant={"outline"} size={"xs"} className="rounded-xs">
                                        <Eye className="w-3 h-3" />
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default ProductTable;