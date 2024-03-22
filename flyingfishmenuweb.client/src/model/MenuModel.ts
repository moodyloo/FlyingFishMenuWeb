export interface MenuCategory {
    id: number;
    category_Name: string;
    isSetMeal: boolean;
    imageUrl: string;
}
export interface MenuItem {
    id: string,
    name: string,
    description: string,
    isPopular: boolean,
    itemVariants: ItemVariant[],
    category_Id: number
    category: MenuCategory
}

export interface ItemVariant {
    id: string,
    variant_Name: string,
    price: number,
    menuItem_Id: string
}
