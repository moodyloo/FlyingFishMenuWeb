import { Link } from 'react-router-dom';

import { MenuCategory } from './model/MenuModel.ts';

import { Container, Row } from 'react-bootstrap';

import './MenuCategorySelection.css';

import ImageButton from './ImageButton.tsx';

interface Props {
    menuCategories: MenuCategory[];
}

export default function MenuCategorySelection(props: Props) {
    const menuCategoryTabs = props.menuCategories.map(({ category_Name, imageUrl, id }) => {
        return <Row key={"menuCategory-" + id}>
            <Link to={`/${category_Name}`}>
                <ImageButton imageText={category_Name} imageUrl={imageUrl} />
            </Link>
        </Row>
    });

    return (
        <>
            <Container style={containerStyle}>
                {menuCategoryTabs}
            </Container>
        </>
    )
}

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
