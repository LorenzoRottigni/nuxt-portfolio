<template lang="pug">
h1.text-coral.text-center.text-3x Lorenzo Rottigni 
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
h1 
  background: 50% 100% / 50% 50% no-repeat radial-gradient(ellipse at bottom, $coral, transparent, transparent)
  -webkit-background-clip: text
  background-clip: text
  color: transparent
  font-size: 10vw
  animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms

@keyframes reveal 
  80%
    letter-spacing: 8px
  
  100% 
    background-size: 300% 300%
  
@keyframes glow 
  40% 
    text-shadow: 0 0 14px $coral
    
  


//a 
//  text-decoration: none
//  color: inherit
//  font-size: 24px
//
//
//h1
//  font-weight: 700
//  text-align: center
//  font-size: 40px
//  //font-family: Hack, sans-serif
//  text-transform: uppercase
//  background: linear-gradient(90deg, $dark-deep, $coral, $dark-deep)
//  letter-spacing: 5px
//  -webkit-background-clip: text
//  background-clip: text
//  -webkit-text-fill-color: transparent
//  background-repeat: no-repeat
//  background-size: 80%
//  animation: shine 4s linear infinite
//  position: relative
//
//
//@keyframes shine 
//  0% 
//    background-position-x: -500%
//  75%
//    background-position-x: 0
//  100% 
//    background-position-x: 500%
  


/*  Checkout my other pens on  https://codepen.io/grohit/  */

</style>