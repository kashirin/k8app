import * as types from "./types";

const INITIAL_STATE = {
    items:[],
    error: false,
    in_request: false,
    loaded: false
};

const hookCardReducer = (state = INITIAL_STATE, action = {}) => {
    //console.log('in reducer', action, state);
    switch (action.type) {
        case types.IN_REQUEST:
            return {
                ...state,
                items: [],
                in_request: true,
                loaded: false
            };
        case types.IN_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                error: false,
                in_request: false,
                loaded: true
            };
        case types.IN_FAIL:
            return {
                ...state,
                items: [],
                error: true,
                in_request: false,
                loaded: false
            };
        case types.IN_START_STATE:
            return {
                ...state,
                items: [],
                error: false,
                in_request: false,
                loaded: false
            };
        default:
            return state;
    }
};

export default hookCardReducer;

export const selectors = {
    getState(store) {
        return (store.hookCardState)?store.hookCardState:null;
    },
    isLoaded(store) {
        if(store.hookCardState){
            if(store.hookCardState.loaded && !store.hookCardState.error){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    getFruits(store) {
        if(store.hookCardState){
            if(store.hookCardState.loaded){
                return store.hookCardState.items;
            }else{
                return [];
            }
            
        }else{
            return [];
        }
    },
    getFruit(store, fruit) {
        if(store.hookCardState){
            if(store.hookCardState.loaded){
                const item = store.hookCardState.items.find(el => el.fruit == fruit);
                if(item){
                    return item;
                }else{
                    return {color, fruit: 'неизвестный фрукт', price: 'N/A'};
                }
            }else{
                return null;
            }
            
        }else{
            return null;
        }
    }
};