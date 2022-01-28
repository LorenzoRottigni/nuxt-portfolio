<template lang="pug">
div
    .mx-auto(:id="divName")
</template>

<script>
import Player from "@vimeo/player"

export default {
    name : 'Vimeo',
    data(){
        return {
            divName : 'divFrame',
            player : undefined
        }
    },
    props : {
        id : {
            type: String
        }
    },
    methods : {
        setDivName(){
            this.divName = (`divFrame_${this.id}`)
        }
    },
    created(){
        this.setDivName()
    },
    mounted(){
        const options = {
            id: this.id,
            responsive: true
        }
        this.player = new Player(this.divName, options)
    },
    watch: {
        id: {
            // the callback will be called immediately after the start of the observation
            immediate: true, 
            handler (val, oldVal) {

                this.setDivName()

                const options = {
                    id: val,
                    responsive: true
                }

                if(this.player){
                    this.player.destroy().then(() => {
                        this.player = new Player(this.divName, options)
                    }).catch(function(err) {
                        console.log(err)
                    });
                }else{
                    ()=>{
                        this.player = new Player(this.divName, options)
                    }
                }
                
            }
        }
    }
}
</script>