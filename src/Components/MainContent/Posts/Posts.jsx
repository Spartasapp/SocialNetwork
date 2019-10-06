import React from 'react';
import Post from './Post';

const Posts = (props) => {

    let inPosts = props.profilePage.posts.map(p => <Post key={p}  post={p.post} likeCounts={p.likeCounts}/>)
    let newPostElement = React.createRef();
    let onClickaddPost = ()=> {

        props.onClickaddPost();
    }
    let changeTextPost = ()=> {
        let text = newPostElement.current.value;
        props.onChangeTextPost(text);
    }
    let del = ()=>{
        props.del();
    }
    debugger
    return <div className="wrap-posts">
        <h2>My posts </h2>
        <textarea onChange={changeTextPost} value={props.profilePage.newPostText} ref={newPostElement} type="textarea" style={{ "backgroundColor": "white" }} />
        <button onClick={onClickaddPost} style={{ "backgroundColor": "green", "color": "white" }}>Send</button>
        <button onClick={del} >del</button>
        {inPosts}
    </div>
}

export default Posts;