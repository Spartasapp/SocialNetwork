import React from 'react';
import style from "./Dialogs.module.css"
import Dialog from './Dialog';



const Dialogs = (props) => {
    debugger;
    
    let message = props.dialogPage.messages.map((m,index) => <Dialog  img={m.userImg}   name={m.userName}  dispatch={props.dispatch}/>)
    return <div className = {style.dialogs}>
        <div style={{display : "grid", justifyContent: "center"}}><h2>Dialogues</h2></div>
        <div className={style.dialogsGrid}>
        {message}
        </div>
       
        
    </div>
}

export default Dialogs;