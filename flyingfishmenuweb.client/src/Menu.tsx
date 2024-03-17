import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { MenuItem } from './model/MenuModel.ts';
import MenuItemCard from './MenuItemCard.tsx';
import MenuSetMealCard from './MenuSetMealCard.tsx';

const containerStyle: object = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "50px",
    rowGap: "25px",
    flexWrap: 'wrap',
    marginBottom: '20px'
}

interface Props {
    selectedCategory: number;
    menuItems: MenuItem[];
}

export default function Menu(props: Props) {

    const menuItemComponents = props.menuItems.map((item) => {

        return item.category_Id == props.selectedCategory ?
            <Row key={"menu" + item.id}>
                {item.category_Id == 2 ? <MenuSetMealCard menuItem={item} /> : <MenuItemCard menuItem={item} />}
            </Row> : null
    });

    return (
        <>
            <Container style={containerStyle} fluid>
                {menuItemComponents}
            </Container>
        </>
    )
}