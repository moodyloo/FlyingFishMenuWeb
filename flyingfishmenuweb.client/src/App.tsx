import { useState, useEffect } from 'react'
import './App.css'
import Menu from './Menu';
import MenuCategoryTab from './MenuCategoryTab';
import { GetAllMenuItem } from './api/MenuItemAPI';

//BootStrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
    const [selectedCategory, setSelectedCategory] = useState("fishandchips");

    useEffect(() => {
        GetAllMenuItem();
    }, []);

    return (
        <div id="rootdark">
            <Container data-bs-theme="dark">
                <Row>
                    <MenuCategoryTab selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Row>
                <Row>
                    <Menu selectedCategory={selectedCategory} />
                </Row>
            </Container>
        </div>
    )
}

export default App
