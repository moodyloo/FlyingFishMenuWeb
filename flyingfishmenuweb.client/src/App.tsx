import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import ErrorPage from './ErrorPage.tsx';
import MenuCategorySelection from './MenuCategorySelection.tsx';

import { GetAllMenuItem, GetMenuCategories } from './api/MenuItemAPI.ts';

//BootStrap
import { MenuCategory, MenuItem } from './model/MenuModel.ts';

//React-router-dom
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    const location = useLocation();

    useEffect(() => {
        GetMenuCategories().then((categories) => {
            setMenuCategories(categories);

            GetAllMenuItem().then((items) => {
                setMenuItems(items);
            });
        });
    }, []);

    useEffect(() => {
        setSearchText("");
    },[location]);

    const menuCategoryRoutes = menuCategories.map((menuCategory: MenuCategory) => {
        return <Route key={"route/"+menuCategory.id} errorElement={<ErrorPage />} path={`/${menuCategory.category_Name}`} element={<Menu menuItems={menuItems.filter(menuItem => menuItem.category_Id == menuCategory.id)} searchText={searchText} setSearchText={setSearchText} />} />
    });

    return (
        <div id="rootlight">
            <Routes>
                <Route key={'route/'} errorElement={<ErrorPage />} path="/" element={<MenuCategorySelection menuCategories={menuCategories} />} />
                {menuCategoryRoutes}
            </Routes>
        </div>
    )
}


export default App
