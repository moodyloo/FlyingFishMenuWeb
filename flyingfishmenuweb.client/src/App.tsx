import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import MenuCategoryTab from './MenuCategoryTab.tsx';
import { GetAllMenuItem } from './api/MenuItemAPI.ts';

//BootStrap
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { MenuItem } from './model/MenuModel.ts';

function App() {
    const [selectedCategory, setSelectedCategory] = useState("fishandchips"); 
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        GetAllMenuItem().then((data) => {
            setMenuItems(data);
        });
    }, []);

    return (
        <div id="rootdark">
            <Container data-bs-theme="dark">
                <Row>
                    <MenuCategoryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Row>
                <Row>
                    <Menu selectedCategory={selectedCategory} menuItems={menuItems} />
                </Row>
            </Container>
        </div>
    )
}

export default App
