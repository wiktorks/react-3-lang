import React, { Component } from 'react';
import { LangContext, langs } from '../../lib/languages';
import './App.module.css';
import LangChanger from '../../components/LangChanger/LangChanger';
import AttentionSection from '../../components/AttentionSection/AttentionSection';
import NewsletterSection from '../../components/NewsletterSection/NewsletterSection';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: langs.pl,
      changeLanguage: this.changeLanguage
    }
  }

  changeLanguage = (language) => {
    this.setState({
      texts: language
    });
  }

  render() {
    return (
      <div className="App">
        <LangContext.Provider value={this.state}>
          <LangChanger />
          <article>
            <AttentionSection />
            <NewsletterSection />
          </article>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
