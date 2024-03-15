import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu.tsx';
import Title from './Title.tsx';
import MenuCategoryTab from './MenuCategoryTab.tsx';
import { GetAllMenuItem } from './api/MenuItemAPI.ts';

//BootStrap
import { Container, Row } from 'react-bootstrap';
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
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', backgroundColor: '#76b1ff'}}>
                <Title />
            </div>
            <MenuCategoryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Container data-bs-theme="light" style={{ overflowY: 'auto' }}>
                <Row>
                    <Menu selectedCategory={selectedCategory} menuItems={menuItems} />
                </Row>
            </Container>
        </div>
    )
}

export default App
