import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/ui/popover";
import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/shared/components/ui/badge";

type Option = {
    label: string;
    value: string;
    count: number;
};

type MultiSelectDropdownProps = {
    title: string;
    options: Option[];
    selected: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
};

export const MultiSelectDropdown  = ({
    title,
    options,
    selected,
    onChange,
    placeholder = "Search...",
}: MultiSelectDropdownProps) => {
    
    const [search, setSearch] = useState("");

    const toggle = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((item) => item !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    const filteredOptions = useMemo(() => {
        return options.filter((opt) =>
            opt.label.toLowerCase().includes(search.toLowerCase())
        );
    }, [options, search]);

    const reset = () => {
        onChange([]);
    };

    return (
        <Popover>
            <PopoverTrigger className="max-w-40" asChild>
                <button className="bg-white w-64 flex justify-between items-center border border-slate-300 rounded-md text-sm px-3 h-9 text-slate-700 font-medium">
                    { title }

                    <div className="flex items-center gap-1">
                        {
                            selected.length > 0 && (
                                <Badge className="rounded-sm bg-slate-200 text-slate-700 p-1.5">
                                    {selected.length}
                                </Badge>
                            )
                        }
                        <ChevronDown size={16} />
                    </div>
                </button>
            </PopoverTrigger>

            <PopoverContent className="p-4 w-80 gap-4">

                <div className="relative">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        className="w-full border bg-slate-50 border-slate-300 text-sm text-slate-700 rounded-sm pl-9 pr-3 py-2 outline-none"
                        placeholder={placeholder}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>

                {
                    selected.length > 0 && (
                        <div className="flex gap-1 flex-wrap">
                            {
                                selected.slice(0, 5).map((val) => {
                                    const label = options.find((o) => o.value === val)?.label || val;

                                    return (
                                        <Badge
                                            key={val}
                                            className="rounded-sm bg-slate-200 text-slate-700 px-1.5"
                                        >
                                            { label }
                                        </Badge>
                                    );
                                })
                            }

                            {
                                selected.length > 5 && (
                                    <Badge className="rounded-sm bg-slate-200 text-slate-700 px-1.5">
                                        +{ selected.length - 5 }
                                    </Badge>
                                )
                            }
                        </div>
                    )
                }

                <div>
                    <p className="pl-2 text-xs text-slate-500 mb-2">{title}</p>
                    <div className="max-h-64 overflow-y-auto ">
                        {
                            filteredOptions.length === 0 ? (
                                <div className="flex items-center justify-center h-20 text-sm text-slate-500">
                                    No results found
                                </div>
                            ) : (
                                filteredOptions.map((opt) => (
                                    <div
                                        key={opt.value}
                                        className="flex items-center gap-3 h-9 hover:bg-slate-200 px-3"
                                    >
                                        <Checkbox
                                            id={opt.value}
                                            checked={selected.includes(opt.value)}
                                            onCheckedChange={() => toggle(opt.value)}
                                            className="rounded-xs data-[state=checked]:bg-slate-700 data-[state=checked]:border-slate-700 p-1"
                                        />
                                        <Label
                                            htmlFor={opt.value}
                                            className="w-full h-full flex justify-between text-slate-700 text-sm font-normal"
                                        >
                                            { opt.label }
                                            <Badge className="px-1.5 rounded-sm bg-slate-200 text-slate-700">
                                                {opt.count}
                                            </Badge>
                                        </Label>
                                    </div>
                                ))
                            )
                        }
                        </div>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={reset}
                        className="px-3 h-9 rounded-md text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                    >
                        Reset
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
};