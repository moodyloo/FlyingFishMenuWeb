//Web api base url
//export const url: string = 'http://localhost:5055' as const; //for local host
export const url: string = 'https://flyingfishmenuapi.azurewebsites.net' as const; //for deployment

//Currency Symbols
export const CurrencySymbolDictionary: { [iso: string]: string; } = {
    "GBR": "\u00A3"
};