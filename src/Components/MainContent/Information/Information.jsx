import React from 'react';
import style from "./Information.module.css"

const Information = (props) => {
    return <div className={style.information}>
        <h3>
            <span>Look for a job: {props.lookforAJob}</span> 
        </h3>

    </div>
}

export default Information;