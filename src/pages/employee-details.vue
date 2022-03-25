<template>
  <v-container>
    <br><br>
    <template>
      <v-card v-if="isUpdate">
        <v-card-title>
          <span class="text-h5">Edit Employee</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editItem.name"
                  label="Full Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" style="display: inline-block">
                <v-text-field
                  v-model="editItem.age"
                  label="Age"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editItem.salary"
                  label="Salary"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="updateEmployee"> Save </v-btn>
        </v-card-actions>
      </v-card>
      <v-card max-width="375" class="mx-auto" v-else>
        <v-img
          src="https://cdn.vuetifyjs.com/images/lists/ali.png"
          height="300px"
          dark
        >
          <v-row class="fill-height">
            <v-card-title>
              <v-btn dark icon class="mr-4" @click="setMode">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-title class="white--text pl-12 pt-12">
              <div class="text-h4 pl-12 pt-12">{{ item.name }}</div>
            </v-card-title>
          </v-row>
        </v-img>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-phone </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>(650) 555-1234</v-list-item-title>
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-email </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>aliconnors@example.com</v-list-item-title>
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-cake </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.age}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-cash </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.salary}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo"> mdi-map-marker </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>1400 Main Street</v-list-item-title>
              <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Observer } from "mobx-vue";
import { employeeModel } from "../models/employee-model";
import { find } from "lodash-es";

@Observer
@Component
export default class DetailEmployee extends Vue {
  isUpdate = false;
  item = find(employeeModel.employee,['id',this.$route.params.id])
  defaultItem = {
    id: "",
    name: "",
    age: 20,
    salary: 20,
    departmentId: "",
  }
  editItem = {
    id: "",
    name: "",
    age: 20,
    salary: 20,
    departmentId: "",
  }
  setMode() {
    this.isUpdate = !this.isUpdate;
    this.editItem = Object.assign({}, this.item)
  }
  close() {
    this.editItem = Object.assign({}, this.defaultItem)
    this.isUpdate = !this.isUpdate
    /*this.$nextTick(() => {
      this.editItem = Object.assign({}, this.defaultItem)
      this.isUpdate = !this.isUpdate;
    })*/
  }
  updateEmployee() {
    employeeModel.updateEmployee(this.editItem.id, this.editItem.name, this.editItem.age, this.editItem.salary, this.editItem.departmentId)
    this.editItem = Object.assign({}, this.defaultItem)
    this.isUpdate = !this.isUpdate
  }
  beforeUpdate() {
    this.item = find(employeeModel.employee,['id',this.$route.params.id])
  }
}
</script>
<style scoped>
</style>