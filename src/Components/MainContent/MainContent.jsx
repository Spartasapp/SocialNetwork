import React from 'react';
import Avatar from './Avatar/Avatar';
import Name from './Name/Name';
import Information from './Information/Information';
import style from "./MainContent.module.css"
import PostsContainer from './Posts/PostsContainer';

const MainContent =  (props) => {
    debugger
    return <div className = {style.content}>
        <img className={style.contenti} src="https://www.fodors.com/wp-content/uploads/2018/06/Greece-Best-Beaches-Apella-Karpathos-Dodecanese-02.jpg" alt="" />
        <div className={style.aboutInfo}>
            <Avatar img={props.profilePage.img} />
            <Name name={props.profilePage.name}/>
            
            <Information dateOfBirth={props.profilePage.information.born} city={props.profilePage.information.city}
            education={props.profilePage.information.education} bio={props.profilePage.information.bio}/>
        </div>
        <div className="send">
            <PostsContainer  />
        </div>

        
    </div>
}

export default MainContent;