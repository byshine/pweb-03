<template lang="pug">

    #masonry
        .grid
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-2.jpg").grid-item
            img(src="../images/7-3.jpg").grid-item
            img(src="../images/7-4.jpg").grid-item
            img(src="../images/7-5.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item
            img(src="../images/7-6.jpg").grid-item
            img(src="../images/7-1.jpg").grid-item








</template>



<script>
import Masonry from 'masonry-layout';


export default {
    mounted() {
        window.addEventListener('load', function() {
            var elem = document.querySelector('.grid');
            var msnry = new Masonry( elem, {
            // options
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                isFitWidth: true
            });
        })

    }
}


</script>

<style lang="sass" scoped>

        .grid 
            margin: 0 auto

    
        @media (max-width: 433px)
            .grid
                padding: 0 1em
            .grid-item
                max-width: 280px

        @media (max-width: 600px)
            .grid
                padding: 0 1em
            .grid-item
                max-width: 200px

        @media (max-width: 800px)
            .grid
                padding: 0 1em
            .grid-item
                max-width: 250px

</style>
