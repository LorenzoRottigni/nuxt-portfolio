<template lang="pug">
.aim-text
    h1.text-center.text-white Full-Stack Web Developer
    img(src="/Aim.svg", width="80px", height="80px")
</template>
    
<script>
export default {
    
}
</script>

<style lang="sass" scoped>
$size : 80px
@keyframes spin 
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

.aim-text
    height: 80px
    position: relative
    img
        position: absolute
        top: 0
        left: 50%
        transform: translateX(-50%)
        z-index: -1
        animation: spin 7s infinite linear
    h1 
        line-height: 80px
        z-index: 10
        

</style>