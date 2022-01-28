<template lang="pug">
div.h-100.overflow-auto.container-fluid
    .row
        .col-12.mt-5
            h1.text-coral.text-center.mb-0.mt-5 Look at my favourite repositories!
    .row#video-player.mt-5
        .col-3.offset-1.bg-dark-deep.p-3.rounded.shadow
            ul.list-unstyled.mb-0.text-coral
                li.mt-3(
                    v-for="(video, index) in videos" :key="'video-item-' + index"
                    @click="setActiveIndex(index)"
                )
                    h5 {{video.id}} | {{video.name}}
        .col-7
            #vimeo-overlay.bg-dark-deep.p-3.rounded.shadow
                .vimeo-slide
                    h2.text-coral.text-center {{getActiveVideo.name}} - {{getActiveVideo.id}}
                    Vimeo( :id="getActiveVideo.id" )
                    .d-flex.align-items-center.mt-3
                        i.fab.fa-node.fa-2x
                        span.ml-3 @vimeo/player
                        i.fab.fa-vimeo.fa-2x.mx-3
                        .border-coral.w-100
                        i.fab.fa-github.fa-2x.ml-3
    //<div style="padding:56.25% 0 0 0;position:relative;">
    //    <iframe src="https://player.vimeo.com/video/650592640?h=2a44adfd08&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Boolflix">
    //    </iframe>
    //</div>
    //
    //<script src="https://player.vimeo.com/api/player.js"></script>
        
</template>

<script>
import axios from "axios"

export default {
    data(){
        return {
            videos : [
                {
                    id : '650592640',
                    name : 'Boolflix'
                },
                {
                    id : '650099059',
                    name : 'Udemy'
                }
            ],
            activeIndex : 0,
            vimeoConfig : { 
                'headers':
                {
                    Authorization : `Bearer ${this.vimeoToken}`, 
                    'Content-Type': 'application/json' 
                } 
            }
        }
    },
    methods:{
        setActiveIndex(index){
            this.activeIndex = index
        }
    },
    computed:{
        getActiveVideo(){
            return this.videos[this.activeIndex]
        }
    },
    mounted(){

        
    }
}
</script>

<style lang="sass" scoped>
#video-player
    li
        border-bottom: solid 1px $coral

</style>