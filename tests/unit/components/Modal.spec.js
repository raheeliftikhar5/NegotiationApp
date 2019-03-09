import { mount } from '@vue/test-utils';
import Modal from '../../../src/components/Modal.vue';

describe('Modal.test.js', () => {
  let wrapper, modal, modalHeading, maxOfferedText, minExpectedText, button;
  beforeEach(() => {
    wrapper = mount(Modal, {
      propsData: {
        show: false,
        minExpected: 0,
        maxOffer: 0,
      }
    });
    modal = wrapper.find('div.modal');
    modalHeading = wrapper.find('h1.modal-heading');
    maxOfferedText = wrapper.find('p.max-offered');
    minExpectedText = wrapper.find('p.min-expected');
    button = wrapper.find('button[type=button]');
  })
  it('should render modal correctly', () => {
    expect(modal.exists()).toBe(true);
    expect(modalHeading.exists()).toBe(true);
    expect(maxOfferedText.exists()).toBe(true);
    expect(minExpectedText.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  })
  it('should show \'Failure\' message if minExpected > maxOffered', () => {
    wrapper = mount(Modal, {
      propsData: {
        show: true,
        minExpected: 2000,
        maxOffer: 1000,
      }
    });
    
    modalHeading = wrapper.find('h1.modal-heading');
    expect(modalHeading.exists()).toBe(true);
    expect(modalHeading.text()).toBe('Failure!');
    
    maxOfferedText = wrapper.find('p.max-offered');
    expect(maxOfferedText.exists()).toBe(true);
    expect(maxOfferedText.text()).toBe('Offered salary: 1000');

    minExpectedText = wrapper.find('p.min-expected');
    expect(minExpectedText.exists()).toBe(true);
    expect(minExpectedText.text()).toBe('Expected salary: 2000');
  })
  it('should show \'Success\' message if minExpected <= maxOffered', () => {
    wrapper = mount(Modal, {
      propsData: {
        show: true,
        minExpected: 1000,
        maxOffer: 1000,
      }
    });
    
    modalHeading = wrapper.find('h1.modal-heading');
    expect(modalHeading.exists()).toBe(true);
    expect(modalHeading.text()).toBe('Success!');
    
    maxOfferedText = wrapper.find('p.max-offered');
    expect(maxOfferedText.exists()).toBe(true);
    expect(maxOfferedText.text()).toBe('Offered salary: 1000');

    minExpectedText = wrapper.find('p.min-expected');
    expect(minExpectedText.exists()).toBe(true);
    expect(minExpectedText.text()).toBe('Expected salary: 1000');
  })
})