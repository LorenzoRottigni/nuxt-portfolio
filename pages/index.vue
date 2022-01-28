<template lang="pug">
  .h-100.d-flex.align-items-center
    .container-fluid
      .row
        .col-10.offset-1.col-sm-6.offset-sm-3.col-md-6.offset-md-3.col-lg-4.offset-lg-4
          .image-container.shadow-lg.mt-5
            img.w-100(src="/profile_image_gray.jpg", alt="Lorenzo Rottigni Image")
        .col-12
          h1.text-coral.text-center.text-3x.mt-3 Lorenzo Rottigni 
          h2.text-white.text-center.text-2x Full Stack Web Developer
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="sass" scoped>
.image-container,
.image-container img
  border-top-left-radius: 4em
  border-top-right-radius: 4em
</style>