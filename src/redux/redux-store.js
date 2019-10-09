import {createStore, combineReducers} from 'redux';
import ProfileReducer from './profileReducer';
import DialogsReducer from './dialogsReducer';
import UsersReducer from './usersReducer';
import AuthReducer from './authReducer';

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogsReducer,
    usersPage: UsersReducer,
    headerPage: AuthReducer
});
let store = createStore(reducers);

export default store;