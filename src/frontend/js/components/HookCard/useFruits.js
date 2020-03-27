import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from './reducer';
import * as actions from './actions';

const useFruits = () => {


    const dispatch = useDispatch();

    
    let state = useSelector(selectors.getState);
    let fruits = useSelector(selectors.getFruits);


  

    /*useEffect(() => {
        console.log('state.loaded',state.loaded);
        if(!state.loaded){
            dispatch(actions.load())
        }
        
    },[]);*/

    return [fruits, state.in_request, state.loaded];

}


export default useFruits;