<template>
  <div id="app">
    <MenuControl :options=options />
    <div class="d-flex align-items-center mb-3" v-if="loadingTime != 3" >
      <b-progress class="w-100" :max="maxLoadingTime" height="0.8rem">
        <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>
    </div>
    <b-skeleton-wrapper :loading="loading">
      <template v-slot:loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>
      <div>
        <router-view v-if="!error" />
        <div v-else>
          <ErrorAPI />
        </div>
      </div>
    </b-skeleton-wrapper>
    
  </div>
</template>

<script>
import MenuControl from './views/MenuControl.vue'
import ErrorAPI from './components/ErrorAPI.vue'

export default {
  name: 'App',
  components: {
    MenuControl,
    ErrorAPI
  },
  data() {
    return {
      options: true,
      loading: false,
      error: false,
      loadingTime: 0,
      maxLoadingTime: 3,
      profiles: {} //TODO
    }
  },
  watch: {
      loading(newVal, oldValue) {
        if (newVal !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newVal) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newVal, oldValue) {
        if (newVal !== oldValue) {
          if (this.profiles){
            this.loading = false
            this.loadingTime = 3
            return;
          }
          if (newVal === this.maxLoadingTime) {
            if(!this.profiles){
              this.error = true
            }
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
