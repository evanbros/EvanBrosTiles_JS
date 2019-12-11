import React from 'react';

import MainMenu from './mainMenu.jsx';
import TilesetContainer from './tilesetContainer.jsx';
import StatusBar from './statusBar.jsx';

function Home() {
    return (
        <div>
            <MainMenu />
            <div className="columns">
                <div className="column is-3 main-margin">
                    <TilesetContainer />
                    <StatusBar />
                </div>
            </div>
        </div>
    );
}

export default Home;
