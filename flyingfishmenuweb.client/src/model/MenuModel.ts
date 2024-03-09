
export enum MenuCategoryEnum {
    FishAndChips = "fishandchips",
    SetMeals = "setmeals",
    Tapas = "tapas"
}

export interface MenuCategory {
    id: string;
    name: string;
}
/** 
export interface MenuItemDetail {
    id: string;
    name: string;
    description: string;
    category: string
    price: MenuItemPrice

export interface MenuItemPrice {
    id: string;
    size: string;
    price: number;
    description: string;
}
}*/

export interface MenuItem {
    id: string,
    name: string,
    priceDetails: MenuItemPriceDetail[],
    description: string,
    category: number
}

export interface MenuItemPriceDetail {
    id: string,
    size: string,
    sizeDescription: string,
    price: number
}

