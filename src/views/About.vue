<template>
  <div class="About">
    <h1><b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img> </h1>
    {{ $apollo.loading }}
    {{ profile }}
    <Publications :publications=publications />
  </div>
</template>

<script>
import Publications from '../components/Publications.vue'
import gql from 'graphql-tag'

const GET_PUBLICATIONS = gql`query getPublcations{
  publications (id: 3) {
    info
  }
}`
export default {
  apollo: {
    profile: {
      query: gql`query getProfile2($name: String!){
      profile (alias: $name){
        firstName,
        lastName,
        phone,
        USOSlink,
        qualification,
      }
    }`,
    variables() {
      return {
        name: this.name
      }
    }
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
  },
  props: ['name']
}
</script>

<style scoped>

</style>