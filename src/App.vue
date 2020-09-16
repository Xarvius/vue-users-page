<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link>|
       <router-link to="/about">About</router-link>|
      </div>
    <router-view />
    <div>{{ profile }}</div>
  </div>
</template>

<script>
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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
