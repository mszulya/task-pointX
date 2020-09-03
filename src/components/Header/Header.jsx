import React from 'react';
import styles from './Header.module.css';
import mainLogo from '../../images/logo-transparent.svg';
import userAva from '../../images/Beats_Electronics_logo.png';
import setting from '../../images/settings.png';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Header = ({userName}) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
    <header className={styles.header}>
        <img src={mainLogo}/>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Tasks campaigns" />
            <Tab label="Goods items" />
            <Tab label="Balance" />
            <Tab label="Support Center" />
        </Tabs>
        <div className={styles.user}>
            <img className={styles.userAva} src={userAva}/>
            <div className={styles.userName}>{userName}</div>
            <div className={styles.userStatus}>Administrator</div>
        </div>
        <img className={styles.setting} src={setting}/>
    </header>
    )
}

export default Header;