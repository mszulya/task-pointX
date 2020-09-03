import React from 'react';
import styles from './Main.module.css';
import Reports from './Reports/Reports';
import Tasks from './Tasks/Tasks';
import Graphic from './Graphic/Graphic';
import { NavLink } from 'react-router-dom';

const Main = ({userName}) => {
    let count = 6;

    return (
    <div className={styles.mainWrap}>
        <div className={styles.welcomeBlock}>
            <div>
                <div className={styles.welcome}>Good day, {userName}!</div>
                <div className={styles.report}>Today you have +1,321 new participiants and +23,782 views in all your campaigns. Good work!</div>
            </div>
            <div>
                <NavLink to="/newtask" className={styles.Link}>Create new</NavLink>
            </div>
        </div>
        <Reports />
        <Graphic />
        <Tasks count={count} />
    </div>
    )
}

export default Main;