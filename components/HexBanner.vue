<template lang="pug">
.hex-container
    h4.text-dark-deep.mb-0 {{textContent}}
</template>

<script>
export default {
    props: {
        textContent : String
    }
}
</script>

<style lang="sass" scoped>
.hex-container
    display: inline-block
    width: fit-content
    padding: 0.5rem 4rem 0.5rem 0.5rem
    clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%)
    overflow: hidden
</style>