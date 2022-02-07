<template lang="pug">
.repo-card.d-flex.flex-column.align-items-start
    h4.text-coral name: {{repo.name}}
    p.text-dark {{repo.description}}
    .repo-card-footer.d-flex 
        span.bg-yellow.p-2 {{repo.language}}
        HexButton.mx-3(
            textContent="view",
            color="light",
            size="xs",
        )
        //:href="repo.url"
</template>

<script>
export default {
    props : {
        repo: Object
    }
}
</script>

<style lang="sass" scoped>

</style>