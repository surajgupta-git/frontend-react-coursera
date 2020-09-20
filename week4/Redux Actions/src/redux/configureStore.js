import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
//import { reducer, initialstate} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}


/* initial state and reducer function are required to configure the store 

export const ConfigureStore = () => {
    // reducer and initialState are used to create a store 
    const store = createStore( Reducer,  initialState,);
    return store;
}

*/

