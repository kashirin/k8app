import * as types from './types';

export const setStartState = () => {
    return {
        type: types.IN_START_STATE
    };
};

const startRequest = () => {
    return {
        type: types.IN_REQUEST
    }
}


const dataReceived = (data) => {
    return {
        type: types.IN_SUCCESS,
        payload: {
            items: data
        }
    }
}

const errorReceived = (error) => {
    return {
        type: types.IN_FAIL,
    }
}

export const load = () => dispatch => {

    dispatch(startRequest());

    let port = 3443;
    fetch(window.location.protocol+'//'+window.location.hostname+':'+port+'/data/gettable')
        .then(response => response.json())
        .then(r => dispatch(dataReceived(r.table)))
        .catch(e => dispatch(errorReceived(e.message)));
};