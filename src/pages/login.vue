<template>
  <v-container fluid class="fill-height">
    <v-card width="600" class="py-12 px-24">
      <!-- Login -->
      <v-row
        width="600"
        align-content="space-around"
        justify="center"
        ><v-col class="col-8 mb-6">
          <span class="text-h5">Log In</span>
        </v-col>
        <v-col class="col-8 mb-6"
          ><v-text-field
            label="Username"
            v-model="userName"
            flat
            outlined
            hide-details
        /></v-col>
        <v-col class="col-8 mb-6"
          ><v-text-field
            type="password"
            label="Password"
            v-model="passWord"
            flat
            outlined
            hide-details
        /></v-col>
        <v-col class="col-8 mb-6"
          ><v-btn
            class="font-weight-medium"
            color="red darken-1"
            width="100%"
            height="44"
            @click="onLogin"
            >Log in</v-btn
          ></v-col
        >
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Observer } from 'mobx-vue'
import router from '@/router'
import { v4 as uuidv4 } from 'uuid'
import { employeeModel } from "../models/employee-model"
@Observer
@Component

export default class Login extends Vue {
  userName = ''
  passWord = ''
  // isLogin = false
  setToken() {
    localStorage.setItem('token', uuidv4())
  }
  onLogin() {
    if (this.userName === 'admin' && this.passWord === 'admin') {
      this.setToken()
      router.replace({ path: '/home' })
      employeeModel.isLogin = true
    } else {
      console.log('Error')
    }
  }
  // sendLonging() {
  //   this.$emit('inputLogin', this.isLogin)
  // }
}
</script>
<style scoped>
.v-card {
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(50%, -50%);
  box-shadow: 0px 6px 18px rgba(112, 144, 176, 0.2);
}
</style>