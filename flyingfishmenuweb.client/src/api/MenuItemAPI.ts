import axios from 'axios';
import { MenuItem } from '../model/MenuModel.ts';
import { url } from '../Consts.ts';

export async function GetAllMenuItem() : Promise<MenuItem[]|[]> {
    try
    {
        const response = await axios.get<MenuItem[]>(url + '/api/MenuItem', {
            headers: { 'Access-Control-Allow-Origin': 'https://jolly-cliff-06b700b03.5.azurestaticapps.net' }
        });
        return response.data;
    }
    catch (error) {
        console.error("Get All Menu Item ERROR: " + error);
        return [];
    }
}