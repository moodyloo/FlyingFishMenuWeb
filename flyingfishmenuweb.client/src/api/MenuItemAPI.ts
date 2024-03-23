import axios from 'axios';
import { MenuCategory, MenuItem } from '../model/MenuModel.ts';
import { url } from '../Consts.ts';

export async function getAllMenuItem() : Promise<MenuItem[]|[]> {
    try
    {
        const response = await axios.get<MenuItem[]>(url + '/api/MenuItem/GetMenuItems', { timeout: 3000 });
        return response.data;
    }
    catch (error) {
        console.error("Get All Menu Item ERROR: " + error);
        return [];
    }
}

export async function getMenuCategories(): Promise<MenuCategory[] | []> {
    try {
        const response = await axios.get<MenuCategory[]>(url + '/api/MenuCategory/GetMenuCategories', { timeout: 3000 });
        return response.data;
    }
    catch (error) {
        console.error("Get Menu Categories ERROR: " + error);
        return [];
    }
}