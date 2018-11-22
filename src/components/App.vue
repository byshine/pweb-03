<template lang="pug">

    #app
        .main-app-container
            h1.site-title your name
            p.site-subtitle i mean.. what if?
            Menu
            Masonry


</template>



<script>
import Menu from './Menu.vue';
import Masonry from './Masonry.vue'

export default {
    components: {
        Menu, Masonry
    }
}


</script>

<style lang="sass" scoped>

    $siteWidth: 1200px

    .main-app-container
        padding-top: 2em
        max-width: $siteWidth
        margin: 0 auto
        text-align: center

    .site-title
        font-size: 4em
        letter-spacing: 1px

    .site-subtitle
        font-weight: 300
        font-size: 0.8em


</style>
