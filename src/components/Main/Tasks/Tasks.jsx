import React from 'react';
import styles from './Tasks.module.css';
import Task from './Task/Task';

const Tasks = ({count}) => {
    return (
    <div className={styles.tasksWrap}>
        <div className={styles.taskTitle}>
            <div className={styles.title}>Your tasks ({count})</div>
            <ul className={styles.statuses}>
                <li className={styles.activeStatus}>All</li>
                <li className={styles.status}>Active</li>
                <li className={styles.status}>Draft</li>
                <li className={styles.status}>Archived</li>
            </ul>
        </div>
        <Task />
    </div>
    )
}

export default Tasks;