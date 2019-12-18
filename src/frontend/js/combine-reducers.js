
import { combineReducers } from 'redux';

import itemCardReducer from './components/ItemCard/reducer';

const CombinedReducers = combineReducers({
    itemCardState: itemCardReducer
});

export default CombinedReducers;