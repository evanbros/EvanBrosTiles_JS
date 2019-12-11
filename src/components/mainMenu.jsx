import React from 'react';

import MainMenuItemDropdown from './mainMenuItemDropdown.jsx';

const MainMenu = () => {
    const fileMenu = {
        name: 'File',
        items: [
            {
                title: 'New',
                // perform: () => { },
            },
            {
                title: 'Open',
            },
            {
                title: 'Save',
            },
            {
                title: 'Save as',
            },
            {
                title: 'Export',
            },
            {
                title: 'Exit',
            },
        ],
    };
    const helpMenu = {
        name: 'Help',
        items: [
            {
                title: 'Documentation',
            },
            {
                title: 'About',
            },
        ],
    };

    return (
        <div className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>
            </div>
            <div className="navbar-menu">
                <MainMenuItemDropdown menuid='fileMenu' content={fileMenu}/>
                <MainMenuItemDropdown menuid='helpMenu' content={helpMenu}/>
            </div>
        </div>
    );
};

export default MainMenu;
