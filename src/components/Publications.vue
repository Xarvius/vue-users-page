<template>
  <div>
  <b-card no-body>
    <b-tabs pills card vertical lazy>
      <b-tab v-for="pub in publications" :key="pub.name" :title="pub.name"><b-card-text>{{ pub.content }}</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {
  props: {
    publications: {}
  }
}
</script>