<template>
  <div>
    <router-view v-if="$route.params.name"></router-view>
    <router-link v-else v-for="profile in profiles" :key="profile.id" :to="profile.alias">
        <UsersLists :profile="profile" />
    </router-link>
    
  </div>
</template>

<script>
import UsersLists from '../components/UsersList'
import gql from 'graphql-tag'

const GET_PROFILES = gql`query getProfiles{
      profiles{
        firstName,
        lastName,
        email,
        USOSlink,
        alias
      }
    }`

export default {
  apollo: {
    profiles: {
      query: GET_PROFILES,
      }
  },
  components: {
    UsersLists,
  },
}
</script>