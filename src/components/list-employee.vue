<template>
  <v-container>
    <v-row>
      <v-col v-for="item in employees" :key="item.id">
        <v-card class="mx-auto" max-width="344" @click="onClick(item.id)">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
            height="200px"
          ></v-img>

          <v-card-title> {{ item.name }} </v-card-title>

          <v-card-subtitle> Age: {{ item.age }} </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <template>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="5"
              :total-visible="visible"
              @input="next"
            ></v-pagination>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator"
import { Observer } from "mobx-vue"
import { employeeModel } from "../models/employee-model"
import { filter, slice } from "lodash-es"
import router from "@/router"

@Observer
@Component
export default class ListEmployee extends Vue {
  page = 1
  visible = 7
  @Prop() departmentId!: string

  employees = slice(
    filter(employeeModel.employee, ["departmentId", this.departmentId]),
    (this.page - 1) * 12,
    (this.page - 1) * 12 + 12
  )

  onClick(employeeId: any) {
    router.push({ path: `/employee/${employeeId}` });
  }

  next() {
    this.employees = slice(
      filter(employeeModel.employee, ["departmentId", this.departmentId]),
      (this.page - 1) * 12,
      (this.page - 1) * 12 + 12
    )
  }

  @Watch("departmentId")
  list() {
    this.employees = filter(employeeModel.employee, [
      "departmentId",
      this.departmentId,
    ])
  }
}
</script>
<style scoped>
</style>