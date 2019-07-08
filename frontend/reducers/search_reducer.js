import { RECEIVE_USERS } from '../actions/session_actions';

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USERS:
            let newState = Object.assign({}, state);
            newState.searchUsers = action.searchUsers;
            return newState;
        default:
            return state;
    }
};

export default searchReducer;