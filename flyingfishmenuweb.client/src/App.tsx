import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import Title from './Title.tsx';
import MenuCategoryTab from './MenuCategoryTab.tsx';
import { GetAllMenuItem, GetMenuCategories } from './api/MenuItemAPI.ts';

//BootStrap
import { Container, Row, Form } from 'react-bootstrap';
import { MenuCategory, MenuItem } from './model/MenuModel.ts';

function App() {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        GetAllMenuItem().then((data) => {
            setMenuItems(data);
        });
        GetMenuCategories().then((data) => {
            setMenuCategories(data);
        });
    }, []);

    return (
        <div id="rootlight">
            <div style={titleStyle}>
                <Title />
            </div>
            {menuCategories.length > 0 ? <MenuCategoryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} menuCategories={menuCategories} setSearchText={setSearchText} /> : null}
            <Form.Control style={searchBarStyle} size="sm" type="text" placeholder="Search dishes" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            {menuItems.length > 0 ?
            <Container data-bs-theme="light" style={menuContainerStyle}>
                <Row>
                    <Menu selectedCategory={selectedCategory} menuItems={menuItems} searchText={searchText} />
                </Row>
            </Container> : <div>Loading... (If taking too long please refresh the page)</div>}
        </div>
    )
}

const searchBarStyle = { marginBottom: '5px' }

const menuContainerStyle = { overflowY: 'auto' as const}

const titleStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    marginBottom: '5px',
    backgroundColor: '#76b1ff'
}


export default App
