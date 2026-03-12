import type { Store } from "@/shared/types";
import { Store as StoreIcon } from "lucide-react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const StoreSelectorPage = () => {

    const [stores] = useState<Store[] | null>(() => {
        const stored = localStorage.getItem("stores");
        return stored ? JSON.parse(stored) : null;
    });

    const navigate = useNavigate();

    const storeActive = localStorage.getItem('storeActive');
    
    if(storeActive) return <Navigate to={'/'}/>


    const handleSelectStore = (storeId: string) => {
        console.log("Selected store:", storeId);
        localStorage.setItem('storeActive', storeId);
        navigate('/');
    };

    if(stores === null) return ( <p>asd</p> );

  return (
    <div className="w-full min-h-screen bg-white md:bg-slate-200 flex justify-center items-center p-8">

        <div className="bg-white md:border md:border-slate-300 rounded-md w-full max-w-3xl px-6 sm:px-10 py-10 sm:py-14">

            <h1 className="text-h2 font-bold text-center">
                Select Store
            </h1>

            <p className="text-small text-center mt-2 mb-10 sm:mb-12">
                Choose the store you want to manage
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-112 overflow-y-auto px-1 sm:px-4 py-1">

                {
                    stores.map((store, index) => (
                        <button
                            key={`${store.id}-${index}`}
                            onClick={() => handleSelectStore(store.id)}
                            className="border border-slate-300 p-4 flex flex-col rounded-sm transition-all duration-150 hover:border-neutral-900 hover:bg-neutral-50 hover:shadow-sm active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-neutral-300 cursor-pointer"
                        >

                            <div className="h-10 w-10 bg-gray-200 rounded-sm flex items-center justify-center mb-4">
                                <StoreIcon size={18} className="text-neutral-700" />
                            </div>
                            <p className="text-body text-left font-semibold">
                                {store.name}
                            </p>
                            <p className="text-xs text-left text-neutral-400">
                                Jakarta
                            </p>

                        </button>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default StoreSelectorPage;