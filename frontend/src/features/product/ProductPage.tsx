import { useEffect, useState } from "react";


import { ArrowUpDown, Search, SortAsc } from "lucide-react";
import ProductStats from "./components/ProductStats";
import { useSearchParams } from "react-router";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import ProductTable from "./components/ProductTable";
import { MultiSelectDropdown } from "@/shared/components/common/multi-select-dropdown";
import { brandOptions, categoryOptions, modelOptions, statusOptions } from "./dummy";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { InventoryStatusBar } from "./components/InventoryStatusBar";

const ProductPage = () => {
    const [params] = useSearchParams();

    const status = params.get("status");

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
    const [selectedModel, setSelectedModel] = useState<string[]>([]);
    const [selectedStatus, setSelectedStatus] = useState(statusOptions);
    

    useEffect(() => {
        console.log('rerender', status);
    });

    return (
        <>
            <div className="mb-4 flex justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900">
                        Invetory 
                    </h1>
                    <p className="text-sm text-slate-500">
                        Add, edit, and organize your products
                    </p>
                </div>

                <Button>
                    Add Inventory
                </Button>
            </div>

            <div className="bg-white p-6 mb-4 rounded-sm border border-slate-300 flex">
                <InventoryStatusBar
                    total={1452+355+186}
                    inStock={1452}
                    lowStock={355}
                    outOfStock={186}
                />
            </div>

            <div className="bg-white p-6 rounded-sm border border-slate-200 space-y-4">

                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 md:gap-0 mb-4">
                    <div className="flex gap-3 ">

                        <div className="relative w-full sm:max-w-xs">
                            <Search
                                size={16}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <Input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-9 pr-3 py-2 text-sm border  rounded-md focus:outline-none focus:ring-1 focus:ring-slate-200"
                                
                            />
                        </div>

                        <MultiSelectDropdown
                            title="Category"
                            options={categoryOptions}
                            selected={selectedCategories}
                            onChange={setSelectedCategories}
                            placeholder="Search category..."
                        />

                        <MultiSelectDropdown
                            title="Brand"
                            options={brandOptions}
                            selected={selectedBrand}
                            onChange={setSelectedBrand}
                            placeholder="Search brand..."
                        />

                        <MultiSelectDropdown
                            title="Model"
                            options={modelOptions}
                            selected={selectedModel}
                            onChange={setSelectedModel}
                            placeholder="Search model..."
                        />

                        <Select defaultValue="all">
                            <SelectTrigger className="text-slate-700 font-medium">
                                <p>Status: </p>
                                <SelectValue placeholder="All" />
                            </SelectTrigger>

                            <SelectContent position="popper">
                                <SelectGroup className="text-slate-700">
                                    <SelectItem value="all">All</SelectItem>
                                    {
                                        selectedStatus.map((status) => (    
                                            <SelectItem value={status.value}>
                                                {status.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>       

                    <Select defaultValue="none">
                        <SelectTrigger className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
                            <ArrowUpDown className="h-4 w-4 text-slate-500" />
                            <SelectValue placeholder="Sort" />
                        </SelectTrigger>

                        <SelectContent position="popper">
                            <SelectGroup className="text-slate-700">
                            <SelectItem value="none">Default</SelectItem> {/* 👈 important */}
                            <SelectItem value="newest">Newest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                            <SelectItem value="name_asc">Name A → Z</SelectItem>
                            <SelectItem value="name_desc">Name Z → A</SelectItem>
                            <SelectItem value="stock_desc">Stock High → Low</SelectItem>
                            <SelectItem value="stock_asc">Stock Low → High</SelectItem>
                            <SelectItem value="price_desc">Price High → Low</SelectItem>
                            <SelectItem value="price_asc">Price Low → High</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>  
                </div>
                <ProductTable />

                
            </div>
        </>
    );
};

export default ProductPage;