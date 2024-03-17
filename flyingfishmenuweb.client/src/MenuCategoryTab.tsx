import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';

import { MenuCategory } from './model/MenuModel.ts';

import { useAppSelector } from './app/hooks.ts'

interface Props {
    selectedCategory: number;
    setSelectedCategory: (selectedCategory: number) => void;
    menuCategories: MenuCategory[];
}

export default function MenuCategoryTab(props: Props) {
    const defaultMenuTab: number = useAppSelector((state) => state.defaultMenuTab.value);

    const menuCategoryTabs = props.menuCategories.map(({ id, category_Name }) => {
        return <Tab key={"Tab-" + id} eventKey={id} title={category_Name} />
    });

    return (
        <>
            <Tabs
                defaultActiveKey={defaultMenuTab}
                id="uncontrolled-tab-example"
                className="mb-3"
                fill
                onSelect={(k) => props.setSelectedCategory(Number(k))}
            >
                {menuCategoryTabs}
            </Tabs>
        </>
    )
}

