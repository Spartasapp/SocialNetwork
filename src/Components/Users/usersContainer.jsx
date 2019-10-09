import React from 'react';
import {connect} from 'react-redux';
import {follow,unFollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching} from '../../redux/usersReducer'
import axios from 'axios';
import Users from './Users';
import Preloader from '../Preloader/Preloader';


class UsersApiComponent extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res=>{
                 this.props.toggleIsFetching(false);   
                 this.props.setUsers(res.data.items);
                 this.props.setTotalUsersCount(res.data.totalCount);

            })
    }
    onPageChanged=(pageNumber)=>{
         this.props.toggleIsFetching(true);
         this.props.setCurrentPage(pageNumber);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(res=>{
              this.props.toggleIsFetching(false);
              this.props.setUsers(res.data.items);
         })
    }
    render=()=>{
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users 
        totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        />
        </>
   
}
}


let mapStateToProps = (state)=>{
   return {
       users: state.usersPage.users,
       totalUsersCount: state.usersPage.totalUsersCount,
       pageSize: state.usersPage.pageSize,
       currentPage: state.usersPage.currentPage,
       isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch)=>{
//     return {
//         follow: (userId)=>{
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId)=>{
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users)=>{
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (usersCount)=>{
//             dispatch(setTotalUsersCountAC(usersCount))
//         },
//         setCurrentPage: (pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }

//     }
// }
export default connect(mapStateToProps,{follow,unFollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching})(UsersApiComponent) ;