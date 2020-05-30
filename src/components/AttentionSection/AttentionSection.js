import React, { useContext } from 'react';
import { LangContext } from '../../lib/languages';
import '../common.css';

const AttentionSection = ({ sectionName = "attention" }) => {
    // texts brane z LangContext
    const texts = useContext(LangContext).texts;

    const { title, subtitle, ctaButton } = texts[sectionName]
    return (
        <div className="card-component">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <button>{ctaButton}</button>
        </div>
    );
}

export default AttentionSection;