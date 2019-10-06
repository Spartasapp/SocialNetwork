import React from 'react';
import style from './Friends.module.css'
import Friend from './Friend'
const Friends = (props) => {
    let listOfFriend = props.state.listFriends.map(p => <Friend key={p} name={p.name} img={p.img}/>)
    return <div className={style.friends}>
        {listOfFriend}
    </div>
}

export default Friends;