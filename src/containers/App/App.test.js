import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import { langs, LangContext } from '../../lib/languages';

configure({ adapter: new Adapter() });


describe('<App /> ', () => {
  let wrapper;

  const compareLangs = (lang) => {
    const texts = wrapper.state().texts;
    const areEqual = JSON.stringify(texts) === JSON.stringify(langs[lang]);
    expect(areEqual).toBeTruthy();
  }

  it('Renders LangContext.Provider properly', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(LangContext.Provider)).toHaveLength(1);
  })

  it('Should render with polish language as default', () => {
    wrapper = shallow(<App />);
    compareLangs('pl');
  });

  it('Should change language after clicking flag image', () => {
    wrapper = mount(<App />);
    const imageButton = wrapper.find('img').at(1);
    imageButton.simulate('click');
    compareLangs('en');
  });
});