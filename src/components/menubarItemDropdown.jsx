import React, { useEffect, useState } from 'react';

const MenuBarItemDropdown = ({ content, menuid }) => {
    const useToogle = (initialValue) => {
        const [value, setValue] = useState(initialValue);
        return [value, () => setValue(!value)];
    };

    const [toogleState, toogleMenu] = useToogle(false);

    useEffect(() => {
        const menu = document.getElementById(menuid);

        if (!toogleState || menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
        } else {
            menu.classList.add('is-active');
        }
    }, [toogleState]);

    const changeFocus = () => {
        const menu = document.getElementById(menuid);
        menu.classList.remove('is-active');
        toogleMenu(false);
    };

    const mountItems = () => {
        const items = [];

        for (let i = 0; i < content.items.length; i += 1) {
            items.push(<a key={i} onClick={content.items[i].perform} className="dropdown-item"><span>{content.items[i].title}</span></a>);
        }

        return items;
    };

    return (
        <div id={menuid} className="dropdown navbar-item">
            <div className="dropdown-trigger">
                <button id={`${menuid}button`} onBlur={() => changeFocus()} className="button" onClick={ () => toogleMenu(!toogleState) }aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>{ content.name }</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {mountItems()}
                </div>
            </div>
        </div>
    );
};

export default MenuBarItemDropdown;
