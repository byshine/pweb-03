<template lang="pug">

    #menu
        .menu-container
            ul.menu-list
                li.menu-list-item Home
                li.menu-list-item.vertical-divider
                li.menu-list-item Work
                li.menu-list-item.vertical-divider
                li.menu-list-item Contact
            hr.horizontal-divider


</template>



<script>


export default {



}


</script>

<style lang="sass" scoped>
 
    .menu-container 
        margin-top: 2em
    .menu-list-item
        display: inline-block
        font-weight: 300
        font-size: 0.8em
        text-transform: lowercase
        letter-spacing: 2px
        cursor: pointer

    .vertical-divider::before 
        
        content: ''
        padding: 1px
        margin: 0 1em
        border-right: 1px solid rgba(0,0,0,0.2)

    .horizontal-divider
        padding: 0
        margin: 0.7em 0
        height: 1px
        border: 0
        border-top: 1px solid rgba(0,0,0,0.2)

</style>
