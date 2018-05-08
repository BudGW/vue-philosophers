<template>
    <div style="height:200px;width:200px" class="float-left m-3">
        <img :src="philosopher.img" class="img-thumbnail img-fluid"/><p>{{philosopher.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "philosopher",
        props: {
            philosopher: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style scoped>

</style>