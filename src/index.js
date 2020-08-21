// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'red',}}>Submit</button>
        </div>
    );
};

// Take the react Component and show it on the screen
ReactDOM.render(<App/>,document.getElementById('root'));