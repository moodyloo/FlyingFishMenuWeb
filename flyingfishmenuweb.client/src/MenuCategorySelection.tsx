import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { MenuCategory } from './model/MenuModel.ts';

import { Container, Row } from 'react-bootstrap';

import './MenuCategorySelection.css';

import Loading from './Loading.tsx';

interface Props {
    menuCategories: MenuCategory[];
}

const ImageButton = lazy(() => import('./ImageButton.tsx'));

export default function MenuCategorySelection(props: Props) {
    const menuCategoryTabs = props.menuCategories.map(({ categoryName, imageUrl, id }) => {
        return <Row key={"menuCategory-" + id}>
            <Suspense fallback={<div/>}>
                <Link to={`/${categoryName}`}>
                    <ImageButton imageText={categoryName} imageUrl={imageUrl} />
                </Link>
            </Suspense>
        </Row>
    });

    return (
        <>
            {
                props.menuCategories.length == 0 ? <Loading/>:
                <>
                    <Container style={containerStyle}>
                        {menuCategoryTabs}
                    </Container>
                </>
            }
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
    overflowY: 'auto',
    zIndex: '50',
    maxWidth: '100%'
}
