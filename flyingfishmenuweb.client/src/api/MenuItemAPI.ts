import axios from 'axios';
import { MenuItem } from '../model/MenuModel';
import { url } from '../Url';

export async function GetAllMenuItem() : Promise<MenuItem[]|null> {
    try
    {
        const response = await axios.get<MenuItem[]>(url);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error("Get All Menu Item ERROR: " + error);
        return null;
    }
}