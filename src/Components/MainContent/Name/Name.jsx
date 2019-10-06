import React from 'react';
import style from "./Name.module.css"
const Name = (props) => {
    return <div className = {style.name}>
       <h2>{props.name}</h2> 

    </div>
}

export default Name;