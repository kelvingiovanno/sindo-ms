import { api } from '@/shared/lib';
import type { InventoryList } from '../types/inventory-list.type';
import type { Inventory } from '../types/inventory.type';

export const ENDPOINT = 'inventories';

export const getInventoriesList = async (
    page: string,
    row: string,
    brand: string,
    model: string,
    category: string,
    sort: string,
    order: string,
) => {
    const res = await api.get<InventoryList>(
        `${ENDPOINT}?page=${page}&row=${row}&brand=${brand}&model=${model}&category=${category}&sort=${sort}&order=${order}`,
    );
    const data = res.data;
    return data;
};

export const getInventory = async (inventoryId: string) => {
    const res = await api.get<Inventory>(`${ENDPOINT}/${inventoryId}`);
    const data = res.data;
    return data;
};
