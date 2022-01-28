<template lang="pug">
div.h-100.overflow-auto
    h1.text-coral.text-center.mb-0.mt-5 Look at my favourite repositories!
    Vimeo( :id="videoId" )
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
            vimeoToken : 'b5a787271cff8c663346f5d4d63c64f3d1c28ae9:4PNDdy7FThq7csB1F1XNTJMMjRzYuslYa+Mf+VdVTI7QbERYSRght6GQGp9ixeEcZvEfbzs7CgGpEIhvaecpxwUKfwOBmATCsJE+YjA44Oq1iob7eEGDPomVD9AjM5z6',
            videoId : '650592640',
            vimeoConfig : { 
                'headers':
                {
                    Authorization : `Bearer ${this.vimeoToken}`, 
                    'Content-Type': 'application/json' 
                } 
            }
        }
    },
    mounted(){

        
    }
}
</script>