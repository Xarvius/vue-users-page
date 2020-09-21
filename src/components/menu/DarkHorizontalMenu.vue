<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav >
        <b-nav-item v-for="route in routes" :key="route.path" :to="route.path"> {{ route.name }} </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    routes: {}
  }
}
</script>