<template>
  <div>
    <ProfileList  v-for="profile in profiles" :key="profile.user.id" :profile=profile />
  </div>
</template>

<script>
// import router from './router/index'
import ProfileList from '../components/ProfilesList.vue'
import gql from 'graphql-tag'
const GET_PROFILES = gql`query getProfiles{
      profiles{
        firstName,
        lastName,
        email,
        USOSlink,
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
  },
  components: {
    ProfileList
  }
}
</script>