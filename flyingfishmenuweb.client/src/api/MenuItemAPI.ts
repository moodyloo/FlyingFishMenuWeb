import axios from 'axios';
import { MenuItem } from '../model/MenuModel';
import { url } from '../Consts';

export async function GetAllMenuItem() : Promise<MenuItem[]|[]> {
    try
    {
        const response = await axios.get<MenuItem[]>(url);
        return response.data;
    }
    catch (error) {
        console.error("Get All Menu Item ERROR: " + error);
        return [];
    }
}