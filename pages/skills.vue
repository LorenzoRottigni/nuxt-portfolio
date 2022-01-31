<template lang="pug">
.h-100.container-fluid.d-flex.align-items-center
    .row 
        .col-10.offset-1 
            h1.text-center.text-coral.mb-4 SKILLS
        .col-8.offset-2 
            .skill-content.p-3.mt-3.rounded.shadow-lg
                h2.text-coral HTML 
                p.text-white Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam libero iusto dolorum tenetur dignissimos, nobis recusandae minima reiciendis dicta deleniti iste labore voluptatibus eligendi corporis unde totam reprehenderit culpa laboriosam.Excepturi temporibus quisquam architecto accusantium, doloribus in blanditiis qui eligendi dolorum quas voluptate corrupti, quo, iste harum possimus. Voluptatum vel incidunt in rerum nobis, cupiditate provident perferendis a asperiores deleniti?Aut incidunt autem enim nihil in id sed fuga aspernatur dolor obcaecati consectetur, cum quidem deserunt deleniti. Maxime unde alias, doloremque nostrum illo quas? Numquam quae eveniet corporis quaerat neque!Possimus blanditiis voluptatem temporibus, quo molestias labore ipsa dignissimos veniam excepturi totam ullam. Consequatur, voluptates expedita officiis iste quas quos esse! At eligendi adipisci eius! Nobis, asperiores doloribus? Odit, perferendis?Nemo reiciendis ipsa, fugit beatae nesciunt facilis vero repudiandae maiores officiis facere voluptas aliquam incidunt consequatur temporibus. Officia dolorum quo, cumque facere placeat ipsa dolores, sequi excepturi saepe blanditiis reprehenderit!
            nav.skill-navigator 
                //nav(aria-label='breadcrumb')
                ol.breadcrumb.mb-0
                    li.breadcrumb-item.active
                        a(href='#') HTML
                    li.breadcrumb-item
                        a(href='#') CSS
                    li.breadcrumb-item
                        a(href='#') JavaScript

</template>

<script>

</script>

<style lang="sass" scoped>
.skill-content
    background-color: rgba(0,0,0,0.2)
.skill-navigator
    border-top: solid 1px $coral
    border-bottom: solid 1px $coral
    background-color: $dark-deep
ol
    background: none
</style>
