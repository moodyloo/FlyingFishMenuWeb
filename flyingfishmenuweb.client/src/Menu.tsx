import { Row, Form, Container } from 'react-bootstrap';

import { MenuItem } from './model/MenuModel.ts';

import MenuItemCard from './MenuItemCard.tsx';
import MenuSetMealCard from './MenuSetMealCard.tsx';
import Title from './Title.tsx';

import './Menu.css';

interface Props {
    menuItems: MenuItem[];
    searchText: string;
    setSearchText: (searchText: string) => void;
}

//Sort menu items in order of their numerical Id value
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

    //Filter menu items based on search term
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
            <Title titleName={props.menuItems[0]?.category.categoryName} />
            <Form.Control style={searchBarStyle} size="sm" type="text" placeholder="Search dishes" value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)} />
            <Container style={containerStyle} fluid>
                {menuItemComponents}
            </Container>
        </>
    )
}

const searchBarStyle = {
    marginBottom: '5px',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: '50',
    width: '45%'
} as const

const containerStyle: object = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "50px",
    rowGap: "25px",
    flexWrap: 'wrap',
    marginBottom: '20px',
    overflowY: 'auto',
    zIndex: '50',
    maxWidth: '100%'
}
