import { shallowMount } from '@vue/test-utils';
import EmployeesRow from '@pages/EmployeesList/EmployeesRow.vue';
import axios from 'axios';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve()),
  put: jest.fn(() =>
    Promise.resolve({
      id: 1,
      name: 'Cba',
      address: { street: 'A', suite: 'B', city: 'C' },
      phone: '123',
      email: 'kon@adf.cd'
    })
  )
}));

describe('EmployeesRow.vue', () => {
  const wrapper = shallowMount(EmployeesRow, {
    propsData: {
      data: {
        id: 1,
        name: 'Abc',
        address: { street: 'A', suite: 'B', city: 'C' },
        phone: '123',
        email: 'kon@adf.cd'
      }
    }
  });

  it('does not render inputs outside "edit mode"', () => {
    wrapper.setData({ edited: false });

    expect(wrapper.contains('input')).toBe(false);
  });

  it('does render inputs while in "edit mode"', () => {
    wrapper.setData({ edited: true });

    expect(wrapper.contains('input')).toBe(true);
  });

  it('does render two buttons ("save", "cancel") while in "edit mode"', () => {
    wrapper.setData({ edited: true });

    expect(wrapper.findAll('button').length).toEqual(2);
  });

  it('does send data on "Save" button click', done => {
    wrapper.setData({ edited: true });

    wrapper.find('button').trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.isLoading).toBe(true);
      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/1',
        {
          id: 1,
          name: 'Abc',
          address: { street: 'A', suite: 'B', city: 'C' },
          phone: '123',
          email: 'kon@adf.cd'
        }
      );
      expect(wrapper.emitted().save.length).toEqual(1);
      done();
    });
  });
});
