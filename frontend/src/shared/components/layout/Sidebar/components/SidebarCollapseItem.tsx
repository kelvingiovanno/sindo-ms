import { ChevronRight } from 'lucide-react';
import SidebarItem from './SidebarItem';
import type { SidebarMenuItem } from '../types/SidebarMenuItem';
import type { ElementType } from 'react';

type Props = {
    icon: ElementType;
    label: string;
    items: SidebarMenuItem[];
    isOpen: boolean;
    onToggle: () => void;
};

const SidebarCollapseItem = ({
    icon: Icon,
    label,
    items,
    isOpen,
    onToggle,
}: Props) => {
    return (
        <div className="space-y-1">
            <button
                onClick={onToggle}
                className="cursor-pointer flex w-full items-center justify-between p-3 rounded-sm text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Icon size={18} />
                    {label}
                </div>

                <ChevronRight
                    size={16}
                    className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-90' : ''
                    }`}
                />
            </button>

            {isOpen && (
                <div className="ml-5 flex flex-col gap-1 border-l border-slate-200 pl-5">
                    {items.map((child) => (
                        <SidebarItem key={child.path} {...child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarCollapseItem;
