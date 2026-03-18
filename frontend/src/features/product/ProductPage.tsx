import { useEffect, useState } from "react";
import {
    Field,
    FieldLabel,
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    Select, SelectContent, SelectGroup, SelectItem, SelectTrigger,SelectValue,
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/shared/components/ui";

import { Eye, Search } from "lucide-react";
import { products } from "./dummy";
import ProductStats from "./components/ProductStats";
import { SelectStatusFilter } from "./components/ProductSelectFilter";

const ProductPage = () => {


const formatNumber = (value) =>
  new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  useEffect(() => {
    console.log('rerender');
  });

    return (
        <>
            <div className="mb-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">
                    Products
                </h1>
                <p className="text-sm text-slate-500">
                    Add, edit, and organize your products
                </p>
            </div>

            <ProductStats/>

            <div className="bg-white p-4 rounded-sm border border-slate-200">

                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 md:gap-0">

                    <div className="flex flex-wrap gap-2">
                        <SelectStatusFilter />
                        <div className="relative">
                            <Select defaultValue="All">
                                <SelectTrigger className="w-35 pr-8">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                    <SelectItem value="All">All Status</SelectItem>
                                    <SelectItem value="In Stock">In Stock</SelectItem>
                                    <SelectItem value="Low Stock">Low Stock</SelectItem>
                                    <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                                ✕
                            </button>
                        </div>

                        <div className="relative">
                            <Select defaultValue="All">
                            <SelectTrigger className="w-[160px] pr-8">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                <SelectItem value="All">All Categories</SelectItem>
                                <SelectItem value="Engine">Engine</SelectItem>
                                <SelectItem value="Pump">Pump</SelectItem>
                                <SelectItem value="Filter">Filter</SelectItem>
                                <SelectItem value="Cooling">Cooling</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>

                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                            ✕
                            </button>
                        </div>

                        {/* BRAND */}
                        <div className="relative">
                            <Select defaultValue="All">
                            <SelectTrigger className="w-[160px] pr-8">
                                <SelectValue placeholder="Brand" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectGroup>
                                <SelectItem value="All">All Brands</SelectItem>
                                <SelectItem value="Racor">Racor</SelectItem>
                                <SelectItem value="JMP">JMP</SelectItem>
                                <SelectItem value="Volvo Penta">Volvo Penta</SelectItem>
                                <SelectItem value="Jabsco">Jabsco</SelectItem>
                                <SelectItem value="Yanmar">Yanmar</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                            </Select>

                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                            ✕
                            </button>
                        </div>

                    </div>

                    <div className="relative w-full sm:max-w-xs">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-200"
                            
                        />
                    </div>
                </div>

                <Table className="bg-white border-t border-b border-slate-200">
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="text-slate-700 font-semibold">SKU</TableHead>
                            <TableHead className="text-slate-700 font-semibold">Name</TableHead>
                            <TableHead className="text-slate-700 font-semibold">Part Number</TableHead>
                            <TableHead className="text-slate-700 font-semibold">Model</TableHead>
                            <TableHead className="text-slate-700 font-semibold">Category</TableHead>
                            <TableHead className="text-slate-700 font-semibold">Brand</TableHead>
                            <TableHead className="text-slate-700 font-semibold text-center">Stock</TableHead>
                            <TableHead className="text-slate-700 font-semibold text-center">Unit</TableHead>
                            <TableHead className="text-slate-700 font-semibold text-center">Cost</TableHead>
                            <TableHead className="text-slate-700 font-semibold text-center">Price</TableHead>
                            <TableHead className="text-slate-700 font-semibold text-center">Status</TableHead>
                            <TableHead className="text-slate-700 font-semibold text-center">Details</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {
                            products.map((product) => (
                                <TableRow
                                key={product.id}
                                className="hover:bg-slate-50 border-b border-slate-200"
                                >
                                {/* Identity */}
                                <TableCell>{product.sku}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.partNumber}</TableCell>

                                {/* Classification */}
                                <TableCell>{product.model}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.brand}</TableCell>

                                {/* Inventory */}
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
                                

                                {/* Status */}
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

                                {/* Actions */}
                                <TableCell className="text-center">
                                    <button
                                    onClick={() => handleView(product.id)}
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
                     <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
        <Select defaultValue="25">
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="start">
            <SelectGroup>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
                <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>

            </div>
        </>
    );
};

export default ProductPage;