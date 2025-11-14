import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Counter from './app.vue';

describe('Counter component', () => {
  it('should render initial count', () => {
    const wrapper = mount(Counter);
    expect(wrapper.find('[data-test=counter-value]').text()).toBe('0');
  });

  it('should increment count when button is clicked', async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find('[data-test=counter-add]');

    await button.trigger('click');
    expect(wrapper.find('[data-test=counter-value]').text()).toBe('1');

    await button.trigger('click');
    expect(wrapper.find('[data-test=counter-value]').text()).toBe('2');
  });
});
