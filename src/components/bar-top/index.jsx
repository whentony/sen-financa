import React from 'react';
import styles from '../../assets/css/bar-top.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Bartop = () => {
  



    return (
        <div className={styles.containerBartop}>whentony.ferreira@gmail.com
            <a className={styles.linkedin} href='https://www.linkedin.com/in/whentony-ferreira-87738b123/'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        
        </div>
    )
}

export default Bartop;