<template>
    <div v-if="$apollo.loading == false">
        <h1><b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img> {{ fullName }}</h1>
        <UserExtras :id=profile.user.id />
        <Publications :id=profile.user.id />
    </div>
</template>

<script>
import Publications from './Publications'
import UserExtras from './UserExtras'
import gql from 'graphql-tag'

export default {
    apollo: {
        profile: {
        query: gql`query getProfile($name: String!){
            profile (alias: $name){
                firstName,
                lastName,
                qualification,
                user{
                    id
                }
            }
            }`,
            variables() {
                return {
                    name: this.name
                }
            }
        },
        publications: {
            query: gql`query getPublcations{
                publications (id: 3) {
                    info
                }
            }`
        },
    },
    components: {
        Publications,
        UserExtras
    },
    data() {
        return {
        mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
        }
    },
    computed: {
        fullName: function(){
        return  `${this.profile.qualification} ${this.profile.firstName} ${this.profile.lastName}`
        }
    },
    props: {
        name: String
    }
}
</script>

<style>

</style>