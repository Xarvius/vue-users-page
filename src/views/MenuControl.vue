<template>
  <div>
    <DarkHorizontalMenu :routes="routes.options.routes" />
  </div>
</template>

<script>
import DarkHorizontalMenu from '../components/menu/DarkHorizontalMenu.vue'
import routes from '../router'
export default {
 components: {
    DarkHorizontalMenu
  },
  data() {
    return {
      routes: routes
    }
  },
}
</script>

<style>

</style>