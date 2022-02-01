<template lang="pug">
.container-fluid.h-100.d-flex.flex-column.justify-content-center
    .row 
        .col-8.offset-2.text-center
            TextAnimation#header-1.text-coral.text-center(
                textContent="portfolio.rottigni.tech"
            ) 
            h2#header-2.text-white.text-center.mt-5 Something about the work behind the scene
            h5#header-5.text-yellow.text-center.mt-5 Everything in here works with javascript
            img#js-logo.mx-auto.d-block.my-5(src="/js-logo-alt.png", alt="Lorenzo Rottigni Image")
            HexButton#hex-button.mt-5(
                textContent="Next"
            )
</template>

<script>
import { gsap } from "gsap"
import TextAnimation from "../components/TextAnimation.vue"

export default {
    mounted() {
        const gsapTimeline = gsap.timeline()

        gsapTimeline.from("#header-1", { opacity: 0, y: -300 , duration: 2})
            .from("#header-2", { opacity: 0, y: 300 , duration: 2})
            .from("#header-5", { opacity: 0, duration: 2})
            .from("#js-logo", { opacity: 0, scaleX:1.8, scaleY:1.8, duration: 2})
            .from("#hex-button", { opacity: 0, y: 300 , duration: 2})
    },  
    components: { TextAnimation }
}
</script>

<style lang="sass" scoped>
img
    width: 150px
</style>