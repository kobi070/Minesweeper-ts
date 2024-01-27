import React from 'react';
import ReactDOM from 'react-dom';

import { Top } from './components/Top';

// import App from '../examples/ReactIntro/App'
// import { Legend } from './components/Legend/Legend';

ReactDOM.render(
    <Top feature='Flag' firstAction='ctrl' secondAction='click'>
        Minesweeper
    </Top>,
    document.getElementById('root')
);