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
    flexWrap: 'wrap'
}

interface Props {
    selectedCategory: string;
    menuItems: MenuItem[];
}

export default function Menu(props: Props) {

    const menuItemComponents = props.menuItems.map((item) => {
        if (item.category == props.selectedCategory) {
            if (item.category == MenuCategoryEnum.SetMeals) {
                return <Row key={"menu" + item.id}><MenuSetMealCard menuItem={item} /></Row>;
            }
            else {
                return <Row key={"menu" + item.id}><MenuItemCard menuItem={item} /></Row>;
            }
        }
        return null;
    });

    return (
        <>
            <Container style={containerStyle} fluid>
                {menuItemComponents}
            </Container>
        </>
    )
}