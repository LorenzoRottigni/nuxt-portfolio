<template lang="pug">
#radar.bg-dark-deep.d-flex.flex-wrap
        .radar-box.border-coral(v-for="(route, index) in radarRoutes", :key="'route-'+index")
            .h-100.d-flex.flex-column.align-items-center.justify-content-center(
                v-if="route.name != getActiveVueRouteName"
            )
                span(v-html="route.template") 
                span {{route.name}}
        #user-icon.d-flex.flex-column.align-items-center.justify-content-center(
            :style="{ left: 'calc( 5vw * '+ radarX + ')', top: 'calc( 5vw * '+ radarY + ')'}"
        )
            i.fas.fa-dot-circle
            span {{this.$route.name}}
</template>

<script>
export default {
    data(){
        return {
            ROW_SIZE : 3,
            radarX : undefined,
            radarY : undefined,
            radarRoutes : [
                {
                    id: 0,
                    name: 'contacts',
                    template: '<i class="far fa-id-badge fa-lg"></i>',
                    radarX : 0,
                    radarY : 0
                },
                {
                    id: 1,
                    name: 'thoughts',
                    template: '<i class="fas fa-cloud fa-lg"></i>',
                    radarX : 1,
                    radarY : 0
                },
                {
                    id: 2,
                    name: 'exp',
                    template: '<i class="fas fa-graduation-cap fa-lg"></i>',
                    radarX : 2,
                    radarY : 0
                },
                {
                    id: 3,
                    name: 'cv',
                    template: '<i class="far fa-file-alt fa-lg"></i>',
                    radarX : 0,
                    radarY : 1
                },
                {
                    id: 4,
                    name: 'index',
                    template: '<i class="fas fa-home fa-lg"></i>',
                    radarX : 1,
                    radarY : 1
                },
                {
                    id: 5,
                    name: 'portfolio',
                    template: '<i class="fas fa-code fa-lg"></i>',
                    radarX : 2,
                    radarY : 1
                },
                {
                    id: 6,
                    name: 'github',
                    template: '<i class="fab fa-github fa-lg"></i>',
                    radarX : 0,
                    radarY : 2
                },
                {
                    id: 7,
                    name: 'work',
                    template: '<i class="fab fa-vimeo-v fa-lg"></i>',
                    radarX : 1,
                    radarY : 2
                },
                {
                    id: 8,
                    name: 'blog',
                    template: '<i class="fas fa-th-list fa-lg"></i>',
                    radarX : 2,
                    radarY : 2
                }
            ],
            radarActiveIndex : 4
        }
    },
    methods : {
        /**
         * @description updates user coordinates in the radar 
         */
        movePown(){
            this.radarX = this.radarRoutes[this.radarActiveIndex].radarX
            this.radarY = this.radarRoutes[this.radarActiveIndex].radarY
            console.log('X:'+this.radarX+'Y:'+this.radarY)
        }
    },
    computed : {
        /**
         * @description returns VueRouter active route
         */
        getActiveVueRouteName(){
            return this.$route.name
        },
        getNextActiveRoute(){
            const nextRoute = this.radarRoutes[this.radarActiveIndex + 1]
            console.log('route')
            console.dir(nextRoute)
            if(nextRoute)
                return nextRoute.name
            else
                return undefined
        },
        getPreviousActiveRoute(){
            const nextRoute = this.radarRoutes[this.radarActiveIndex - 1]
            console.log('route')
            console.dir(nextRoute)
            if(nextRoute)
                return nextRoute.name
            else
                return undefined
        },
        getTopActiveRoute(){
            const nextRoute = this.radarRoutes[this.radarActiveIndex - 3]
            console.log('route')
            console.dir(nextRoute)
            if(nextRoute)
                return nextRoute.name
            else
                return undefined
        },
        getBottomActiveRoute(){
            const nextRoute = this.radarRoutes[this.radarActiveIndex + 3]
            console.log('route')
            console.dir(nextRoute)
            if(nextRoute)
                return nextRoute.name
            else
                return undefined
        }
    },
    watch : {
        /**
         * @description at route change, set active ID of local radarRoutes array and move user pown
         */
        getActiveVueRouteName : {
            immediate: true,
            handler(val, old) {
                //find the radarActiveRoute using VueRouter route name as key
                const activeRadarRoute = this.radarRoutes.filter(route => route.name === val)

                //get the radarActiveRouteId
                this.radarActiveIndex = activeRadarRoute[0].id

                //move the user pown in the radar
                this.movePown()

                //this.$emit('radarNext', activeRadarRoute[0].name)
                //this.$emit('radarPrevious', activeRadarRoute[0].name)
                //this.$emit('radarTop', activeRadarRoute[0].name)
                //this.$emit('radarBottom', activeRadarRoute[0].name)

                this.$emit('radarNext', this.getNextActiveRoute)
                this.$emit('radarPrevious', this.getPreviousActiveRoute)
                this.$emit('radarTop', this.getTopActiveRoute)
                this.$emit('radarBottom', this.getBottomActiveRoute)
            }
        }
    },
    created(){
        // move the user pown in the radar
        this.movePown()
    }
}
</script>

<style lang="sass" scoped>
#radar 
    position: absolute
    top: 0
    left: 0
    height: 15vw
    width: calc(15vw + 3px)
    border-bottom: solid 3px $coral
    border-right: solid 3px $coral
    .radar-box
        width: 5vw
        height: 5vw 
    .radar-offset-x
        margin-left: 5vw
    .radar-offset-y
        margin-top: 5vw
    #user-icon
        position: absolute
        width: 5vw
        height: 5vw
        transition: all 1s
</style>