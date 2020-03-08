import React from 'react';

import styles from './Header.module.css'

const Header = ({ logo }) => (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className="links">
        </div>
    </div>
);

export default Header;