<template lang="pug">
.hero-footer.py-3.clearfix.border.border-primary
    .w-50.bg-warning.text-dark.hero-button.float-left.border.border-primary.d-flex.justify-content-center.align-items-center
      button.btn.d-flex.align-items-center(
          @click="buttonLeftEvent()"
      )
       a.text-dark
        h5.mb-0.text-dark {{textContent[0]}}
       i.fas.fa-map-marked-alt.fa-2x.ml-3.text-dark
    .w-50.bg-dark-deep.text-dark.hero-button.float-right.border.border-primary.d-flex.justify-content-center.align-items-center
      button.btn.d-flex.align-items-center
       a(:href="'#'+ textContent[1]").text-primary
        h5.mb-0.text-primary {{textContent[1]}}
       i.fas.fa-sort-amount-down.fa-2x.ml-3.text-primary
   
</template>

<script>
import gsap from "gsap"

export default {
    props:{
        textContent: Array
    },
    mounted(){
        gsap.from('.hero-footer', {
          y: -50,
          opacity: 0,
          delay: 3,
          duration: 1.5
        })
    },
    methods: {
        buttonLeftEvent(){
            this.$emit("buttonLeftClick")
        }
    }
}
</script>

<style lang="sass" scoped>
.hero-footer
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%)
  background-color: rgba(0, 0, 0, 0.3) !important
  .hero-button
    transition: all 0.5s
    i, h5
      transition: all 0.5s
    &:hover
      background-color: rgba(map-get($theme-colors, "primary"), 0.4) !important
      i, h5
        color: map-get($theme-colors, "primary") !important
</style>