<template>
  <div>
  <div v-if="publications">
    <b-table
      id="cards"
      :items="publications"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="cards"
      align="center"
    ></b-pagination>
  </div>
  <div v-else>
    <b-skeleton-table
    :rows="3"
    :columns="1"
    :table-props="{ bordered: true, striped: true }"
  ></b-skeleton-table>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
        publications: {
            query: gql`query getPublcations($id: ID){
                publications (id: $id) {
                    info
                }
            }`,
            variables() {
                return {
                    id: this.idToNumber
                }
            }
        },
    },
  props: {
    id: String
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      fields: [{
        key: "info",
        label: "Publikacje"
      }]
    }
  },
  computed: {
    rows() {
      return this.publications.length
    },
    idToNumber: function() {
            return Number(this.id)
        }
  }
}
</script>