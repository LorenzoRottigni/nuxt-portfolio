<template lang="pug">
.h-100.d-flex.align-items-center
  .container-fluid
    .row.align-items-center
      #col-img.col-10.offset-1.col-sm-6.offset-sm-3.col-md-6.offset-md-3.col-lg-3.offset-lg-2
        .image-container.shadow-lg
          img.w-100(src="/profile_image_gray.jpg", alt="Lorenzo Rottigni Image")
      #col-text.col-12.col-lg-5
        //h1.text-coral.text-center.text-lg-start.text-3x  Lorenzo Rottigni 
        transition(name="opacity-0")
          .d-flex.flex-column.justify-content-center.align-items-lg-start.text-nowrap.mt-3.mt-lg-0(
            v-if="!animationStatus"
          )
            TextAnimation(
              textContent="Lorenzo Rottigni",
            )
            h2.text-white.text-center.text-lg-start.text-2x.mb-3 Full Stack Web Developer
            p.text-white.text-start.d-none.d-xl-block.text-wrap
              | Welcome to my portfolio!
            p.text-white.text-start.d-none.d-xl-block.text-wrap.mb-0
              | I am a programmer and  I started my path in the IT approaching it as a game, a quest based videogame. 
            p.text-white.text-start.d-none.d-xl-block.text-wrap.mb-0
              | Whenever a project works well or whenever a new skill is learnt, a new task gets completed: the tasks I complete, together, are composing my game profile or better, my developer profile. 
            p.text-white.text-start.d-none.d-xl-block.text-wrap.mb-0
              | I always loved that kind of videogame, the more you play and the more you improve yourself, your profile aspect and the people you play with. 
            p.text-white.text-start.d-none.d-xl-block.text-wrap
              | This is just a beautiful free-to-play game that never ends, day by day. 
            p.text-yellow.text-start.d-none.d-lg-block.text-wrap
              | My portfolio has an RPG-like navigation: you can look at rooms of my game-portfolio using the map on the left of your screen
            a.text-coral.d-none.d-lg-block(href="#") About navigation
</template>

<script>
import { gsap } from "gsap"

export default {
    name: "IndexPage",
    data(){
      return {
        animationStatus : true
      }
    },
    methods: {
      runWelcomeAnimation(){
        if(process.browser){
          this.animationStatus = true

          const clientWidth = window.innerWidth

          if(clientWidth > 768){
            gsap.from('#col-img', {
                x : 200,
                duration : 1
              }).then(()=>{
              this.animationStatus = false
            })

            gsap.from('#col-text', {
              x : -200, ease: "circ",
              duration : 1.5,
              delay : 1
              }
            )
          }else{
            this.animationStatus = false
            gsap.from('#col-text', {
              y : -200, ease: "circ",
              duration : 1.5,
              delay : 1
              }
            )
          }
        }
      }
    },
    mounted(){
      this.runWelcomeAnimation()
    }
}
</script>

<style lang="sass" scoped>
.image-container,
.image-container img
  border-top-left-radius: 4em
  border-top-right-radius: 4em
p
  white-space: pre-wrap
#col-img
  z-index: 99 
</style>