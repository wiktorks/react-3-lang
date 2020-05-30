import React from 'react';

const pl = {
    attention:{
        title:'Dobrze, że jesteś, sprawdź to zadanie',
        subtitle:'Pomoże Ci ogarnąć jak zmieniać język w apkach reacta',
        ctaButton:'Dowiedź się więcej',
    },
    newsletter:{
        title:'Bądź na bieżąco',
        ctaButton:'Idź do repo ->',
        action:'/new-subscriber?lang=pl'
    }
}
const en = {
    attention:{
        title:'Hey, check this task',
        subtitle:'It can help You to learn how to change language in react app',
        ctaButton:'More',
    },
    newsletter:{
        title:'Let\'s keep in touch',
        ctaButton:'To repository !!!',
        action:'/new-subscriber?lang=en'
    }
}

// to są dostępne języki
export const LangContext = React.createContext({
    texts: pl,
    changeLanguage: () => {}
});
export const langs = { pl: pl, en: en };