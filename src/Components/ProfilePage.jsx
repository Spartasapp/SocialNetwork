import React from 'react';
import MainContent from './MainContent/MainContent';


const ProfilePage = (props) => {
    debugger
    return <div className="app">
        <MainContent  profilePage={props.state.profilePage} />
    </div>
}

export default ProfilePage;