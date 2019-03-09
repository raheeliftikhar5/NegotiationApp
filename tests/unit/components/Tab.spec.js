import { mount } from '@vue/test-utils';
import Tab from '../../../src/components/Tab.vue';

describe('Tab.test.js', () => {
  let wrapper, tab ;
  beforeEach(() => {
    wrapper = mount(Tab, {
      propsData: {
        label: '',
        name: '',
        selected: false,
      }
    });
    tab = wrapper.find('li.tab');
  })
  it('should render tab correctly', () => {
    expect(tab.exists()).toBe(true);
  })
  it('should render tab with correct text', () => {
    wrapper = mount(Tab, {
      propsData: {
        label: 'employee',
        name: 'Employee',
        selected: false,
      }
    });
    tab = wrapper.find('li.tab');
    expect(tab.exists()).toBe(true);
    expect(tab.text()).toBe('Employee');
  })
  it('should be selected on click', () => {
    wrapper = mount(Tab, {
      propsData: {
        label: 'employee',
        name: 'Employee',
        selected: true,
      }
    });
    tab = wrapper.find('li.tab.selected');
    tab.trigger('click');

    expect(tab.exists()).toBe(true);
    expect(wrapper.props('selected')).toBe(true);
  })
})