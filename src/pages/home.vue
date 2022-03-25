<template>
  <v-container>
    <v-toolbar-title color="blue accent-2">
      <v-btn color="red darken-1" dark class="mb-2">
        LIST OF 10 HIGHEST SALARY EMPLOYEES
      </v-btn>
    </v-toolbar-title>
    <v-simple-table fixed-header height="350px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">STT</th>
            <th class="text-left">Name</th>
            <th class="text-left">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in topSalaryest" :key="item.id">
            <td>{{ topSalaryest.indexOf(item) }}</td>
            <td>{{ item.name }}</td>
            <td>{{ departmentName(item.departmentId) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-toolbar-title>
      <v-btn color="red darken-1" dark class="mb-2">
        LIST OF DEPARTMENT EMPLOYEES WITH THE HIGHEST TOTAL SALARY
      </v-btn>
    </v-toolbar-title>
    <v-simple-table fixed-header height="350px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">STT</th>
            <th class="text-left">Name</th>
            <th class="text-left">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in roomSalalrest" :key="item.id">
            <td>{{ roomSalalrest.indexOf(item) }}</td>
            <td>{{ item.name }}</td>
            <td>{{ departmentName(item.departmentId) }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Observer } from "mobx-vue"
import { employeeModel } from "../models/employee-model"
import { filter } from 'lodash-es'

@Observer
@Component

export default class Home extends Vue {
  topSalaryest = employeeModel.topSalaryest
  roomSalalrest = employeeModel.roomSalalrest
  departmentName(departmentId: any) {
    return filter(employeeModel.department,['id',departmentId])[0].name
  }
}
</script>
<style scoped>
</style>