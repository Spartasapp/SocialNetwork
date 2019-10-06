import React from 'react';
import Dialogs from './Dialogs/Dialogs';

const DialogsPage = (props) => {


    
    return <div className="app">    
        <Dialogs dispatch={props.dispatch} dialogPage={props.state}/>
    </div>
}

export default DialogsPage;