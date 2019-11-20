import React, { Component } from "react";


class RedButton extends Component {
    constructor(props) {
        super(props);

        this.state = {result: ''};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {


        fetch('http://10.41.2.25:3443/getfib')
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
