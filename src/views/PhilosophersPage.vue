<template>
    <div class="philosophers">
        <h1>Philosophers list</h1>
        <div class="lead mx-auto clearfix" style="width: 800px;height: 300px;">
            <philosopher v-for="philosopher in philosophers" :key="philosopher.name" :philosopher="philosopher"/>
        </div>
    </div>
</template>

<script>
    import Philosopher from '@/components/Philosopher.vue'

    export default {
        name: 'PhilosophersPage',
        components: {
            Philosopher
        },
        data: function() {
            return {
                philosophers: [{
                    img: require('../assets/moss.jpg'),
                    name: 'Maurice Moss'
                },{
                    img: require('../assets/sheldon.jpg'),
                    name: 'Sheldon Cooper'
                },{
                    img: require('../assets/goldblum.jpg'),
                    name: 'Jeff Goldblum'
                }]
            }
        }
    }
</script>