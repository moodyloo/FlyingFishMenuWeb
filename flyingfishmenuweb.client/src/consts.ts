export const url: string | undefined = import.meta.env.DEV ? 'http://localhost:5055' : 'https://flyingfishmenuapi.azurewebsites.net';

//Currency Symbols
export const CurrencySymbolDictionary: { [iso: string]: string; } = {
    "GBR": "\u00A3"
};

//google api key
export const googleApiKey = "AIzaSyBzShoWzKyaZ-XczdX8j_IOAiPBNY-UiHI";

export const companyName: string = "The Flying Fish";

export const contactUs: string = "Contact us"
export const about: string = "About";
export const basket: string = "Basket";
export const foodAllergies: string = "FoodAllergies";

export const basketSessionState = "savedBasketSessionState";
