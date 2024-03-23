import { Link } from 'react-router-dom';

import { MenuCategory } from './model/MenuModel.ts';
import { companyName } from './Consts.ts';

import { Container, Row, Spinner } from 'react-bootstrap';

import './MenuCategorySelection.css';

import ImageButton from './ImageButton.tsx';
import Title from './Title.tsx';

interface Props {
    menuCategories: MenuCategory[];
}

export default function MenuCategorySelection(props: Props) {
    const menuCategoryTabs = props.menuCategories.map(({ categoryName, imageUrl, id }) => {
        return <Row key={"menuCategory-" + id}>
            <Link to={`/${categoryName}`}>
                <ImageButton imageText={categoryName} imageUrl={imageUrl} />
            </Link>
        </Row>
    });

    return (
        <>
            {
                props.menuCategories.length == 0 ? <Spinner style={spinnerStyle} animation="border" /> :
                <>
                    <Title titleName={companyName} />
                    <Container style={containerStyle}>
                        {menuCategoryTabs}
                    </Container>
                </>
            }
        </>
    )
}

const spinnerStyle = {
    margin: 'auto'
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
