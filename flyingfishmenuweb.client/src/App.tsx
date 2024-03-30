import { useState, useEffect, useCallback, useMemo } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import ErrorPage from './ErrorPage.tsx';
import MenuCategorySelection from './MenuCategorySelection.tsx';
import Location from './Location.tsx';
import About from './About.tsx';
import AllergyModal from './AllergyModal.tsx';

import { getAllMenuItem, getMenuCategories } from './api/MenuItemAPI.ts';
import { getGoogleMapApiKey } from './api/MapAPI.ts';
import { getImageUrl } from './provider/ImageProvider.ts';
import { contactUs,about } from './consts.ts';

//BootStrap
import { MenuCategory, MenuItem } from './model/MenuModel.ts';

//React-router-dom
import { Route, Routes, useLocation } from 'react-router-dom';


export default function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]|[]>([]);
    const [menuCategories, setMenuCategories] = useState<MenuCategory[]|[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [googleMapsApiKey, setGoogleMapsApiKey] = useState<string>("");
    const location = useLocation();

    const mapApiKey = useMemo(() => googleMapsApiKey, [googleMapsApiKey]);

    const retryApiCall = useCallback(async (retries: number) => {
        if (retries <= 0) {
            console.log("API Call Error");
            return;
        }

        console.log("calling api...");

        let menuCategoriesData: MenuCategory[] | [] = [];
        let menuItemsData: MenuItem[] | [] = [];

        menuCategoriesData = await getMenuCategories();
        menuItemsData = await getAllMenuItem();

        if (menuCategoriesData.length == 0 || menuItemsData.length == 0) {
            retryApiCall(retries - 1);
            return;
        }

        setMenuCategories(menuCategoriesData);
        setMenuItems(menuItemsData);
    }, []);

    useEffect(() => {
        getGoogleMapApiKey().then((key) => setGoogleMapsApiKey(key));
    }, [])

    useEffect(() => {
        retryApiCall(10);
    },[retryApiCall]);

    useEffect(() => {
        setSearchText("");
    },[location]);

    const menuCategoryRoutes = menuCategories.map((menuCategory: MenuCategory) => {
        return <Route key={"route/"+menuCategory.id} errorElement={<ErrorPage />} path={`/${menuCategory.categoryName}`} element={<Menu menuItems={menuItems.filter(menuItem => menuItem.category.id == menuCategory.id)} searchText={searchText} setSearchText={setSearchText} />} />
    });

    return (
        <>
            <div id="rootlight">
                <div style={backgroundStyle} />
                <AllergyModal />
                <Routes>
                    <Route key={'route/'} errorElement={<ErrorPage />} path="/" element={<MenuCategorySelection menuCategories={menuCategories} />} />
                    {googleMapsApiKey != "" ? < Route key={'location/'} errorElement={<ErrorPage />} path={`/${contactUs}`} element={<Location mapApiKey={mapApiKey} />} /> : null}
                    <Route key={'about/'} errorElement={<ErrorPage />} path={`/${about}`} element={<About />} />
                    {menuCategoryRoutes}
                </Routes>
            </div>
        </>
    )
}

const backgroundStyle = {
    backgroundImage: `url(${getImageUrl("background.webp")})`,
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '0'
} as const
