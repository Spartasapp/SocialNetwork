
const SET_USER_DATA = 'SET_USER_DATA';
let initialState = {
    id: null,
    email: null,
    login: null
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
}

export const setUserData = (data) => ({ type: SET_USER_DATA, data });
export default AuthReducer;