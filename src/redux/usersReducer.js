const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let initialState = { 
    users:[],
    totalUsersCount: 0,
    pageSize: 5,
    pageCount: 7,
    currentPage: 5


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
    default: 
    return state;
   }
}
export const followAC = (userId)=> ({type: FOLLOW , userId});
export const unFollowAC = (userId)=> ({type: UNFOLLOW, userId});
export const setUsersAC = (users)=> ({type: SET_USERS, users});
export const setTotalUsersCountAC = (usersCount)=> ({type: SET_TOTAL_USERS_COUNT, usersCount});
export const setCurrentPageAC = (currentPage)=> ({type: SET_CURRENT_PAGE, currentPage});
export default UsersReducer;