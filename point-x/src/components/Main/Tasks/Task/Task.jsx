import React from 'react';
import styles from './Task.module.css';
import peoples from '../../../../images/peoples.png';
import shape from '../../../../images/Shape.png';

const Task = () => {
    return (
    <div className={styles.taskWrap}>
        <div className={styles.quetion}>
            <span>Please, give the answer. That kind of childhood did you have?</span>
            <span className={styles.countParticipiants}>31</span>
        </div>
        <div className={styles.taskInfo}>
            <div className={styles.info}>23 days left</div>
            <div className={styles.info}><img src={peoples}/>53/1350</div>
            <div className={styles.info}><img src={shape}/>0.15 Px</div>
            <div className={styles.info}>Results</div>
        </div>
    </div>
    )
}

export default Task;