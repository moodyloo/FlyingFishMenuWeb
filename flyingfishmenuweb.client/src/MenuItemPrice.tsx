import { ItemVariant, MenuItem } from "./model/MenuModel.ts";
import { Form } from 'react-bootstrap';
import { useAppSelector } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './consts.ts';

import MenuItemAddButton from './MenuItemAddButton.tsx';

interface Props {
    itemVariant: ItemVariant,
    menuItem: MenuItem
}

export default function MenuItemPrice(props: Props) {
    const { itemVariant, menuItem } = props;
    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO];


    const itemVariantPriceComponent: JSX.Element =
        <Form.Group style={priceFormGroup} className="mb-2" key={`${itemVariant.id}-${itemVariant.menuItemId}`} >
            <Form.Label style={priceLabelStyle}>{itemVariant.variantName}</Form.Label>
            <Form.Control disabled style={priceTextBoxStyle} type="text" placeholder={`${currencySymbol}${itemVariant.price.toFixed(2)}`} />
            <MenuItemAddButton itemVariant={itemVariant} menuItem={menuItem} />
        </Form.Group>;

    return (
        <>
            {itemVariant.isVegetarian ? <fieldset style={fieldSetStyle}>
                <legend style={legendVegetarianStyle}>vegetarian</legend>
                {itemVariantPriceComponent}
            </fieldset> : itemVariantPriceComponent}
        </>
    );
}


const priceTextBoxStyle = {
    width: '35%'
}

const priceFormGroup = {
    display: 'flex',
    alignItems: 'center'
}

const priceLabelStyle = {
    textAlign: 'start' as const,
    width: '65%'
}

const fieldSetStyle = {
    border: '1px solid green',
    borderRadius: '10px',
    backgroundColor: '#e0ffe0'
}


const legendVegetarianStyle = {
    float: 'none',
    width: 'auto',
    fontSize: '15px',
    color: 'green'
} as const
