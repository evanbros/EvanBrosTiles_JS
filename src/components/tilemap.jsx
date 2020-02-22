import React from 'react';

function Tilemap() {
    return (
        <div className="tile is-child tabs is-boxed">
            <ul>
                <li className="is-active">
                    <a>
                        <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                        <span>Visual</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                        <span>Logic</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Tilemap;
