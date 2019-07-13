import { shallowMount } from '@vue/test-utils';
import Hamburger from '@components/Hamburger.vue';

describe('Hamburger.vue', () => {
  it('mounts hamburger', () => {
    const wrapper = shallowMount(Hamburger);

    expect(wrapper.find('.hamburger').exists()).toBeTruthy();
    expect(wrapper.find('.hamburger__dash').exists()).toBeTruthy();
  });
});
