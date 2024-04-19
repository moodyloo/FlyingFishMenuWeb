import { useState } from 'react';

import { Navbar,Container, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { contactUs,about, basket } from './consts.ts';

interface Props {
    titleName: string;
}
export default function Title(props: Props) {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Navbar expanded={expanded} expand="lg" style={titleStyle}>
                <Container>
                    <Navbar.Brand style={titleNameStyle}>{props.titleName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to="/" style={navlinkStyle} onClick={() => setExpanded(false)} >Main Menu</Nav.Link>
                            <Nav.Link as={Link} to={`/${contactUs}`} style={navlinkStyle} onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
                            <Nav.Link as={Link} to={`/${about}`} style={navlinkStyle} onClick={() => setExpanded(false)}>About</Nav.Link>
                            <Nav.Link as={Link} to={`/${basket}`} style={navlinkStyle} onClick={() => setExpanded(false)}>Basket</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

const navlinkStyle = {
    color: 'black'
}

const titleStyle = {
    backgroundColor: '#76b1ff',
    marginBottom: '10px'
}

const titleNameStyle = {
    fontSize: '30px',
    fontFamily: 'cursive',
    color: 'black',
    marginRight: '50px'
}