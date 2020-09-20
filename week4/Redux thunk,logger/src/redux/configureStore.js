import {createStore, combineReducers, applyMiddleware } from 'redux';
//import { reducer, initialstate} from './reducer';

import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
//import { reducer, initialstate} from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({feedback: InitialFeedback}) /*createForms from react-redux-form has its own reducers, actions 
        and so on so that we need not create all these*/
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};


/* initial state and reducer function are required to configure the store 

export const ConfigureStore = () => {
    // reducer and initialState are used to create a store 
    const store = createStore( Reducer,  initialState,);
    return store;
}

*/

