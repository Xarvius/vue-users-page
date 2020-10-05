<template>
  <div>
    <DarkHorizontalMenu v-if="options" :routes="routes.options.routes" />
    <VerticalMenu v-else :routes="routes.options.routes" />
  </div>
</template>

<script>
import DarkHorizontalMenu from '../components/menu/DarkHorizontalMenu.vue'
import VerticalMenu from '../components/menu/VerticalMenu.vue'
import routes from '../router'
export default {
 components: {
    DarkHorizontalMenu,
    VerticalMenu
  },
  props: {
    options: {}
  },
  data() {
    return {
      routes
    }
  },
}
</script>

<style>

</style>