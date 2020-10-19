<template>
    <div v-if="$apollo.loading == false">
        {{ extras.intro }}
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    apollo: {
        extras: {
            query: gql`query getExtras($id: ID){
                extras (id: $id) {
                    intro
                }
            }`,
            variables() {
                return {
                    id: this.idToNumber
                }
            }
        }
    },
    props: {
        id: String
    },
    computed: {
        idToNumber: function() {
            return Number(this.id)
        }
    }
}
</script>