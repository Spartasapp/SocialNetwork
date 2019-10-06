import React from 'react';
import style from "./Header.module.css"

const Header = () => {
    return <header className = {style.header}>
        <img className={style.logo} src="https://st2.depositphotos.com/3649089/9095/i/450/depositphotos_90957610-stock-photo-gladiator-knight-icon-with-laurel.jpg" alt="sparta-logo"/>

    </header>
}

export default Header;