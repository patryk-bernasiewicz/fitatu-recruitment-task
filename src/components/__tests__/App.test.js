import { shallowMount } from '@vue/test-utils';
import App from '@components/App.vue';

describe('App.vue', () => {
  it('mounts main container', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view']
    });

    expect(wrapper.find('.app').exists()).toBeTruthy();
  });
});
