import { mount } from '@vue/test-utils';
import Form from '../../../src/components/Form.vue';

describe('Form.test.js', () => {
  let wrapper, form, input, button, error, submitMsg;
  beforeEach(() => {
    wrapper = mount(Form, {
      propsData: {
        inputName: 'Offered Pay',
      }
    });
    form = wrapper.find('form');
    input = wrapper.find('input[type=number]');
    button = wrapper.find('button[type=submit]');
  })
  it('should render form correctly', () => {
    error = wrapper.find('small.text-error');
    
    expect(form.exists()).toBe(true);
    expect(input.exists()).toBe(true);
    expect(button.exists()).toBe(true);
    expect(error.exists()).toBe(false);
  })
  it('should display error if form submitted without input value', () => {
    form.trigger('submit');

    error = wrapper.find('small.text-error');
    expect(error.exists()).toBe(true);
    expect(error.text()).toBe('Offered Pay is required');
  })
  it('should display error if input <= 0', () => {
    input.setValue(-1);
    form.trigger('submit');

    error = wrapper.find('small.text-error');
    expect(error.exists()).toBe(true);
    expect(error.text()).toBe('Offered Pay should be greater than 0');
  })
  it('should not display error for input > 0', () => {
    input.setValue(10000);

    form.trigger('submit');

    error = wrapper.find('small.text-error');
    expect(error.exists()).toBe(false);
  })
  it('should hide form and display message on correct input', () => {
    input.setValue(10000);

    form.trigger('submit');

    error = wrapper.find('small.text-error');
    expect(error.exists()).toBe(false);

    submitMsg = wrapper.find('p.form-submitted-msg');
    expect(submitMsg.exists()).toBe(true);
    expect(submitMsg.text()).toBe('Your input is submitted');    
  })
})