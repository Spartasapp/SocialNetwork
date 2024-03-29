const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let initialState = { 
    users:[],
    totalUsersCount: 0,
    pageSize: 25,
    pageCount: 7,
    currentPage: 5,
    isFetching: true


};
const UsersReducer = (state = initialState, action)=>{
   switch(action.type ){
     case FOLLOW: 
        return {
            ...state,
            users: state.users.map( u => {
                if(u.id===action.userId){
                    return {...u, followed: true}
                }
                return u ;
            }) 
        }
     case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id===action.userId){
                        return {...u, followed: false}
                    }
                    return u ;
                }) 
            }
     case SET_USERS: {
         return {...state, users: action.users}
     }
     case SET_TOTAL_USERS_COUNT: {
         return {...state, totalUsersCount: action.usersCount}
     }
     case SET_CURRENT_PAGE: {
         return {...state, currentPage: action.currentPage}
     }
     case TOGGLE_IS_FETCHING: {
         return {...state, isFetching: action.isFetching}
     }
    default: 
    return state;
   }
}
export const follow = (userId)=> ({type: FOLLOW , userId});
export const unFollow = (userId)=> ({type: UNFOLLOW, userId});
export const setUsers = (users)=> ({type: SET_USERS, users});
export const setTotalUsersCount = (usersCount)=> ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPage = (currentPage)=> ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching)=> ({type: TOGGLE_IS_FETCHING, isFetching});
export default UsersReducer;