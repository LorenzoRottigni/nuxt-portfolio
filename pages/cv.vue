<template lang="pug">
.container-fluid.h-100.d-flex.flex-column.align-items-center.justify-content-center
    embed#cv(src="/pdf/LORENZO_ROTTIGNI_CV.pdf#toolbar=0")
    .d-flex.mt-5
        HexButton.mx-2(
            textContent="DOWNLOAD"
            color="coral"
            size="md"
        )
        HexButton.mx-2(
            textContent="SHARE"
            color="yellow"
            size="md"
        )

</template>

<script>

</script>

<style lang="sass" scoped>
#cv
    height: 70vh
    width: 60%
    background-color: $coral
    

</style>