<template>
  <tr
    :class="{ 'employees-row': true, 'employees-row--edited': edited, 'employees-row--saved': saved, 'employees-row--error': error }"
  >
    <td>
      <input type="text" v-if="employee.edited" v-model="employee.id" />
      <div v-else>{{employee.id}} {{edited ? 'e' : 'ne'}}</div>
    </td>
    <td>
      <input type="text" v-if="edited" v-model="employee.name" />
      <div v-else>{{employee.name}}</div>
    </td>
    <td>
      <div v-if="edited">
        <input type="text" v-model="employee.address.street" />
        <input type="text" v-model="employee.address.suite" />
        <input type="text" v-model="employee.address.city" />
      </div>
      <div v-else>{{employee.address.street}} {{employee.address.suite}} {{employee.address.city}}</div>
    </td>
    <td>
      <input v-if="edited" v-model="employee.phone" />
      <div v-else>{{employee.phone}}</div>
    </td>
    <td>
      <input v-if="edited" v-model="employee.email" />
      <a v-else :href="`mailto:${ employee.email }`">{{employee.email}}</a>
    </td>
    <td>
      <button type="button" v-on:click="save(employee)" v-if="edited">Save</button>
      <button type="button" v-on:click="editItem()">{{edited ? 'Cancel' : 'Edit'}}</button>
    </td>
  </tr>
</template>

<script>
import EmployeeService from "../../services/employee-service";

export default {
  name: "EmployeesRow",
  props: ["data"],
  data: function() {
    return {
      edited: false,
      employee: Object.assign({}, this.data),
      initialData: null,
      highlightTimer: null,
      saved: false,
      error: false
    };
  },
  methods: {
    editItem() {
      if (this.edited) {
        this.employee = Object.assign({}, this.initialData);
      } else {
        this.initialData = Object.assign({}, this.employee);
      }
      this.edited = !this.edited;
    },
    save(employee) {
      clearTimeout(this.highlightTimer);
      EmployeeService.saveEmployee(this.employee)
        .then(({ data }) => {
          this.$emit("save", data);
          this.edited = false;
          this.setRowState("saved");
        })
        .catch(error => {
          console.error("Error!", error);
          this.setRowState("error");
        });
    },
    setRowState(state) {
      const time = 500;
      clearTimeout(this.highlightTimer);
      switch (state) {
        case "error":
          this.error = true;
          this.highlightTimer = setTimeout(() => (this.error = false), time);
          break;
        case "saved":
          this.saved = true;
          this.highlightTimer = setTimeout(() => (this.saved = false), time);
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$initial-color: #fff;
$saved-color: #8f8;
$error-color: #f88;

@keyframes saved {
  from {
    background-color: $saved-color;
  }
  to {
    background-color: $initial-color;
  }
}

@keyframes error {
  from {
    background-color: $error-color;
  }
  to {
    background-color: $initial-color;
  }
}

.employees-row {
  background: $initial-color;
  transition: background-color 0.5s ease-out;

  td {
    padding: 8px;
  }

  &--saved {
    animation: saved 0.5s forwards ease-out;
  }

  &--error {
    animation: error 0.5s forwards ease-out;
  }
}
</style>
