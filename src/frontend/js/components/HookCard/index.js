import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from './reducer';
import * as actions from './actions';

const HookCard = (props) => {
    const [on, setOn] = useState(false);

    const [cnt, setCnt] = useState(0);

    const dispatch = useDispatch();

    
    let state = useSelector(selectors.getState);
    let fruits = useSelector(selectors.getFruits);


    let yav = false;

    useEffect(() => {
        dispatch(actions.load())

        setInterval(()=>{
            setOn(prev=>!prev);
            yav = !yav;
        },1000);

    },[]);

    useEffect(() => {
        setCnt(prev=>prev++);
    },[yav]);

    return <div>
            <p>Мой любимый фрукт: {props.favoriteFruit}</p>
            {state.in_request && <span>фрукты грузятся...</span>}
            {!state.in_request && state.loaded && <div>
            <pre>{JSON.stringify(fruits,null,4)}</pre>
            </div>}
            {!state.in_request && state.error && <span>Во время загрузки возникла ошибка</span>}
            <br/>
            <span>состояние={on?'on':'off'}</span>
            <br/>
            <span>счетчик={cnt}</span>
           </div>

}


export default HookCard;