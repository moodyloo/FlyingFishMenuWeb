import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import ErrorPage from './ErrorPage.tsx';
import MenuCategorySelection from './MenuCategorySelection.tsx';

import { getAllMenuItem, getMenuCategories } from './api/MenuItemAPI.ts';
import { getImageUrl } from './provider/ImageProvider.ts';

//BootStrap
import { MenuCategory, MenuItem } from './model/MenuModel.ts';

//React-router-dom
import { Route, Routes, useLocation } from 'react-router-dom';


export default function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [error,setError] = useState<boolean>(false);
    const location = useLocation();

    const callApi = async () => {
        let menuCategoriesData: MenuCategory[] | [];
        let menuItemsData: MenuItem[] | [];
        for (let i: number = 0; i < 3; i++) {
            console.log("calling API");
            menuCategoriesData = await getMenuCategories();
            menuItemsData = await getAllMenuItem();

            if (menuCategoriesData.length != 0 && menuItemsData.length != 0) break; 
        }

        if (menuItems.length == 0 || menuCategories.length == 0) {
            setError(true);
        }
        setMenuCategories(menuCategoriesPromise);
        setMenuItems(menuItemsPromise);
    }

    useEffect(() => {
        callApi();
    }, []);

    useEffect(() => {
        setSearchText("");
    },[location]);

    const menuCategoryRoutes = menuCategories.map((menuCategory: MenuCategory) => {
        return <Route key={"route/"+menuCategory.id} errorElement={<ErrorPage />} path={`/${menuCategory.categoryName}`} element={<Menu menuItems={menuItems.filter(menuItem => menuItem.category.id == menuCategory.id)} searchText={searchText} setSearchText={setSearchText} />} />
    });

    return (
        <>
            {!error ? <div id="rootlight">
                <div style={backgroundStyle} />
                <Routes>
                    <Route key={'route/'} errorElement={<ErrorPage />} path="/" element={<MenuCategorySelection menuCategories={menuCategories} />} />
                    {menuCategoryRoutes}
                </Routes>
            </div>: <ErrorPage/>}
        </>
    )
}

const backgroundStyle = {
    backgroundImage: `url(${getImageUrl("background.jpg")})`,
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '0'
} as const
