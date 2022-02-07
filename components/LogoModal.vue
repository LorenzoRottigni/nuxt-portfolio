<template lang="pug">
.modal.d-flex.align-items-center.justify-content-center.text-white HelloWorld
</template>

<style lang="sass">
.modal
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(map-get($theme-colors, "primary"), 0.7)
    z-index: 1000
</style>