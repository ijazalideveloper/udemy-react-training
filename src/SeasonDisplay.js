import React from 'react';
import ReactDOM from 'react-dom';
import GeoLocation from './GeoLocation';
import Spinner from './Spinner';

class SeasonDisplay extends React.Component{
    
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState function to update state
                this.setState({ lat: position.coords.latitude });
            },
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <GeoLocation lat={this.state.lat}></GeoLocation>
        }

        return <Spinner message="Please accept location request" />;
    }

    componentDidUpdate() {
        console.log("My compoenent was just updated - it rerendered!");
    }

    // React says we have to define render function
    render(){
        return (
            <div className="border red">
                { this.renderContent() }
            </div>
        )
    }
}
export default SeasonDisplay;