import axios from 'axios';
import { getAllMenuItem } from '../api/MenuItemAPI.ts';
import { MenuItem } from '../model/MenuModel.ts';

import {describe, expect, it, vi } from 'vitest'

vi.mock('axios');

const menuItemTest: MenuItem = {
    id: "1",
    name: "Japanese Crispy Dumpling",
    description: "",
    isPopular: false,
    isVegetarian: false,
    category: {
        id: 3,
        categoryName: "Tapas",
        isSetMeal: false,
        imageUrl: "tapas.webp"
    },
    menuItemVariants: [
        {
            id: "1AT",
            variantName: "Pork & vegetables Tapas (3)",
            price: 3.5,
            menuItemId: "1",
            isVegetarian: false
        }
    ]
}
describe('web api', () => {
    it('should return all menu items', () => {
        const resp: MenuItem[] = [
            menuItemTest
        ];

        const expected: MenuItem[] = resp;

        vi.mocked(axios, true).get.mockResolvedValue({ data: resp });

        getAllMenuItem().then(data => expect(data).toBe(expected));
    })
});