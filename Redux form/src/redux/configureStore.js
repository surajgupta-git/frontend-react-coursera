import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'


/* initial state and reducer function are required to configure the store */

export const ConfigureStore = () => {
    // reducer and initialState are used to create a store 
    const store = createStore( Reducer,  initialState,);
    return store;
}