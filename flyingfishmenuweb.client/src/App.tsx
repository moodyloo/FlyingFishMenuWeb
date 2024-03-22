import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import Title from './Title.tsx';
import ErrorPage from './ErrorPage.tsx';
import MenuCategorySelection from './MenuCategorySelection.tsx';

import { GetAllMenuItem, GetMenuCategories } from './api/MenuItemAPI.ts';

//BootStrap
import { MenuCategory, MenuItem } from './model/MenuModel.ts';

//React-router-dom
import { Route, Routes } from 'react-router-dom';

function App() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        GetMenuCategories().then((data) => {
            setMenuCategories(data);

            GetAllMenuItem().then((data) => {
                setMenuItems(data);
            });
        });
    }, []);

    const menuCategoryRoutes = menuCategories.map((menuCategory: MenuCategory) => {
        return <Route errorElement={<ErrorPage />} path={`/${menuCategory.category_Name}`} element={<Menu menuItems={menuItems.filter(menuItem => menuItem.category_Id == menuCategory.id)} searchText={searchText} setSearchText={setSearchText} />} />
    });

    return (
        <div id="rootlight">
            <div style={titleStyle}>
                <Title />
            </div>
            <Routes>
                <Route errorElement={<ErrorPage />} path="/" element={<MenuCategorySelection menuCategories={menuCategories} />} />
                {menuCategoryRoutes}
            </Routes>
        </div>
    )
}


const titleStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    marginBottom: '5px',
    backgroundColor: '#76b1ff'
}


export default App
