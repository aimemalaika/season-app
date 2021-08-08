import React, { Component } from 'react'

class Spinner extends Component{
    render() {
        return <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
                <h3>{this.props.message}</h3>
            </div>
    }
}

Spinner.defaultProps = {
    message : "Loading ..."
}

export default Spinner