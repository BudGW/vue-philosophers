<template>
    <div style="height:200px;width:200px" class="float-left m-3">
        <img :src="base64src" class="img-thumbnail img-fluid"/><p>{{philosopher.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "philosopher",
        props: {
            philosopher: {
                type: Object,
                default: {}
            }
        },
        computed: {
            base64src() {
                return this.philosopher.img ? 'data:image/png;base64,' + this.philosopher.img : '';
            }
        },
    }
</script>

<style scoped>

</style>