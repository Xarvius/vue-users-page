<template>
  <div id="app">
    <MenuControl :options=options />
    <router-view />
    <div>{{ profile }}</div>
  </div>
</template>

<script>
import MenuControl from './views/MenuControl.vue'
import gql from 'graphql-tag'

const GET_PROFILE = gql`query getProfile{
      profile{
        firstName,
        lastName,
        qualification,
        phone
      }
    }`
export default {
  apollo: {
    profile: {
      query: GET_PROFILE
    }
  },
  name: 'App',
  components: {
    MenuControl,
  },
  data() {
    return {
      options: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
