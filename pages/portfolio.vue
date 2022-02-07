<template lang="pug">
.container-fluid.h-100.d-flex.flex-column.justify-content-center
    .row 
        .col-8.offset-2.text-center
            transition(name="get-out")
                #slide-1(
                    v-if="isFirst"
                )
                    TextAnimation#slide-1-h1.text-coral.text-center(
                        textContent="portfolio.rottigni.tech"
                    ) 
                    h2#slide-1-h2.text-white.text-center.mt-5 Something about the work behind the scenes
                    h5#slide-1-h5.header-5.text-yellow.text-center.mt-5 Everything in here works with javascript
                    img#slide-1-js-logo.mx-auto.d-block.my-5(src="/js-logo-alt.png", alt="Lorenzo Rottigni Image")
                    HexButton#hex-button.mt-5(
                        textContent="next"
                        color="yellow"
                        size="lg"
                        @click.native="togglePages()"
                    )
                    //HexButton#hex-button.mt-5(
                        textContent="Next",
                        @click.native="togglePages()"
                        )
        .col-8.offset-2 
            transition(name="get-out")
                .slide-2.p-3(
                    v-if="isSecond"
                )
                    h1.text-coral.text-center Nuxt leads the orchestra
                    h5.text-white.mt-5 The NuxtJS enviroment easily allowed the implementation of:
                    ul.text-white
                        li A Vue Router who serves this awesome layout, pages and components
                        li An ExpressJS server middleware who extends the Nuxt one, serves API calls responses and CRUD operations 
                        li A Vuex Store, contains data fetched from the Express server, serves data to Vue components
                    h5.text-coral.my-3 FEATURES
                    h6.text-white THE RADAR COMPONENT 
                    p.text-white
                        | I created the radar component inspired by the classic RPG game minimap.
                        | I was looking for a funny, interactive and innovative alternative to the usual boring navbar.
                        | The Radar works using Vue 
                        span.text-yellow Props, 
                        span.text-yellow Emits (Vue custom events), 
                        | and 
                        span.text-yellow Wathers 
                        | that directly interact with the Vue router istance

                    

</template>

<script>
import { gsap } from "gsap"
import TextAnimation from "../components/TextAnimation.vue"

export default {
    data(){
        return {
            isFirst : true,
            isSecond : false
            //activeIndex : 1,
            //animationStatus : true
        }
    },
    methods: {
        togglePages(){
            this.isFirst = !this.isFirst
            setTimeout(()=>{
                this.isSecond = !this.isSecond
            }, 2000)
        },
        startAnimationTimeline(){
            const gsapTimeline = gsap.timeline()

            gsapTimeline.from(`#slide-1-h1`, { opacity: 0, y: -300 , duration: 2})
                .from(`#slide-1-h2`, { opacity: 0, y: 300 , duration: 2})
                .from(`#slide-1-h5`, { opacity: 0, duration: 2})
                .from(`#slide-1-js-logo`, { opacity: 0, scaleX:1.8, scaleY:1.8, duration: 2})
                .from(`#hex-button`, { opacity: 0, y: 300 , duration: 2})
                .then(()=>{
                })
            
        }
    },
    mounted() {
        this.startAnimationTimeline()
    },
    components: { TextAnimation }
}
</script>

<style lang="sass" scoped>
img
    width: 150px
.slide-2
    background-color: rgba(0,0,0,0.2)
</style>