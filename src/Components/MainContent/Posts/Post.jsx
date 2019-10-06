import React from 'react';
import style from "./Post.module.css"
import PropTypes from 'prop-types'
const Post = (props) => {
    return <div className={style.message}>
        <div className={style.circle}></div><div>{props.post}, likes: {props.likeCounts}</div>
        
    </div>
    
     
}
Post.propTypes = {
    post: PropTypes.string,
    likeCounts:PropTypes.number
  };  
export default Post;