import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}
/*reducer function 
State: stored in plain JS object
• Action: plain JS object with a type field that
specifies how to change something in the state
• Reducer: pure functions that take the current
state and action and return a new state
– Update data immutably (do not modify inputs)
 */

export const Reducer = (state = initialState, action) => {
    return state;       /* pure function as it is returning state*/
};