import React from 'react';
import style from "./Dialog.module.css"
import {updateDialogTextCreator,addDialogTextCreator} from './../../redux/dialogsReducer'


const Dialog = (props) => {
    
    let updateTextDialog = (e)=>{
        let text = e.target.value;
        props.dispatch(updateDialogTextCreator(text));
        ;
    }
    let addDialog = ()=>{
        props.dispatch(addDialogTextCreator());
        ;
    }
    return <div className = {style.dialog}>
        <img className={style.img} src={props.img} alt="JLO"/><div className={style.user}>{props.name}</div>
        <div className={style.verticalLine}></div>
        <input className={style.textarea} onChange={updateTextDialog} type="textarea"/>
        <button className={style.button} onClick={addDialog}>send</button>
        
    </div>
}

export default Dialog;