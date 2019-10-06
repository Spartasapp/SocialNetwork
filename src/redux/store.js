import ProfileReducer from "./profileReducer";
import DialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
            messages: [{
                userName: 'Jennifer Lopez',

            },

            {
                userName: 'Jennifer Lopez',

            }],
            newMessage: ''
            
        }
        ,
        listFriends: [
            {
                name: 'Arnold Schwarzenegger'
            },
            {
                name: 'Arnold Schwarzenegger'
            }

        ]

    },
    getState(){
        return this._state;
    },
    _renderEntireTree  (){

    },
    subscriber (observer){
        this._renderEntireTree = observer;
    },

    // addPost(){
    //     let newPost = {
    //         id: 2,
    //         post: this._state.profilePage.newPostText,
    //         likeCounts: 100500
    //     }
    //     this._state.profilePage.posts.unshift(newPost);
    //     this._state.profilePage.newPostText ='';
    //     this._renderEntireTree(this._state);
    // },
    // updatePostText(newText){
    //     this._state.profilePage.newPostText=newText;
    //     this._renderEntireTree(this._state);
    // },
    dispatch(action){
        this._state.profilePage= ProfileReducer(this._state.profilePage,action);
        this._state.dialogPage= DialogsReducer(this._state.dialogPage,action);
       
         if(action.type ==='DEL-POST-TEXT'){
            this._state.profilePage.posts.shift();
            this._renderEntireTree(this._state);
        }
        this._renderEntireTree(this._state);
    },
    
    
}


export default store;
// window.store=store;