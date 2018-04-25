<template>
    <div class="philosophers">
        <h1>Philosophers list</h1>
        <div class="lead mx-auto clearfix" style="width: 800px;height: 300px;">
            <philosopher v-for="philosopher in philosophers" :key="philosopher.id" :philosopher="philosopher"/>
        </div>
    </div>
</template>

<script>
    import Philosopher from '@/components/Philosopher.vue'
    import axios from 'axios'

    export default {
        name: 'PhilosophersPage',
        components: {
            Philosopher
        },
        data: function() {
            return {
                philosophers: []
            }
        },
        mounted() {
            axios.get('http://localhost:9090/')
                .then(response => {
                    this.philosophers = response.data
                })
        }
    }
</script>