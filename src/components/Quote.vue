<template>
    <p>{{quote}}</p>
</template>

<script>
    export default {
        name: "quote",
        props: {
            quote: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style scoped>

</style>