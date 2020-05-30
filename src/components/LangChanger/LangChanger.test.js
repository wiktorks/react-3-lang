import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import LangChanger from './LangChanger';
import styles from './LangChanger.module.css';

configure({ adapter: new Adapter() });

describe('<LangChanger />', () => {
    let wrapper;
    act(() => {
        wrapper = mount(<LangChanger />);
    });
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
});