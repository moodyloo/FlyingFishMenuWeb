export const url: string | undefined = import.meta.env.MODE == "development" ? 'https://flyingfishapi-dev.azurewebsites.net' : 'https://flyingfishmenuapi.azurewebsites.net';

//Currency Symbols
export const CurrencySymbolDictionary: { [iso: string]: string; } = {
    "GBR": "\u00A3"
};

//google api key
export const googleApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const companyName: string = "The Flying Fish";

export const contactUs: string = "Contact us"
export const about: string = "About";
export const foodAllergies: string = "FoodAllergies";
