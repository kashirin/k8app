import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Приложуха Hello React + Webpack 4 & Babel 7</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
