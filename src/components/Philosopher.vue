<template>
    <div>
        <img :src="base64src" class="img-thumbnail img-fluid"/>
        <p><router-link v-if="philosopher.id" :to="{ name: 'philosopher', params: { philosopherId: philosopher.id }  }">{{philosopher.name}}</router-link></p>
        <slot/>
        <counter :philosopherId="philosopher.id"/>
    </div>
</template>

<script>
    import Counter from "@/components/Counter";

    export default {
        name: "philosopher",
        components: {Counter},
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