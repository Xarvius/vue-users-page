<template>
    <b-card
        :title="fullName" :sub-title="profile.email"
    >
    </b-card>
</template>

<script>
export default {
    props: {
        profile: {}
    },
    computed:{
        fullName: function(){
            return `${this.profile.firstName} ${this.profile.lastName}`
        }
    }
}
</script>

<style scoped>
.card {
    margin: 1% 5%;
}
</style>