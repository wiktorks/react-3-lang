import React, { useContext, useState } from 'react';
import { LangContext, langs } from '../../lib/languages';
import plFlag from './poland.png';
import enFlag from './england.png';
import styles from './LangChanger.module.css';

const LangChanger = () => {
    const changeLanguage = useContext(LangContext).changeLanguage;
    const [selectedLanguage, changeSelectedLanguage] = useState("pl");

    const changeLanguageHandler = (lan) => {
        changeSelectedLanguage(lan);
        changeLanguage(langs[lan])
    }

    return (
        <div className={styles.langChanger}>
            <img src={plFlag}
                alt="polska"
                className={selectedLanguage === "pl" ? styles.selected : ''}
                onClick={() => changeLanguageHandler("pl")}
            />
            <img src={enFlag}
                alt="anglia"
                className={selectedLanguage === "en" ? styles.selected : ''}
                onClick={() => changeLanguageHandler("en")}
            />
        </div>
    );
}

export default LangChanger;