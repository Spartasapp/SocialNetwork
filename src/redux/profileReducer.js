const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const DEL_POST='DEL-POST';
let initialState = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguIxU3P0yCeUsIjPkgZwj3Djm5TU5g0ithlp9FVbez3uDCwx7tA",
            name: "Dwayne Johnson",
            information: {
                born: " May 2, 1972",
                city: "Los Angeles",
                education: "Hollywood",
                bio: "https://en.wikipedia.org/wiki/Dwayne_Johnson"
            },
            posts: [{
                id: 1,
                post: 'hi people',
                likeCounts: 15
            }],
            newPostText: ''
};
const ProfileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 2,
                post: state.newPostText,
                likeCounts: 100500
            }
            return {
                ...state,
                posts: [newPost,...state.posts],
                newPostText: ''
            };
        }
        case DEL_POST: {
            let stateCopy = {...state};
            stateCopy.posts=[...state.posts];
            stateCopy.posts.shift();
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText : action.newText
            }; 
        }  
        default:
            return state;
    }
}
export const updatePostTextActionCreator = (newText)=> ({type: UPDATE_POST_TEXT, newText});
export const addPostActionCreator = ()=> ({type: ADD_POST});
export const delPostActionCreator = ()=> ({type: DEL_POST});
export default ProfileReducer;