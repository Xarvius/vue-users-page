<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
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
}
</style>
