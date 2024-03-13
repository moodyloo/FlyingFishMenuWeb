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
        <div id="rootlight">
            <h1 style={{ color: '#36b5e8' }}>Flying Fish Fleet</h1>
            <div>Call on: 01252444747</div>
            <b>OR</b>
            <div>Order in shop at 92A Fleet Road, Fleet GU51 4PA</div>
            <Container data-bs-theme="light" style={{ height: '100%' }}>
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
