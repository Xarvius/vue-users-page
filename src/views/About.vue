<template>
  <div class="About">
    <h1><b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img> </h1>
    <Publications :publications=publications />
  </div>
</template>

<script>
// import router from './router/index'
import Publications from '../components/Publications.vue'
import gql from 'graphql-tag'

const GET_PROFILE = gql`query getProfile2{
      profile (id: 3){
        firstName,
        lastName,
        phone,
        USOSlink,
        qualification,
      }
    }`
const GET_PUBLICATIONS = gql`query getPublcations{
  publications (id: 3) {
    info
  }
}`
export default {
  apollo: {
    profile: {
      query: GET_PROFILE
    },
    publications: {
      query: GET_PUBLICATIONS
    }
  },
  components: {
    Publications
  },
  data() {
    return {
       mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
  }
}
</script>

<style scoped>

</style>