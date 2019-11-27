import React, { Component } from "react";


const findGetParameter = (parameterName) => {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

class RedButton extends Component {
    constructor(props) {
        super(props);

        this.state = {result: ''};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        let port = 3443;

        let prt = findGetParameter('port');
        if(prt){
            port = prt;
        }

        fetch(window.location.protocol+'//'+window.location.hostname+':'+port+'/data/getfib')
        .then(response => response.json())
        .then(r => {
            this.setState(state => ({
                result: r.text
            }));
              
        });
        

        
    }
    
    render() {
        return <div><button onClick={this.handleClick} style={{color:'red'}}>Получить ответ</button><br/><br/>
        <span>{this.state.result}</span>
        </div>;
    }
}

export default RedButton;
