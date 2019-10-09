import React from 'react';
import MainContent from './MainContent/MainContent';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../redux/profileReducer';
import {withRouter} from 'react-router-dom';


class ProfilePage extends React.Component {
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res=>{  
                 this.props.setUserProfile(res.data);
            })
    }
    render(){
        debugger
    return <div className="app">
        <MainContent  profilePage={this.props.state.profilePage} profile={this.props.profile}/>
    </div>
    }
    
}
const mapStateToProps = (state)=>{
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfilePage)
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);