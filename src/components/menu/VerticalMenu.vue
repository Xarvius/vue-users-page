<template>
  <div>
    <b-icon-list v-b-toggle.sidebar-1 font-scale="3" ></b-icon-list>
    <b-sidebar id="sidebar-1" title="Menu" shadow>
      <div class="px-3 py-2">
        <b-nav-item v-for="route in routes" :key="route.path" :to="route.path"> {{ route.name }} </b-nav-item>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    routes: {}
  }
}
</script>

<style scoped>
svg{
  margin-left: 95%;
}
</style>