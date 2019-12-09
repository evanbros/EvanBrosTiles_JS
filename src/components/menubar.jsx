import React from 'react';

import MenubarItemDropdown from './menubarItemDropdown.jsx';

const Home = () => {
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
                <MenubarItemDropdown menuid='fileMenu' content={fileMenu}/>
                <MenubarItemDropdown menuid='helpMenu' content={helpMenu}/>
            </div>
        </div>
    );
};

export default Home;
