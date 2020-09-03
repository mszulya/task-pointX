import React from 'react';
import styles from './Footer.module.css';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twit.png';
import linkdin from '../../images/linkdin.png';
import telegram from '../../images/telegram.png';

const Footer = () => {
    return (
    <div className={styles.footer}>
        <div className={styles.company}>
            © 2020 SIA "Point-X", Go World! Go EU! Made with in Latvia LV40203240033
        </div>
        <div className={styles.block}>
            <div className={styles.socialMedias}>
                <img src={facebook}/>
                <img src={twitter}/>
                <img src={linkdin}/>
                <img src={telegram}/>
            </div>
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
        </div>
      </div>
    )
}

export default Footer;