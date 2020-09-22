import React from 'react';
import ReactDOM from 'react-dom';

class SeasonDisplay extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        };

        

    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState function to update state
                this.setState({ lat: position.coords.latitude });
            },
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log("My compoenent was just updated - it rerendered!");
    }

    // React says we have to define render function
    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div>Lattitude: { this.state.lat} </div>
        }

        return <div> Loading! </div>;
    }
}
export default SeasonDisplay;