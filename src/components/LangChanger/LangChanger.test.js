import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LangChanger from './LangChanger';
import styles from './LangChanger.module.css';
import { langs, LangContext } from '../../lib/languages';

configure({ adapter: new Adapter() });

describe('<LangChanger />', () => {
    const wrapper = mount(<LangChanger />);
    const polishImg = wrapper.find('[alt="polska"]');
    const englishImg = wrapper.find('[alt="anglia"]');
    // beforeEach()
    it('Renders properly', () => {
        expect(wrapper.find('img')).toHaveLength(2);
    });

    it('Has polish language as default', () => {
        expect(polishImg.hasClass(styles.selected)).toBeTruthy();
        expect(englishImg.hasClass(styles.selected)).toBeFalsy();
    });

    it('Switches between languages correctly', () => {
        englishImg.prop('onClick')();
        // englishImg.update();
        expect(polishImg.hasClass(styles.selected)).toBeFalsy();
        expect(englishImg.hasClass(styles.selected)).toBeTruthy();
    });
});