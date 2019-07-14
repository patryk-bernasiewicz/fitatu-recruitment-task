import { shallowMount } from '@vue/test-utils';
import EmployeesList from '@pages/EmployeesList/EmployeesList.vue';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve([]))
}));

describe('EmployeesList.vue', () => {
  const wrapper = shallowMount(EmployeesList, {
    stubs: ['employees-row']
  });

  it('renders a table', () => {
    expect(wrapper.find('table.employees-list__list').exists()).toBe(true);
  });

  it('has 6 colums', () => {
    expect(wrapper.findAll('table > tr:first-child > th').length).toEqual(6);
  });
});
