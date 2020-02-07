
import { combineReducers } from 'redux';

import itemCardReducer from './components/ItemCard/reducer';
import fruitCardReducer from './components/FruitCard/reducer';

const CombinedReducers = combineReducers({
    itemCardState: itemCardReducer,
    fruitCardState: fruitCardReducer
});

export default CombinedReducers;