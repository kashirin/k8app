import * as types from "./types";

const INITIAL_STATE = {
    items:[],
    error: false,
    in_request: false,
    loaded: false
};

const fruitCardReducer = (state = INITIAL_STATE, action = {}) => {
    console.log('in reducer', action, state);
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

export default fruitCardReducer;

export const selectors = {
    getState(store) {
        return (store.fruitCardState)?store.fruitCardState:null;
    },
    isLoaded(store) {
        if(store.fruitCardState){
            if(store.fruitCardState.loaded && !store.fruitCardState.error){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    getFruit(store, fruit) {
        if(store.fruitCardState){
            if(store.fruitCardState.loaded){
                const item = store.fruitCardState.items.find(el => el.fruit == fruit);
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