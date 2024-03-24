
import { Navbar,Container, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { contactUs,about } from './Consts.ts';

interface Props {
    titleName: string;
}
export default function Title(props: Props) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={titleStyle}>
                <Container>
                    <Navbar.Brand style={titleNameStyle}>{props.titleName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={navStyle}>
                            <Nav.Link as={Link} to="/">Main Menu</Nav.Link>
                            <Nav.Link as={Link} to={contactUs}>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to={about}>About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
const navStyle = {
    marginLeft: '20px'
}

const titleStyle = {
    backgroundColor: '#76b1ff',
    marginBottom: '10px'
}

const titleNameStyle = {
    fontSize: '35px',
    fontFamily: 'cursive'
}