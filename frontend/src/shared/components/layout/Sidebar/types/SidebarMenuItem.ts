import type { ElementType } from 'react';

export type SidebarMenuItem = {
    type: 'ITEM';
    icon?: ElementType;
    label: string;
    path: string;
};
