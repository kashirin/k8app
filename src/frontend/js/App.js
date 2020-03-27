import React, { Component } from "react";
import ItemCard from './components/ItemCard';
import CopyCard from './components/CopyCard';

import Observer from './helpers/observer';
//import FruitCard from "./components/FruitCard";
import HookCard from "./components/HookCard";
import CustomHookRelatedCard from "./components/CustomHookRelatedCard";

//import CreatePdf from './components/CreatePdf';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            light: 'none'
        }

        Observer.on('CHANGE_LIGHT','AppChangeLight',(light)=>{
            this.setState({
                light
            });
        });
    }
    

    


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h2>Приложение: Hello React + Webpack 4 & Babel 7</h2>
                    {this.props.children}
                </div>
                <div className="row">
                    <ItemCard/>
                </div>
                <div className="row">
                    <CopyCard/>
                </div>
                <div className="row">
                    <HookCard favoriteFruit="apple"/>
                </div>
                <div className="row">
                    <CustomHookRelatedCard/>
                </div>
                <div className="row">
                    <hr/>
                    <CustomHookRelatedCard/>
                </div>
                {/*<div className="row">
                    <FruitCard name="apple" />
                </div>
                <div className="row">
                    <FruitCard name="orange" />
                </div>*/}
                {/*<div className="row">
                    <CreatePdf />
                </div>*/}
                <span>{this.state.light}</span>
            </div>
            
        );
    }
}

export default App;
