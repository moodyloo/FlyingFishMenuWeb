import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { MenuCategoryEnum } from './model/MenuModel';
import MenuItem from './MenuItem';

const containerStyle: object = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    columnGap: "50px",
    flexWrap: 'wrap'
}

const menuItemDetails: MenuItemDetail[] = [
    {
        id: "86",
        name: "Cod",
        price: { id: "86", size: "Regular", description: "Regular Size Cod", price: 6.80 },
        description: "Deep fried fish covered in batter",
        category: MenuCategoryEnum.FishAndChips
    },
    {
        id: "A",
        name: "Banquet Dinner A",
        price: { id: "A", size: "Standard", price: 25.90, description: "For 2 person" },
        description: "Contains Beef with white mushroom,Sweet & sour pork(hong kong style),Chicken mixed vegetables,Egg fried rice",
        category: MenuCategoryEnum.SetMeals
    }
]
interface Props {
    selectedCategory: string;
}

export default function Menu(props: Props) {

    const menuItemComponents = menuItemDetails.map((item) => {
        return item.category == props.selectedCategory ? <Row key={"menu"+item.id}> <MenuItem itemDetail={item} /></Row> : null;
    });

    return (
        <Container style={containerStyle} fluid>
            {menuItemComponents}
        </Container>
    )
}