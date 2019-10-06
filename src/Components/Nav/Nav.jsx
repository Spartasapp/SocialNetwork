import React from 'react';
import style from "./Nav.module.css"
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return <nav className = {style.nav}>
        <ul className={style.sidebar}>
            <li><NavLink activeClassName={style.activeLink} to="/profile">Profile</NavLink></li><br/>
            <li><NavLink activeClassName={style.activeLink} to="/messages">Messages</NavLink></li><br/>
            <li><NavLink activeClassName={style.activeLink} to="/news">News</NavLink></li><br/>
            <li><NavLink activeClassName={style.activeLinkfr} to="/music">Music</NavLink></li><br/>
            <li><NavLink activeClassName={style.activeLinkfr} to="/settings">Settings</NavLink></li><br/>
            <li><NavLink activeClassName={style.activeLinkfr} to="/friends">Friends</NavLink></li><br/>
            <li><NavLink activeClassName={style.activeLinkfr} to="/users">Users</NavLink></li>
        </ul>
        <div className={style.orderCircle}>
        <a href="#"><img src='data:image/jpeg;base64,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' alt='' className={style.circle}></img></a>
        <a href=""><img src='data:image/jpeg;base64,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' alt='' className={style.circle}></img></a>
        <a href=""><img src='data:image/jpeg;base64,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' alt='' className={style.circle}></img></a>
        </div>
    </nav>
}

export default Nav;