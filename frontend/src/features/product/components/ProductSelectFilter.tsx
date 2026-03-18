import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui";
import { Select } from "@/shared/components/ui"; 
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

type StatusOption = {
    label: string;
      value: string;
};

export const SelectStatusFilter = () => {
    const [params, setParams] = useSearchParams();
    const [options, setOptions] = useState<StatusOption[]>([]);

    const status = params.get("status") ?? "All";

    useEffect(() => {
        const fetchStatus = async () => {
        await new Promise((res) => setTimeout(res, 300));

        const data = [
            "In Stock",
            "Low Stock",
            "Out of Stock",
        ];

        setOptions([
            { label: "All Status", value: "All" },
            ...data.map((s) => ({
                    label: s,
                    value: s,
                })),
            ]);
        };

        fetchStatus();

    }, []);

    const handleChange = (value: string) => {
        const newParams = new URLSearchParams(params);

        if (value === "All") {
          newParams.delete("status");
        } else {
            newParams.set("status", value);
        }

        setParams(newParams);
    };

    const handleClear = () => {
        const newParams = new URLSearchParams(params);
        newParams.delete("status");
        setParams(newParams);
    };

    return (
        <div className="flex">
            <Select value={status} onValueChange={handleChange}>
                <SelectTrigger className="w-35 pr-8">
                <SelectValue placeholder="Status" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        {
                            options.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>

            {
                status !== "All" && (
                    <button
                        onClick={handleClear}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black"
                    >
                        ✕
                    </button>
                )
            }
        </div>
    );
};