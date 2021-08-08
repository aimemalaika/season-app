import React, {Component} from "react";

class SeasonDisplay extends Component {
    define_season(latitude, month){
        if(latitude > 0 && month < 9){
            return latitude > 0 ? "Summer" : "Winter"
        }else{
            return latitude > 0 ? "Winter" : "Summer"
        }
    }
    season_content (rep){
        if(rep === "Summer"){
            return <div>
                <i style={{color:'orange',fontSize: '50px',marginTop:'30px',marginLeft:'20%'}} className="sun icon App-logo"></i>
                <h1 style={{textAlign: 'center'}}>{this.props.curenttime} <br/>Let's Hit the beach</h1>
                <i style={{color:'orange',fontSize: '50px',marginTop:'30px',marginRight:'20%',float: 'right'}} className="sun icon App-logo"></i>
            </div>
        }else{
            return <div>
                <i style={{color:'#5f5fd0',fontSize: '50px',marginTop:'30px',marginLeft:'20%'}} className="snowflake outline icon App-logo"></i>
                <h1 style={{textAlign: 'center'}}>{this.props.curenttime} <br/>Burr, it is chilly</h1>
                <i style={{color:'#5f5fd0',fontSize: '50px',marginTop:'30px',marginRight:'20%',float: 'right'}} className="snowflake outline icon App-logo"></i>
            </div>
        }
    }
    render() {
        return <div> {this.season_content(this.define_season(this.props.longitude, new Date().getMonth()))}</div>
    }
}

export default SeasonDisplay