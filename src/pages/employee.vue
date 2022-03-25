<template>
  <v-container>
    <v-toolbar color="red darken-1">
      <v-app-bar-nav-icon class="hidden-sm-and-down"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-h6 mr-6 hidden-sm-and-down">
        Employee
      </v-toolbar-title>
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        chips
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        label="Search for a coin..."
        solo
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Search for your favorite
              <strong>Cryptocurrency</strong>
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:selection="{ attr, on, item, selected }">
          <v-chip
            v-bind="attr"
            :input-value="selected"
            color="blue-grey"
            class="white--text"
            v-on="on"
          >
            <v-icon left> mdi-bitcoin </v-icon>
            <span v-text="item.name"></span>
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="indigo"
            class="text-h5 font-weight-light white--text"
          >
            {{ item.name.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-bitcoin</v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          :hide-slider="!model"
          color="blue-grey"
          slider-color="blue-grey"
        >
          <v-tab @click="onChange(item.id)" v-for="item in items" :key="item.id">{{ item.name }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <br>
    <template>
      <ListEmployee :departmentId="departmentId"/>
    </template>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Observer } from "mobx-vue";
import { employeeModel } from "../models/employee-model";
import ListEmployee from "../components/list-employee.vue";
import { filter } from "lodash-es";

@Observer
@Component({
  components: {
    ListEmployee,
  },
})
export default class Employee extends Vue {
  isLoading = false
  items = employeeModel.department
  model = null
  search = null
  tab = null || 0
  page = 1
  perPage = 0
  visible = 7
  departmentId = this.items[0].id

  onChange(departmentId: any) {
    this.departmentId = departmentId
    console.log(this.departmentId)
  }

  @Watch("model")
  onModel() {
    const e = this.items.filter((e)=>{ return e.name == this.model})
    if(e !== undefined) this.onChange(e[0].id)
  }
  
  /*@Watch("search")
  onSearch(val: any) {
    console.log("search");
    console.log(this.model);
    console.log(this.items);
    // Items have already been loaded
    if (this.items.length > 0) return;

    this.isLoading = true;

    // Lazily load input items
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then((res) => res.clone().json())
      .then((res) => {
        this.items = res;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => (this.isLoading = false));
  }*/
}
</script>
<style scoped>
.ListEmployee {
  margin-top: 20px;
}
</style>
