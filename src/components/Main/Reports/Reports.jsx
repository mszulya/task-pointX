import React from 'react';
import styles from './Reports.module.css';
import firstBlock from '../../../images/first-block.png';
import arrow from '../../../images/arrow.png';

const Reports = () => {
    return (
    <div className={styles.ReportsWrap}>
        <div className={styles.campaigns}>
            <img src={firstBlock}/>
            <svg className={styles.progressRing} width='120' height='120'>
                <circle className={styles.ringCircle} stroke='#fff' stroke-width='7' cx='60' cy='60' r='52' fill='transparent' />
                <circle className={styles.progressRingCircle} stroke='#4D92F7' stroke-width='7' cx='60' cy='60' r='52' fill='transparent'
                        stroke-dasharray="163 326.7" stroke-dashoffset="-82" />
                <text x="60" y="75" font-family="Inter" font-size="50" text-anchor="middle" fill="#fff">
                    2/4
                </text>
            </svg>
        </div>
        <div className={styles.growth}>
            <div className={styles.title}>
                <div className={styles.growthLogo}>
                    <img height='14px' width='24px' src={arrow}/>
                    <div>Growth</div>
                </div>
                <ul className={styles.terms}>
                    <li className={styles.term}>Today</li>
                    <li className={styles.term}>Week</li>
                    <li className={styles.termActive}>Month</li>
                </ul>
            </div>
        </div>
        <div className={styles.expenses}>
        </div>
    </div>
    )
}

export default Reports;