import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from './reducer';
import * as actions from './actions';

const HookCard = (props) => {


    const dispatch = useDispatch();

    
    let state = useSelector(selectors.getState);
    let fruits = useSelector(selectors.getFruits);


  

    useEffect(() => {
        dispatch(actions.load())

        

    },[]);

   

    return <div>
            <p>Мой любимый фрукт: {props.favoriteFruit}</p>
            {state.in_request && <span>фрукты грузятся...</span>}
            {!state.in_request && state.loaded && <div>
            <pre>{JSON.stringify(fruits,null,4)}</pre>
            </div>}
            {!state.in_request && state.error && <span>Во время загрузки возникла ошибка</span>}
       
           </div>

}


export default HookCard;