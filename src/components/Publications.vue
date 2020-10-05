<template>
  <div>
  <div  v-if="publications">
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
export default {
  props: {
    publications: {}
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
    }
  }
}
</script>