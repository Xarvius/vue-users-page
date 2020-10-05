<template>
  <b-nav-item :to="userFullName" >
    <b-card>
        <b-media>
        <template v-slot:aside>
            <b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
        </template>

        <h5 class="mt-0">{{profile.firstName}} {{profile.lastName}}</h5>
        <p>
            {{profile.email}} <br>
        </p>
        </b-media>
    </b-card>
  </b-nav-item>
</template>

<script>
export default {
    props: {
        profile: {}
    },
    computed: {
        userFullName: function() {
            return this.profile.firstName[0] + "." + this.profile.lastName
        }
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
}
a {
    color: #2c3e50;
}
</style>