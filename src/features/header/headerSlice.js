import React from 'react';
import styles from './header.css'


export const Header = ()=>{
    
    
    return (
        <header className={styles.header}>
            <span>
                Reddit
            </span>
            <input placeholder='Search'/>
        </header>
    );
}