import { Row, Form, Container } from 'react-bootstrap';
import { MenuItem } from './model/MenuModel.ts';
import MenuItemCard from './MenuItemCard.tsx';
import MenuSetMealCard from './MenuSetMealCard.tsx';

import './Menu.css';

const containerStyle: object = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "50px",
    rowGap: "25px",
    flexWrap: 'wrap',
    marginBottom: '20px',
    overflowY: 'auto'
}

interface Props {
    menuItems: MenuItem[];
    searchText: string;
    setSearchText: (searchText: string) => void;
}

const sortFunction = (a: MenuItem, b: MenuItem): number => {
    const regex = new RegExp("([a-z]|[A-Z]|[-])+");
    const aNumeric: number = a.id.replace(regex, "") == "" ? -1 : parseInt(a.id.replace(regex, ""));
    const bNumeric: number = b.id.replace(regex, "") == "" ? -1 : parseInt(b.id.replace(regex, ""));

    if (aNumeric < bNumeric) {
        return -1;
    }
    else {
        return 1;
    }
}

export default function Menu(props: Props) {

    const filterFunction = (menuItem: MenuItem): boolean => {
        const textToBeSearched: string = `${menuItem.name.toUpperCase()} ${menuItem.description.toUpperCase()}`;
        return textToBeSearched.indexOf(props.searchText.toUpperCase()) != -1
    }

    const menuItemComponents = props.menuItems.filter(menuItem => filterFunction(menuItem)).sort((a, b) => sortFunction(a, b)).map((item) => {

        return <Row className="menuItemRow" key={"menu" + item.id}>
                {item.category.isSetMeal ? <MenuSetMealCard menuItem={item} /> : <MenuItemCard menuItem={item} />}
            </Row>
    });

    return (
        <>
            <Form.Control style={searchBarStyle} size="sm" type="text" placeholder="Search dishes" value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)} />
            <Container style={containerStyle} fluid>
                {menuItemComponents}
            </Container>
        </>
    )
}

const searchBarStyle = { marginBottom: '5px' }