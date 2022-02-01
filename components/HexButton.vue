<template lang="pug">
button {{textContent}}
</template>

<script>
export default {
    props:{
        textContent: String
    }
}
</script>

<style lang="sass" scoped>
button
    display: inline-block
    position: relative
    color: #fff
    font-weight: 500
    font-size: 14px
    text-decoration: none
    text-transform: uppercase
    padding: 1rem 5rem
    text-align: center
    border: none
    clip-path: polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%)
    background-color: $coral
    //background-image: radial-gradient(200% 70% at center 20%, rgba(48,44,45,1) -30%, rgba(50,46,47,1) 49%, rgba(22,18,19,1) 50%, rgba(22,18,19,1) 150%)
    background-repeat: no-repeat
    transition: background-position-y ease-in-out 250ms
    &:hover 
        background-position-y: -50px

    &:active 
        transform: scale(0.99)  
</style>