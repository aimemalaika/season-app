import React, { Component } from "react";
import ReactDom from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import './style.css'

class App extends Component {
    state = {
        latitude: null,
        longitude: null,
        errorMessage: "",
        currentTime: ""
    }
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            postition => this.setState({
                    longitude: postition.coords.longitude,
                    latitude: postition.coords.latitude
                })
            ,
            error => this.setState({
                    errorMessage: error.message
                })
            
        );
        
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            })
        }, 1000);

    }

    componentDidUpdate(){
        console.log('omponent updated');
    }
    

    renderBody(){
        if(this.state.errorMessage && !this.state.latitude && !this.state.longitude){
            return (
                <div>
                    <h4>{this.state.errorMessage}</h4>
                </div>
            );
        }else if(!this.state.errorMessage && this.state.latitude && this.state.longitude){
            return (
                <div>
                    <SeasonDisplay longitude={this.state.longitude} latitude={this.state.latitude} curenttime={this.state.currentTime}/>
                </div>
            );
        }else{
            return <Spinner message="Please Accept Geolocalisation Request!"/>
        }
    }

    render() {
        return <div className="border red">{this.renderBody()}</div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById("root")
)