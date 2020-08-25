// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "button Text";
}
// Create a React Component
const App = () => {
    // const buttonText = "Submit Button";
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'red',}}> { getButtonText() } </button>
        </div>
    );
};

// Take the react Component and show it on the screen
ReactDOM.render(<App/>,document.getElementById('root'));