import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors } from './reducer';
import * as actions from './actions';


class FruitCard extends Component {
    constructor(props) {
        super(props);

        this.fruit_name = props.name;

        //this.props.reset();

    }

    componentDidMount() {
        console.log(this.fruit_name, this.props);
        if(!this.props.state.in_request && !this.props.is_loaded){
            this.props.loadData();
        }
    }

    componentDidUpdate() {
        // request
       
    }

    shouldComponentUpdate(nextProps, nextState){
        if(JSON.stringify(nextProps.state) !== JSON.stringify(this.props.state)) {
            return true
        }
        return false;
    }


    render() {

        return <div>{this.props.state.in_request && <span>Карточка фрукта {this.fruit_name} грузится...</span>}
            {!this.props.state.in_request && this.props.state.loaded && <div>
            Фрукт: {this.props.fruit.fruit}<br/>
            Цвет: {this.props.fruit.color}<br/>
            Цена за кг: {this.props.fruit.price}$
        </div>}{!this.props.state.in_request && this.props.state.error && <span>Во время загрузки фрукта {this.fruit_name} возникла ошибка</span>}</div>

    }
}

const mapStateToProps = function (store, props) {
    return {
        fruit: selectors.getFruit(store, props.name), // props.fruit
        is_loaded: selectors.isLoaded(store),
        state: selectors.getState(store)
    };
};

const mapDispatchToProps = function (dispatch, props) {
    return {
        loadData: () => dispatch(actions.load()),
        reset: () => dispatch(actions.setStartState())
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitCard);