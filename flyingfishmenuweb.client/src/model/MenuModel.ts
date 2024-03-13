export enum MenuCategoryEnum {
    FishAndChips = "fishandchips",
    SetMeals = "setmeals",
    Tapas = "tapas",
    Drinks = "drinks"
}

export interface MenuCategory {
    id: string;
    name: string;
}

export interface MenuItem {
    id: string,
    name: string,
    priceDetails: MenuItemPriceDetail[],
    description: string,
    category: string
}

export interface MenuItemPriceDetail {
    id: string,
    size: string,
    sizeDescription: string,
    price: number
}

