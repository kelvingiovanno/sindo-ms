import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/components/ui/select';

const stores = [
    { id: 'store-1', name: 'Main Store' },
    { id: 'store-2', name: 'Bandung Store' },
    { id: 'store-3', name: 'Jakarta Store' },
];

const StoreSwitcher = () => {
    return (
        <div className="p-4 border-b border-slate-300">
            <p className="text-xs text-slate-500 mb-2">Switch Store</p>

            <Select defaultValue="Main Store">
                <SelectTrigger className="w-full rounded-sm px-3 py-5 border border-slate-300 cursor-pointer mb-2">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent position={'popper'}>
                    <SelectGroup>
                        {stores.map((s) => (
                            <SelectItem
                                key={s.id}
                                value={s.name}
                                className="rounded-sm px-3 py-2 cursor-pointer"
                            >
                                {s.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default StoreSwitcher;
