import React, { useContext } from 'react';
import { LangContext } from '../../lib/languages';
import '../common.css';

const NewsletterSection = ({ sectionName = "newsletter" }) => {
    // texts brane z LangContext
    const texts = useContext(LangContext).texts;

    const { title, ctaButton, action } = texts[sectionName]
    return (
        <form action={action} className="card-component">
            <h1>{title}</h1>
            <button>{ctaButton}</button>
        </form>
    );
}

export default NewsletterSection;