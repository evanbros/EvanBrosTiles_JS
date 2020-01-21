import React from 'react';

import teste from 'Images/teste.jpg';

function TilesetContainer() {
    return (
        <div className="main-margin-top center">
            <button className="button">Load Tileset</button>
            <div className="column border">
                <span className="icon is-large main-margin">
                    <img src={teste} />
                </span>
                <span className="icon is-large main-margin">
                    <img className="main-margin" src={teste} />
                </span>
                <span className="icon is-large main-margin">
                    <img src={teste} />
                </span>
                <span className="icon is-large main-margin">
                    <img className="main-margin" src={teste} />
                </span>
            </div>
        </div>
    );
}

export default TilesetContainer;
