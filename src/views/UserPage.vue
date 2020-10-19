<template>
  <b-tabs 
    content-class="mt-3" 
    active-nav-item-class="font-weight-bold text-uppercase"
    fill
  >
    <b-tab title="O mnie" active>
      <About :name=name />
    </b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Very, very long title"><p>I'm the tab with the very, very long title</p></b-tab>
  </b-tabs>
</template>

<script>
import About from '../components/About'

export default {
  components: {
    About
  },
  data() {
    return {
       mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
  },
  computed:{
    fullName: function(){
      return  `${this.profile.qualification} ${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  props: ['name']
}
</script>