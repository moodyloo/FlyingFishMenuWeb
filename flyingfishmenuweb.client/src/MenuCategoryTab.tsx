import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';

import { useAppSelector } from './app/hooks.ts'
import { MenuCategory, MenuCategoryEnum } from './model/MenuModel.ts';

interface Props {
    selectedCategory: string;
    setSelectedCategory: (selectedCategory: string) => void;
}

const menuCategories: MenuCategory[] = [
    { id : MenuCategoryEnum.FishAndChips, name: "Fish & Chips" },
    { id : MenuCategoryEnum.SetMeals, name: "Set Meals" },
    { id : MenuCategoryEnum.Tapas, name: "Tapas" }
]

export default function MenuCategoryTab(props: Props) {
    const defaultMenuTab = useAppSelector((state) => state.defaultMenuTab.value);

    const menuCategoryTabs = menuCategories.map(({ id, name }) => {
        return <Tab key={"Tab-" + id} eventKey={id} title={name} />
    });

    return (
        <>
            <Tabs
                defaultActiveKey={defaultMenuTab}
                id="uncontrolled-tab-example"
                className="mb-3"
                justify
                onSelect={(k) => props.setSelectedCategory(k == null ? "" : k)}
            >
                {menuCategoryTabs}
            </Tabs>
        </>
    )
}

