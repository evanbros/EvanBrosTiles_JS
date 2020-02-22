import React from 'react';

import Tools from './tools.jsx';
import Layers from './layers.jsx';

function WorkBar() {
    return (
        <div className="tile is-parent">
            <Layers />
            <Tools />
        </div>
    );
}

export default WorkBar;
