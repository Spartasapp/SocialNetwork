import React from 'react';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import Information from './Information/Information';
import style from "./MainContent.module.css"
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../Preloader/Preloader';

const MainContent =  (props) => {
    if(props.profile ==={}){
        return <Preloader />
    }
    return <div className = {style.content}>
        <img className={style.contenti} src="https://www.fodors.com/wp-content/uploads/2018/06/Greece-Best-Beaches-Apella-Karpathos-Dodecanese-02.jpg" alt="" />
        <div className={style.aboutInfo}>
            <Avatar img={props.profile.photos} />
            <Name name={props.profile.fullName}/>
            <Information lookforAJob={props.profile.lookingForAJobDescription}/>
        </div>
        <div className="send">
            <PostsContainer  />
        </div>

        
    </div>
}

export default MainContent;