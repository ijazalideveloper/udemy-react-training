// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

function getTime() {
    return (new Date().toLocaleString());
}

// Create a React Component
const App = () => {
    // const buttonText = "Submit Button";
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

// Take the react Component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));