import React from "react";

const MenuList = (props) => {

    // const specialsArray = props.menu.filter((el) => el.category === 'specials');
    // const coffeeArray = props.menu.filter((el) => el.category === 'coffee');
    // const breakfastArray = props.menu.filter((el) => el.category === 'breakfast');
    // const lunchArray = props.menu.filter((el) => el.category === 'lunch');
    // const snacksArray = props.menu.filter((el) => el.category === 'snacks');
    
    const menuCategoryArray = (array) => {
        
            array.map((el, index) => (
                <div className={el.category}>
                    <h3 className={el.category}>{el.category}</h3>
                    <ul className={el.category}>
                        <li key={index} className={el.category} onClick={() => props.handleClick(index)}>
                            {el.item} - {el.price}
                        </li>
                    </ul>
                </div>))
        
    };

    return (
        <div className="menu-list">
            <h2>Menu</h2>
            <div className="items">{menuCategoryArray(props.menu)}</div>
        </div>
    );

};

export { MenuList };