// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime(){
    return (new Date().toLocaleString());
}

// Create a React Component
const App = () => {
    // const buttonText = "Submit Button";
    return (
        <div>
            <div>Current Time:</div>
            <h3>
                {getTime()}
            </h3>
        </div>
    );
};

// Take the react Component and show it on the screen
ReactDOM.render(<App/>,document.getElementById('root'));