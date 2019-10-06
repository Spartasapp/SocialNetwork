import React from 'react';
import style from './Music.module.css'
const Music = (props) => {
return <div className={style.friend}>
        <img className={style.img} src={props.img} alt=""/>
        <div className={style.nameUser}>{props.name}</div>
        <button className={style.button}>Write message</button>
        <div className={style.horizontLine}></div>
    </div>
}

export default Music;