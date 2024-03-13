import { useState } from "react";
import { MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useAppSelector } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './Consts.ts';

interface Props {
    menuItem: MenuItem;
}

const cardStyle = {
    width: '300px'
}

const cardBodyStyle = {
    textAlign: 'start' as const
}

const buttonStyle = {
    position: 'absolute' as const,
    top: 15,
    right: 15
}

export default function MenuItemCard(props: Props) {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO]!;
    /**
    const menuItemPrices = props.menuItem.priceDetails.map((itemPrice, i) => {
        return <Dropdown.Item onSelect id={`Price-${i}-${props.menuItem.id}`}>{`${itemPrice.price.toFixed(2)} - ${itemPrice.size}`}</Dropdown.Item>;
    });
    */

    const itemPrices = props.menuItem.priceDetails.map((itemPrice, i) => {
        return <ListGroup.Item id={`Price-${i}-${props.menuItem.id}`}>{`${itemPrice.size} - ${currencySymbol}${itemPrice.price.toFixed(2)}`}</ListGroup.Item>;
    });

    return (
        <>
            <Card style={cardStyle}>
                {/**<Card.Title>
                    <Button style={buttonStyle} variant="primary">+</Button>
                </Card.Title>*/}
                <Card.Body style={cardBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    <Card.Text>{props.menuItem.description}</Card.Text>
                </Card.Body>
                <Card.Body>
                    {/**
                        <Form.Control
                        type="text"
                        id={props.menuItem.id + "-textbox"}
                        disabled
                    />*/ }
                    <ListGroup>
                        {itemPrices}
                    </ListGroup>
                    {/**
                        <DropdownButton id="dropdown-basic-button" title="">
                            {menuItemPrices}
                        </DropdownButton>*/}
                </Card.Body>
            </Card>
        </>
    )
}