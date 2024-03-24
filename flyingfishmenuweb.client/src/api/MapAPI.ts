import axios from 'axios';
import { url } from '../consts.ts';

export async function getGoogleMapApiKey() : Promise<string> {
    try
    {
        const response = await axios.get<string>(url + '/api/GoogleMapApi/GetApiKey', { timeout: 10000 });
        return response.data;
    }
    catch (error) {
        console.error("Get All Menu Item ERROR: " + error);
        return "";
    }
}