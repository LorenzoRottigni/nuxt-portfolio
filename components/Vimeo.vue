<template>
    <div :id="divName">
        
    </div>
</template>

<script>
import Player from "vimeo/player"

export default {
    name : 'Vimeo',
    data(){
        return {
            divName : 'divFrame'
        }
    },
    props : {
        id : {
            type: String
        }
    },
    created(){
        this.divName += (`_${this.id}`)
    },
    mounted(){
        const options = {
            id: this.id,
            responsive: true
        }
        const player = new Player(this.divName, options)
    }
}
</script>