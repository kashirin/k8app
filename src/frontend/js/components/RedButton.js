import React, { Component } from "react";


class RedButton extends Component {
    constructor(props) {
        super(props);

        this.state = {result: ''};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {


        fetch(window.location.protocol+'//'+window.location.hostname+':'+3443+'/getfib')
        .then(response => response.json())
        .then(r => {
            this.setState(state => ({
                result: r.text
            }));
              
        });
        

        
    }
    
    render() {
        return <div><button onClick={this.handleClick} style={{color:'red'}}>Нажми что бы узнать</button><br/><br/>
        <span>{this.state.result}</span>
        </div>;
    }
}

export default RedButton;
