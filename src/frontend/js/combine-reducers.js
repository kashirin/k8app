
import { combineReducers } from 'redux';

import itemCardReducer from './components/ItemCard/reducer';
import fruitCardReducer from './components/FruitCard/reducer';
import hookCardReducer from './components/HookCard/reducer';

const CombinedReducers = combineReducers({
    itemCardState: itemCardReducer,
    fruitCardState: fruitCardReducer,
    hookCardState: hookCardReducer
});

export default CombinedReducers;