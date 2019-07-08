<template>
  <div class="page employees-list">
    <h1 class="employees-list__header">Employees</h1>
    <div v-if="loading" class="employees-list__loading">Loading...</div>
    <table v-else class="employees-list__list">
      <tr class="employees-list__list-header">
        <th>id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
      <employees-row
        v-for="employee in employees"
        v-bind:data="employee"
        v-bind:key="employee.id"
        v-on:save="onSave"
      />
    </table>
  </div>
</template>

<script>
import EmployeesRow from "./EmployeesRow.vue";
import EmployeeService from "../../services/employee-service";

export default {
  data() {
    return {
      loading: false,
      employees: []
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.loading = true;

      EmployeeService.getEmployees()
        .then(({ data }) => (this.employees = data))
        .finally(() => (this.loading = false));
    },
    onSave(updatedEmployee) {
      this.employees = [...this.employees].map(employee => {
        if (employee.id === updatedEmployee.id) {
          employee = Object.assign({}, updatedEmployee);
        }
        return employee;
      });
    }
  },
  components: {
    EmployeesRow
  }
};
</script>
<style lang="scss" scoped>
.employees-list {
  &__header {
    font-size: 20px;
    padding: 0 0 10px;
  }

  &__loading {
    color: #999d9d;
    text-align: center;
  }

  &__list {
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
  }

  &__list-header {
    background: #f7f8f9;
    border-bottom: 1px solid #999d9d;

    th {
      padding: 8px;
    }
  }
}
</style>