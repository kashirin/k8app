import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors } from './reducer';
import * as actions from './actions';
import Observer from '../../helpers/observer';

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inpdata: ''
        };

        this.handleInput = this.handleInput.bind(this);

    }

    handleInput(ev) {
        this.setState({
            inpdata: ev.target.value
        })
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        // request
       
    }


    render() {

        return <div>
        <input onChange={ev => this.handleInput(ev)}></input>
        <button onClick={e => {
            this.props.addNewStatusMessage(this.state.inpdata);
            Observer.send('CHANGE_LIGHT','clicked and color is red');
        }
        }>Добавить</button>
        <span>{this.props.itemCard.status}</span>
        </div>
    }
}

const mapStateToProps = function (store) {
    return {
        itemCard: selectors.getAllState(store)
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addNewStatusMessage: text => dispatch(actions.addNewStatusMessage(text)),
    } 
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);