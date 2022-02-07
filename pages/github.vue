<template lang="pug">
.container-fluid.h-100.d-flex.flex-column.justify-content-center
    .row 
        .col-8.offset-2
            TextAnimation#header-1.text-coral.text-center(
                textContent="This is my GitHub"
            ) 
        .col-8.offset-2 
            .repos-container.mt-5.bg-dark-deep.p-3.shadow-lg
                Repo.mb-2(
                    v-for="(repo, index) in repoList",
                    :key="'repo-'+index",
                    :repo="repo"
                )
        .col-8.offset-2 
            nav.d-flex.justify-content-around.align-items-center.bg-yellow.p-3.shadow-lg
                .d-flex.align-items-center
                    img(src="/axiosjs-logo.png" height="25px")
                    i.fab.fa-github.fa-2x.mx-3
                .border-dark-deep.w-100
                .d-flex.ml-3
                    .bg-coral.p-2.px-3.mx-1.rounded.shadow(
                        v-for="index in getPages",
                        :key="'page-'+index",
                        @click="setPagination(index*3)"
                    )
                        h6.mb-0 {{index}}
                
</template>

<script>
import { mapGetters , mapActions} from "vuex"

export default {
    data(){
        return {

        }
    },
    methods: {
        // bind setPagination(int)
        ...mapActions(['setPagination']),
    },
    computed: {
        ...mapGetters({
            //bind repoList() computed
            repoList: 'getRepos',
            //bind pagesAvaiable() computed
            pagesAvaiable: 'getPagesAvaiable'
        }),
        getPages(){
            return this.$store.state.pagesAvaiable
        }
    },
    mounted(){
        this.setPagination(0)
    }
}
</script>

<style lang="sass" scoped>
.repos-container
    border: solid 1px $yellow
    border-top-left-radius: 10px
    border-top-right-radius: 10px
nav
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
</style>