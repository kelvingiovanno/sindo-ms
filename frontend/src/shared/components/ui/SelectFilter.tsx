import { 
    Select, 
    SelectContent, 
    SelectGroup, SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "./select";

type Option = {
    label: string;
    value: string;
};

type SelectFilterProps = {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    className?: string;
};

export default function SelectFilter({
    value,
    onChange,
    options,
    placeholder = "Select",
    className = "",
}: SelectFilterProps) {

  return (
    <div className={`relative ${className}`}>
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full pr-8">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
            <SelectGroup>
                {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                </SelectItem>
                ))}
            </SelectGroup>
            </SelectContent>
        </Select>
        
        {
            value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
            )
        }
    </div>
  );
}