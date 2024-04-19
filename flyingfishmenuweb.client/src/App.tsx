import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'

import './App.css'
import ErrorPage from './ErrorPage.tsx';
import AllergyModal from './AllergyModal.tsx';
import Loading from './Loading.tsx';
const MenuCategorySelection = lazy(() => import('./MenuCategorySelection.tsx'));
const ShoppingBasket = lazy(() => import('./ShoppingBasket.tsx'));
const Menu = lazy(() => import('./Menu.tsx'));
const Location = lazy(() => import('./Location.tsx'));
const About = lazy(() => import('./About.tsx'));

import { getAllMenuItem, getMenuCategories } from './api/MenuItemAPI.ts';
import { getImageUrl } from './provider/ImageProvider.ts';
import { contactUs, about, basket, googleApiKey } from './consts.ts';

//BootStrap
import { MenuCategory, MenuItem } from './model/MenuModel.ts';

//React-router-dom
import { Route, Routes, useLocation } from 'react-router-dom';



export default function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]|[]>([]);
    const [menuCategories, setMenuCategories] = useState<MenuCategory[]|[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const location = useLocation();

    const mapApiKey = useMemo(() => googleApiKey, []);

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
        retryApiCall(3);
    },[retryApiCall]);

    useEffect(() => {
        setSearchText("");
    },[location]);

    const menuCategoryRoutes = menuCategories.map((menuCategory: MenuCategory) => {
        return <Route key={"route/" + menuCategory.id} errorElement={<ErrorPage />} path={`/${menuCategory.categoryName}`} element={<Suspense fallback={<Loading/>}><Menu menuItems={menuItems.filter(menuItem => menuItem.category.id == menuCategory.id)} searchText={searchText} setSearchText={setSearchText} /></Suspense>} />
    });

    return (
        <>
            <div id="rootlight">
                <div style={backgroundStyle} />
                <AllergyModal visible={sessionStorage.getItem("popup_shown") != "1"} />
                <Routes>
                    <Route key={'route/'} errorElement={<ErrorPage />} path="/" element={<Suspense fallback={<Loading/>}><MenuCategorySelection menuCategories={menuCategories} /></Suspense>} />
                    <Route key={'location/'} errorElement={<ErrorPage />} path={`/${contactUs}`} element={<Suspense fallback={<Loading/>}><Location mapApiKey={mapApiKey} /></Suspense>} />
                    <Route key={'about/'} errorElement={<ErrorPage />} path={`/${about}`} element={<Suspense fallback={<Loading/>}><About /></Suspense>} />
                    <Route key={'basket/'} errorElement={<ErrorPage />} path={`/${basket}`} element={<Suspense fallback={<Loading/>}><ShoppingBasket /></Suspense>} />
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
