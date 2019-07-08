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
      <tr
        v-bind:key="employee.id"
        v-for="employee in employees"
        :class="{ 'employees-list__list-row': true, 'employees-list__list-row--editable': employee.edited }"
      >
        <td>
          <input type="text" v-if="employee.edited" v-model="employee.id" />
          <div v-else>{{employee.id}}</div>
        </td>
        <td>
          <input
            type="text"
            v-if="employee.edited"
            v-model="employee.name"
            :disabled="!employee.edited"
          />
          <div v-else>{{employee.name}}</div>
        </td>
        <td>
          <div v-if="employee.edited">
            <input type="text" v-model="employee.address.street" />
            <input type="text" v-model="employee.address.suite" />
            <input type="text" v-model="employee.address.city" />
          </div>
          <div
            v-else
          >{{employee.address.street}} {{employee.address.suite}} {{employee.address.city}}</div>
        </td>
        <td>
          <input v-if="employee.edited" v-model="employee.phone" />
          <div v-else>{{employee.phone}}</div>
        </td>
        <td>
          <input v-if="employee.edited" v-model="employee.email" />
          <a v-else :href="`mailto:${ employee.email }`">{{employee.email}}</a>
        </td>
        <td>
          <button type="button" v-on:click="saveItem(employee)" v-if="employee.edited">Save</button>
          <button type="button" v-on:click="editItem(employee)">Edit</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      employees: [],
      editables: []
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

      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(({ data }) => {
          this.employees = data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    editItem(user) {
      this._updateEmployee(user, true);
    },
    saveItem(user) {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
        .then(({ data }) => this._updateEmployee(data, false));
    },
    _updateEmployee(user, edited = false) {
      this.employees = [...this.employees].map(employee => {
        if (employee.id === user.id) {
          employee = { ...user, edited };
        }
        return employee;
      });
    }
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

  &__list-row {
    background: #fff;

    td {
      padding: 8px;
    }
  }
}
</style>