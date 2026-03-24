import type { ElementType } from 'react';
import type { SidebarMenuItem } from './SidebarMenuItem';

export type SidebarMenuCollapse = {
    type: 'COLLAPSE';
    icon: ElementType;
    label: string;
    children: SidebarMenuItem[];
};
