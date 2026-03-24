import { Button } from "@/shared/components/ui/button";
import ProductTable from "../inventory/components/InventoryTable";
import { InventoryStatusBar } from "../inventory/components/InventoryStatusBar";
import ProductFilterMenu from "./components/ProductFilter";
import InventorySort from "../inventory/components/InventorySort";
import SearchBar from "@/shared/components/common/SearchBar";
import Pangination from "@/shared/components/common/Pangination";

const ProductPage = () => {
    

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900">
                        Invetory 
                    </h1>
                    <p className="text-sm text-slate-500">
                        Add, edit, and organize your products
                    </p>
                </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-sm border border-slate-300 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6 max-w-200">
  
                {/* LEFT */}
                <div className="flex flex-col pb-4 xl:pb-0 border-b xl:border-b-0 xl:border-r border-slate-200 xl:pr-6">
                    <p className="text-sm text-slate-500">
                        Total Inventory Value
                    </p>
                    <h2 className="w-64 text-xl sm:text-2xl text-slate-900 font-semibold">
                        IDR 12.000.000.000
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="w-full">
                    <InventoryStatusBar
                    total={1452 + 355 + 186}
                    inStock={1452}
                    lowStock={355}
                    outOfStock={186}
                    />
                </div>

            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 md:gap-0">
                <div className="flex gap-3 flex-wrap">

                    <SearchBar placeholder="Search inventory"/>

                    <ProductFilterMenu/>
                    <InventorySort />
                </div>       

                <Button variant={"default"}>
                    Add Inventory
                </Button>
            </div>

            <ProductTable />

            <Pangination page={0} row={0} totalPages={0} onPageChange={function (page: number): void {
                throw new Error("Function not implemented.");
            } } onRowChange={function (row: number): void {
                throw new Error("Function not implemented.");
            } } />
        </>
    );
};

export default ProductPage;