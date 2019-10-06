import React from 'react';
import style from "./Information.module.css"

const Information = (props) => {
    return <div className={style.information}>
    <h3><span>Date of birth: {props.dateOfBirth}</span> <br />
            <span>City : {props.city}</span> <br />
            <span>Education: {props.education}</span> <br />
            <span>Web-site: <a href={props.bio}>ROCK</a></span> 
        </h3>

    </div>
}

export default Information;