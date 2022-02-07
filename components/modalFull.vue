<template lang="pug">
transition(name="opacity-0")
    .modalFull.bg-primary(
        v-if="modalStatus"
    ) Hello World
</template>
<script>
export default {
    data(){
        return {
            modalStatus: false
        }
    },
    mounted(){
        this.status = true
    }
}
</script>
<style lang="sass">
.modalFull
    background-color: red
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    z-index: 5
</style>