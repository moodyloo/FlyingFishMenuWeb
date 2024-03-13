import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { MenuItem, MenuCategoryEnum } from './model/MenuModel.ts';
import MenuItemCard from './MenuItemCard.tsx';
import MenuSetMealCard from './MenuSetMealCard.tsx';

const containerStyle: object = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "50px",
    rowGap: "25px",
    flexWrap: 'wrap',
    paddingBottom: '20px'
}

interface Props {
    selectedCategory: string;
    menuItems: MenuItem[];
}

export default function Menu(props: Props) {

    const menuItemComponents = props.menuItems.map((item) => {

        return item.category == props.selectedCategory ?
            <Row key={"menu" + item.id}>
                {item.category == MenuCategoryEnum.SetMeals ? <MenuSetMealCard menuItem={item} /> : <MenuItemCard key={ "menuitemcard" + item.id } menuItem={item} />}
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