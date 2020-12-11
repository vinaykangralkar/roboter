import React from 'react';
import CardList from './cardList';
import {robots} from './robots';

const App = () => {
    return (
        <div>
            <h1>Robo Friends</h1>
            <CardList robots={robots}/>
        </div>
    );
}

export default App;