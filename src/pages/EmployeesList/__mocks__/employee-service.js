export default {
  getEmployees: () => Promise.resolve({ data: [] }),
  saveEmployee: employee => Promise.resolve({ data: { id: 1 } })
};
