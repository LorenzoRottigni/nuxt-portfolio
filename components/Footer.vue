<template lang="pug">
    footer
        .container-fluid
            .row
                .col-4.bg-coral.footer-left.p-2.pt-3.shadow-lg
                    ul.mb-0.list-unstyled.d-flex.justify-content-around.align-items-center.d-md-none
                        li
                            i.fab.fa-linkedin.fa-2x
                        li
                            i.fab.fa-instagram.fa-2x
                    h5.mb-0.text-center.d-none.d-md-block Designed with
                        span.text-white.mx-1 &hearts;
                        | by Lorenzo Rottigni
                .col-4.offset-4.bg-coral.footer-right.p-2.pt-3.text-right.shadow-lg
                    ul.mb-0.list-unstyled.d-flex.justify-content-around.align-items-center
                        li.d-none.d-md-block
                            i.fab.fa-linkedin.fa-2x
                        li.d-none.d-md-block
                            i.fab.fa-instagram.fa-2x
                        li
                            i.fab.fa-facebook.fa-2x
                        li
                            i.fab.fa-github.fa-2x
                    
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
footer
    position: absolute
    bottom: 0
    left: 0
    right: 0
    .footer-left
        border-top-right-radius: 30px
    .footer-right
        border-top-left-radius: 30px
    //background-color: $coral
</style>