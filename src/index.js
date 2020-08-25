// Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

function getTime() {
    return (new Date().toLocaleString());
}

// Create a React Component
const App = () => {
    // const buttonText = "Submit Button";
    return (
        <div className="ui container comments">
            <CommentDetail />
        </div>
    );
};

// Take the react Component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));