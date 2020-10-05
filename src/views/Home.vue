<template>
  <div>
  </div>
</template>

<script>
// import router from './router/index'
import gql from 'graphql-tag'
const GET_PROFILES = gql`query getProfiles{
      profiles{
        firstName,
        lastName,
        email,
        user {
          id
        }
      }
    }`
export default {
  apollo: {
    profiles: {
      query: GET_PROFILES
    }
  }
}
</script>