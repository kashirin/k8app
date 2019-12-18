import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors } from '../ItemCard/reducer';



class CopyCard extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        // request
       
    }


    render() {


        return <div>
        <h3>{this.props.itemCard.status}</h3>
        </div>
    }
}

const mapStateToProps = function (store) {
    return {
        itemCard: selectors.getAllState(store)
    };
};


export default connect(mapStateToProps)(CopyCard);