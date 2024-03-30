export interface MenuCategory {
    id: number;
    categoryName: string;
    isSetMeal: boolean;
    imageUrl: string;
}
export interface MenuItem {
    id: string,
    name: string,
    description: string,
    isPopular: boolean,
    isVegetarian: boolean,
    menuItemVariants: ItemVariant[],
    category: MenuCategory
}

export interface ItemVariant {
    id: string,
    variantName: string,
    price: number,
    isVegetarian: boolean,
    menuItemId: string
}
