import * as types from "./types";

const INITIAL_STATE = {
    status: 'Начальный статус'
};

const itemCardReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.ADD_NEXT:
            return {
                ...state,
                status: state.status + ' -> ' + action.status
            };
        default:
            return state;
    }
};

export default itemCardReducer;

export const selectors = {
    getAllState(store) {
        return (store.itemCardState)?store.itemCardState:{status:''};
    }
};