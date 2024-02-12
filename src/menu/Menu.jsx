import { useState } from "react";
import Header from "./Header";
import menu from "./data";
import './menu.css';
import ListMenu from "./ListMenu";

// const categories = menu.map((item) => item.category);
// const tempSet = new Set (categories);
// const tempItems = ['all', ...tempSet];

const categories = ['all', ...new Set(menu.map((item) => item.category))]

const Menu = () => {
    const [getMenu, setGetMenu] = useState(menu);
    const [allCategories, setAllCategories] = useState(categories);

    const filterCategories = (category) => {
        if(category === 'all'){
            setGetMenu(menu);
            return;
        }
        const newItem = menu.filter((item) => item.category === category);
        setGetMenu(newItem);
    }
    return (
        <main>
            <section className="menu">
                <Header text='our menu' allCategories={allCategories} filterCategories={filterCategories}/>
                <ListMenu itemMenu={getMenu}/>
            </section>
        </main>
    )
}

export default Menu;