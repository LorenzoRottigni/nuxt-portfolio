<template lang="pug">
/////////////////////////////////////////
//container scrollable max-height: 95vh//
/////////////////////////////////////////
.container-fluid.overflow-auto
  .row 
    .col-8.offset-2
      .container-fluid
        .row
          .col-6.px-0
            .h-100.d-flex.align-items-center.justify-content-center
              #hero-polygon-left.hero-polygon.py-3.px-0.pl-5.d-flex.align-items-center.justify-content-end.border-top.border-bottom.border-primary
                .image-container
                  img(
                    src="/profile_image_gray.png",
                    alt="Lorenzo Rottigni Image"
                  )
          .col-6.px-0
            .h-100.d-flex.align-items-center.justify-content-center
              #hero-right.hero-polygon.p-0.d-flex.align-items-start.justify-content-center.border-top.border-primary.border-bottom.border-left.border-right
                .logo-svg.p-2
                        LogoLR
                //h1.text-white.text-justified Lorenzo Rottigni
                .w-100.h-100.d-flex.flex-column.justify-content-start
                  h1.text-center.border-bottom.border-primary.py-3.mb-0 LORENZO ROTTIGNI
                  .bg-cpu.bg-dark-deep.flex-grow-1.d-flex.flex-column.align-items-center.justify-content-around
                    .d-flex.align-items-center
                      h5.text-primary.mx-2 I'm a 
                      h3.text-primary.mx-2.text-center.py-3.border-left.border-right.border-primary.px-3.shadow-lg.rounded FULL-STACK WEB DEVELOPER
                    p.text-white 
                      | Welcome user!
                      | This is my personal web portfolio
                  .hero-footer.bg-dark-deep.border-top.border-primary
                    .w-75.d-flex.py-3.justify-content-around
                      a.text-decoration-none(href="#Terminal")
                        button.btn.btn-primary Play with my Terminal  
                      a.text-decoration-none(href="#More")
                        button.btn.btn-outline-primary Read about me 
  section#Terminal.row.align-items-center 
    .col-4.offset-2
      .bg-primary
        h4.text-center.text-dark Use my portolio via CLI!
    .col-4
      Terminal.bg-dark.text-primary.border-primary(welcomeMessage="Welcome to my portfolio", prompt="portfolio.rottigni.tech@guest $")

  section#More.row.align-items-center
    #hero-about.col-8.offset-2.text-white
      p Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum possimus repudiandae repellat recusandae. Obcaecati vitae eveniet dolore est magnam non accusantium nisi magni, minima expedita possimus quo nam repellat.Nihil, aut aperiam sit quasi nostrum quis omnis odit ipsum quisquam, amet delectus blanditiis fugit corporis totam iste quod nulla assumenda quibusdam. Reiciendis, officia a. Numquam sequi quod illum voluptatem?Libero provident facere, optio eveniet cum unde dicta molestiae itaque qui quis dignissimos repellat assumenda porro cupiditate soluta doloribus voluptatem ex corrupti perspiciatis odit aut pariatur. Facere alias doloribus est.Magni ipsam iure, natus reiciendis delectus praesentium expedita asperiores, iusto tempora doloribus possimus eum recusandae cumque saepe! Dolores assumenda facilis architecto illo recusandae placeat vel sequi, facere dolor, non libero.Vero quasi doloribus minima debitis rem enim necessitatibus harum eaque commodi, consequatur natus deleniti, fuga porro alias vel nostrum qui consectetur possimus earum. Consequuntur incidunt consectetur reprehenderit, rem beatae quam!Fugiat amet animi numquam possimus adipisci eum! Necessitatibus veritatis magni dolore veniam consequuntur sed sunt in cupiditate alias culpa ex ipsam placeat, natus distinctio voluptatum saepe amet recusandae eligendi minus.Delectus, dolore omnis. At vel amet ab illo maiores repellat sapiente nulla adipisci ut numquam dolor praesentium aliquam, aliquid, facilis enim. Veniam, eos non alias veritatis deleniti recusandae soluta fugit?Ad saepe asperiores natus nisi atque, voluptatibus laboriosam, temporibus dicta delectus autem quisquam harum aliquam non, veritatis quibusdam! Perferendis illum dolorem quod iusto optio dolorum magni odio sit inventore tenetur?
  
    /////////////////////////////
    //height: 95vh main section//
    /////////////////////////////
    //section.row.align-items-center.overflow-hidden
      #col-img.col-10.offset-1.col-sm-6.offset-sm-3.col-md-6.offset-md-3.col-lg-3.offset-lg-2
        .image-container.shadow-lg
          img.w-100(src="/profile_image_gray.jpg", alt="Lorenzo Rottigni Image")
      #col-text.col-12.col-lg-5
        transition(name="opacity-0")
          #hero-text.d-flex.flex-column.justify-content-center.align-items-lg-start.text-nowrap.mt-3.p-3.pb-5.mt-lg-0(
            v-if="!animationStatus"
          )
            div
              TextAnimation(
                textContent="Lorenzo Rottigni",
              )
            //Modal
            h4.text-white.mt-3.mb-0 From development to deployment
            .d-flex.flex-column.mt-5
              HexBanner.bg-primary(
                textContent="Full Stack Web Developer"
              )
              HexBanner.bg-warning(
                textContent="Programmer"
              )
              HexBanner.bg-dark-deep(
                textContent="System engineer"
              )
        PageScroller(
          :textContent="['About Navigation', 'More']"
        )
    //////////////////////////////
    //height: 95vh about section//
    //////////////////////////////
    
</template>

<script>
//import Fieldset from 'primevue/fieldset';
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice';

import { gsap } from "gsap"
import AimText from '../components/AimText.vue';

export default {
    name: "IndexPage",
    components: { Terminal, AimText },
    data() {
        return {
            animationStatus: true
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
                    gsap.from("#col-img", {
                        x: 200,
                        duration: 1
                    }).then(() => {
                        this.animationStatus = false;
                    });
                    gsap.from("#col-text", {
                        x: -200,
                        ease: "circ",
                        duration: 1.5,
                        delay: 1
                    });
                }
                else {
                    this.animationStatus = false;
                    gsap.from("#col-text", {
                        y: -200,
                        ease: "circ",
                        duration: 1.5,
                        delay: 1
                    });
                }
            }
        }
    },
    mounted() {
        this.runWelcomeAnimation();
    }
}
</script>

<style lang="sass" scoped>
@keyframes openup 
  0%
    height: 0
  100%
    height: 55vh

.container-fluid 
  max-height: 95vh
  scroll-behavior: smooth
  .row
    height: 95vh
    margin-top: 2.5vh
    transition: 1.5s
.image-container
  width: 100%
  
  img
    width: 100%
.hero-polygon
  height: 55vh
#polygon-right
  clip-path: polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%, 0% 50%)
  width: 100%
#hero-polygon-left
  clip-path: polygon(25% 0%, 100% 0, 100% 50%, 100% 100%, 25% 100%, 0% 50%)
  width: 100%
  background-color: rgba(0,0,0,0.2)
  animation: openup 2.5s 1
#hero-right
  width: 100%
  position: relative
  .logo-svg
    position: absolute
    bottom: 0
    right: 0
    transform: translate(35%,20%)
    background-color: $dark-deep
    border: double 7px $coral
    border-radius: 50%
.text-justified
  text-align: justify
  text-justify: inter-word !important
h1 
  background-color: rgba(map-get($theme-colors, "primary"), 0.5)
  color: $dark-deep
  font-weight: bolder !important
//.bg-cpu
//  background-image: url('/cpu.svg')
//  background-repeat: no-repeat
//  background-size: 40%
//  background-position: right
</style>