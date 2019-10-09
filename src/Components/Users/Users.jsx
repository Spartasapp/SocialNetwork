import React from 'react';
import style from './Users.module.css';
import user from '../../assets/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && style.currectPage} onClick={(e) => props.onPageChanged(p)}>{p}</span>
        })}
        {props.users.map(u => {
            return <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                            {u.photos.small === null ? <img src={user} alt="" /> : <img src={u.photos.small} alt="" />}
                        </NavLink>
                    </div>
                </span>
                <span>
                    {u.followed ?
                        <button onClick={() => { props.unfollow(u.id) }}>unFollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </span>
                </span>
            </div>
        })}
    </div>
}

export default Users;