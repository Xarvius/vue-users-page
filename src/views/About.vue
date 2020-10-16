<template>
  <div class="About">
    <div v-if="$apollo.loading">
      <b-card>
        <b-skeleton animation="wave" width="85%"></b-skeleton>
        <b-skeleton animation="wave" width="55%"></b-skeleton>
        <b-skeleton animation="wave" width="70%"></b-skeleton>
      </b-card>
      <b-skeleton-table
        :rows="3"
        :columns="1"
        :table-props="{ bordered: true, striped: true }"
      ></b-skeleton-table>
    </div>
    <div v-else>
      <h1><b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img> {{ fullName }}</h1>
      {{ extras.intro }}
      <Publications :publications=publications />
    </div>    
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

const GET_EXTRAS = gql`query getExtras{
  extras (id: 3) {
    intro
  }
}`
export default {
  apollo: {
    profile: {
      query: gql`query getProfile($name: String!){
      profile (alias: $name){
        firstName,
        lastName,
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
    },
    extras: {
      query: GET_EXTRAS
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
  computed:{
    fullName: function(){
      return  `${this.profile.qualification} ${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  props: ['name']
}
</script>

<style scoped>

</style>