import axios from 'axios';
import { MenuItem } from '../model/MenuModel.ts';
import { url } from '../Consts.ts';

export async function GetAllMenuItem() : Promise<MenuItem[]|[]> {
    try
    {
        const response = await axios.get<MenuItem[]>(url + '/api/GetMenu');
        return response.data;
    }
    catch (error) {
        console.error("Get All Menu Item ERROR: " + error);
        return [];
    }
}