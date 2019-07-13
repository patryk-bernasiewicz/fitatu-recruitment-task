import { shallowMount } from '@vue/test-utils';
import Navbar from '@components/Navbar.vue';

import Hamburger from '@components/Hamburger.vue';

describe('Navbar.vue', () => {
  it('mounts as closed as default', () => {
    const wrapper = shallowMount(Navbar);

    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    expect(wrapper.vm.open).toEqual(false);
    expect(wrapper.find('.navbar--visible').exists()).toBeFalsy();
  });

  it('mounts as visible if opened', () => {
    const wrapper = shallowMount(Navbar, {
      propsData: { open }
    });
    wrapper.setData({ open: true });

    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    expect(wrapper.vm.open).toEqual(true);
    expect(wrapper.find('.navbar--visible').exists()).toBeTruthy();
  });

  it('switches open on Hamburger click', () => {
    const wrapper = shallowMount(Navbar);

    wrapper.find(Hamburger).vm.$emit('click');

    expect(wrapper.vm.open).toEqual(true);
  });
});
