import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profileReducer';
import DialogsReducer from './dialogsReducer';
import UsersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    usersPage: UsersReducer
});
let store = createStore(reducers);

export default store;