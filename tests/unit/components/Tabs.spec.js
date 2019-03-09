import { mount } from '@vue/test-utils';
import Tabs from '../../../src/components/Tabs.vue';

describe('Tabs.test.js', () => {
  let wrapper, tabs ;
  beforeEach(() => {
    wrapper = mount(Tabs);
    tabs = wrapper.find('div.nav-tabs');
  })
  it('should render tabs correctly', () => {
    expect(tabs.exists()).toBe(true);
  })
})