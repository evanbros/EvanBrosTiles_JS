import React from 'react';

import MainMenu from './mainMenu.jsx';
import Tilemap from './tilemap.jsx';
import TilesetContainer from './tilesetContainer.jsx';
import StatusBar from './statusBar.jsx';
import WorkBar from './workBar.jsx';

function Home() {
    return (
        <div>
            <MainMenu />
            <div className="tile is-ancestor">
                <div className="tile is-parent is-vertical is-3 main-margin">
                    <TilesetContainer />
                    <StatusBar />
                </div>
                <div className="tile is-parent is-vertical main-margin">
                    <Tilemap />
                    <WorkBar />
                </div>
            </div>
        </div>
    );
}

export default Home;
