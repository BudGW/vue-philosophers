<template>
    <philosopher :philosopher="philosopher">
        <quote v-for="(quote, index) in philosopher.quotes" :quote="quote" :key="index"/>
    </philosopher>
</template>

<script>
    import Philosopher from "../components/Philosopher";
    import Quote from "../components/Quote";
    import axios from 'axios'

    export default {
        components: {
            Quote,
            Philosopher
        },
        name: "philosopher-info",
        props: {
            philosopherId: {
                type: Number,
                default: null
            },
        },
        data: function () {
            return {
                philosopher: {}
            }
        },
        mounted() {
            axios.get('http://localhost:9090/' + this.philosopherId).then(response => {
                this.philosopher = response.data
            })
        }
    }
</script>

<style scoped>

</style>