<template lang="pug">
/////////////////////////////////////////
//container scrollable max-height: 95vh//
/////////////////////////////////////////
.container-fluid.overflow-auto
  .row 
    .col-10.offset-1.col-xl-8.offset-xl-2
      .container-fluid
        #welcome-row.row.align-items-center
          /////////////////////////
          // COL LEFT            //
          /////////////////////////
          .col-12.col-sm-8.offset-sm-2.col-lg-6.offset-lg-0.px-0
            //.h-100.d-flex.align-items-center.justify-content-center
            // HERO IMAGE
            #hero-polygon-image.mx-auto
              .hero-image-overlay(
               :class="(hasBlur) ? 'img-blur' : ''"
            )
          /////////////////////////
          // COL RIGHT           //
          /////////////////////////
          .col-12.col-lg-6.px-0
            //.h-100.d-flex.align-items-center.justify-content-center
            #hero-mobile-content.d-flex.flex-column.align-items-center.d-lg-none
              //h1.text-primary.text-center LORENZO ROTTIGNI
              TextAnimation(
                textContent="LORENZO ROTTIGNI"
              )
              h3.text-white.text-center.text-nowrap Full-Stack Web Developer
            #hero-content.border-primary.border-bottom.p-0.align-items-start.justify-content-center.d-none.d-lg-flex
                .logo-svg.p-2
                  LogoLR
                //h1.text-white.text-justified Lorenzo Rottigni
                .w-100.h-100.d-flex.flex-column.justify-content-start.justify-content-lg-around
                  h1.text-center.border-bottom.border-primary.py-3.mb-0 LORENZO ROTTIGNI
                  .bg-dark-deep.flex-grow-1.d-flex.flex-column.align-items-start.justify-content-around.p-3.border-left.border-right.border-primary
                    HexBanner.bg-primary.text-dark.ml-n3.mt-2.shadow-lg(
                        textContent="FULL-STACK WEB DEVELOPER"
                    )

                    .text-container.text-white.py-3.d-none.d-lg-block
                      p.mb-1 Welcome to my web portfolio!
                      p.mb-1 You can <i>play</i> at my portfolio using the top, left, right, and bottom pivotal buttons.
                      p.mb-1 The radar on the left of your screen will track your position around the map, you can look at routes nearby and reach them by clicking its icon
                    nuxt-link(to="/github").text-warning.w-100.d-flex.justify-content-end.justify-content-lg-start.my-3.my-md-0 My repositories
                  .hero-footer.bg-dark-deep.border.border-primary.d-flex.justify-content-end.justify-content-lg-start
                    .w-75.d-flex.py-3.justify-content-end.justify-content-lg-around
                      a.px-3.text-decoration-none.d-none.d-md-block(href="#Terminal")
                        button.btn.btn-primary Terminal
                      span.d-none.d-lg-block
                        a.text-decoration-none(href="#More")
                          button.btn.btn-outline-primary About
  section#Terminal.row.align-items-center 
    .col-4.offset-2
      .bg-primary
        h4.text-center.text-dark Use my portolio via CLI!
        h6.text-dark Routing
        p push route | route-name |
    .col-4
      PrimeTerminal

  section#More.row.align-items-center
    #hero-about.col-8.offset-2.text-white
      p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum possimus repudiandae repellat recusandae. Obcaecati vitae eveniet dolore est magnam non accusantium nisi magni, minima expedita possimus quo nam repellat.Nihil, aut aperiam sit quasi nostrum quis omnis odit ipsum quisquam, amet delectus blanditiis fugit corporis totam iste quod nulla assumenda quibusdam. Reiciendis, officia a. Numquam sequi quod illum voluptatem?Libero provident facere, optio eveniet cum unde dicta molestiae itaque qui quis dignissimos repellat assumenda porro cupiditate soluta doloribus voluptatem ex corrupti perspiciatis odit aut pariatur. Facere alias doloribus est.Magni ipsam iure, natus reiciendis delectus praesentium expedita asperiores, iusto tempora doloribus possimus eum recusandae cumque saepe! Dolores assumenda facilis architecto illo recusandae placeat vel sequi, facere dolor, non libero.Vero quasi doloribus minima debitis rem enim necessitatibus harum eaque commodi, consequatur natus deleniti, fuga porro alias vel nostrum qui consectetur possimus earum. Consequuntur incidunt consectetur reprehenderit, rem beatae quam!Fugiat amet animi numquam possimus adipisci eum! Necessitatibus veritatis magni dolore veniam consequuntur sed sunt in cupiditate alias culpa ex ipsam placeat, natus distinctio voluptatum saepe amet recusandae eligendi minus.Delectus, dolore omnis. At vel amet ab illo maiores repellat sapiente nulla adipisci ut numquam dolor praesentium aliquam, aliquid, facilis enim. Veniam, eos non alias veritatis deleniti recusandae soluta fugit?Ad saepe asperiores natus nisi atque, voluptatibus laboriosam, temporibus dicta delectus autem quisquam harum aliquam non, veritatis quibusdam! Perferendis illum dolorem quod iusto optio dolorum magni odio sit inventore tenetur?

    
</template>

<script>
//import Fieldset from 'primevue/fieldset';


import { gsap } from "gsap"
import AimText from '../components/AimText.vue';
import HexBanner from "../components/HexBanner.vue";

export default {
    name: "IndexPage",
    data() {
        return {
            animationStatus: true,
            hasBlur: true
        };
    },
    computed: {
        getVuexName() {
            return this.$store.state.name;
        }
    },
    methods: {
        runWelcomeAnimation() {
            if (process.browser) {
                this.animationStatus = true;
                const clientWidth = window.innerWidth;
                const MD_BREAKPOINT = this.$store.state.breakpoints.md;
                if (clientWidth > MD_BREAKPOINT) {
                    // DESKTOP ANIMATION
                    const gsapTimeline = gsap.timeline()

                    gsapTimeline.from('#hero-content', {
                      x: -200,
                      opacity: 0,
                      duration: 1,
                      delay: 1
                    })
                    .from('#hero-polygon-image', {
                      x: 200,
                      opacity: 0,
                      duration: 1,
                      ease: "power2"
                      //delay: 2
                    })
                    .from('#hero-polygon-image', {
                      //height: '40vh',
                      duration: 1.5,
                      backgroundColor: 'rgba(0,0,0, 0.5)',
                      
                      //css: { 'filter': 'grayscale(0%)'}
                    })
                    .then(()=>{
                      this.hasBlur = !this.hasBlur
                    })
                }
                else {
                   // MOBILE ANIMATION

                }
            }
        }
    },
    mounted() {
        this.runWelcomeAnimation();
        const welcomeRow = document.getElementById('welcome-row')
        welcomeRow.scrollIntoView()
        console.log('to 0')
    },
    components: { HexBanner }
}
</script>

<style lang="sass" scoped>


.container-fluid 
  max-height: 95vh
  // anchor tag scrolling
  scroll-behavior: smooth
  
  .row
    //avoid controller top bottom
    height: 75vh
    margin-bottom: 20vh
    margin-top: 5vh
    //put in center of 100vh screen
    //margin-top: 12.5vh

    transition: 1.5s


//before image is loaded
.img-blur
  filter: blur(5px) 

// POLYGON HERO IMAGE
#hero-polygon-image
  background-color: rgba(0,0,0,0.2)
  height: 50vh
  width: auto
  position: relative
  clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)
  .hero-image-overlay
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    transition: all 0.5s
    background-image: url('~static/profile_image.png')
    background-size: cover
    background-repeat: no-repeat
    background-position: center


// HERO TEXT CONTENT
#hero-content
  //height: 55vh
  height: 55vh
  width: 100%
  position: relative
  
  //hero name
  h1 
    background-color: rgba(map-get($theme-colors, "primary"), 0.5)
    color: $dark-deep
    font-weight: bolder !important
    font-size: 34px
  .hero-footer
    border-bottom-right-radius: 30px
  //rolling logo LR design
  .logo-svg
    position: absolute
    bottom: 0
    right: 0
    transform: translate(35%,20%)
    background-color: $dark-deep
    border: double 7px $coral
    border-radius: 50%

  
@media screen and (max-width: 992px)
  #hero-content .logo-svg
    right: 100%
    transform: translate(50%, 30%)

@media screen and (min-width: 992px) 
  // LG BREAKPOINT ROW
  .container-fluid
    .row
      height: 95vh
      margin-top: 2.5vh
      margin-bottom: 0

  // LG BREAKPOINT HERO IMAGE 
  #hero-polygon-image
    height: 55vh
    clip-path: polygon(25% 0%, 100% 0, 100% 50%, 100% 100%, 25% 100%, 0% 50%)
    width: 100%
    .hero-image-overlay
      position: absolute
      background-position: right

  // HERO TEXT CONTENT
  ////S
  #hero-content
    

</style>


