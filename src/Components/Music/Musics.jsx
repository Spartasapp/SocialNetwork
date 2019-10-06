import React from 'react';
import style from './Friends.module.css'
import Music from './Music'
const Musics = (props) => {
    let listOfFriends = props.state.listFriends.map(p => <Music key={p} name={p.name} img={p.img}/>)
    return <div className={style.friends}>
        {listOfFriends}
    </div>
}

export default Musics;