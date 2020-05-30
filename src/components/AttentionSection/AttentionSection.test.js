import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AttentionSection from './AttentionSection';
import { langs, LangContext } from '../../lib/languages';

configure({ adapter: new Adapter() });

describe('<AttentionSection />', () => {
    it('Renders properly', () => {
        const wrapper = shallow(<AttentionSection />);
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('h2')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('Gets correct language from LangContext.Provider', () => {
        for(const lang in langs) {
            const texts = langs[lang];
            const wrapper = mount(
                <LangContext.Provider value={{texts: texts}}>
                    <AttentionSection />
                </LangContext.Provider>
            );
            
            expect(wrapper.find('h1').text()).toEqual(texts["attention"].title);
            expect(wrapper.find('h2').text()).toEqual(texts["attention"].subtitle);
            expect(wrapper.find('button').text()).toEqual(texts["attention"].ctaButton);
        }
    });
});