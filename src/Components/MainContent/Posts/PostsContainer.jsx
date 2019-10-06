import React from 'react';
import {addPostActionCreator,updatePostTextActionCreator, delPostActionCreator} from '../../../redux/profileReducer'
import Posts from './Posts';
import {connect} from 'react-redux'

// const PostsContainer = (props) => {
    
//     debugger
//     return (
//         <StoreContext.Consumer> 
//             {
//            (store)=> 
//            {
//             let state = store.getState();
//             let onClickaddPost = ()=> {

//                 store.dispatch(addPostActionCreator());
//             }
//             let onChangeTextPost = (text)=> {
                
                
//                 store.dispatch(updatePostTextActionCreator(text));
//             }
//             let del = ()=>{
//                 store.dispatch(delPostActionCreator());
//             }
//            return <Posts profilePage={state.profilePage} onClickaddPost={onClickaddPost}
//                 onChangeTextPost={onChangeTextPost} del={del} />
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state)=>{
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        onClickaddPost : ()=>{
            dispatch(addPostActionCreator());
        },
        onChangeTextPost: (text)=>{
            dispatch(updatePostTextActionCreator(text));
        },
        del: ()=>{
            dispatch(delPostActionCreator());
        }
    }
}
const NewPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default NewPostsContainer ;