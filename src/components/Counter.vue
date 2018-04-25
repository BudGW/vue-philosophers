<template>
    <div>
        <button @click="increment(philosopherId)">+1</button>
        <button @click="decrement(philosopherId)">-1</button>
        Votes: {{ displayCount }}
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Counter",
        props: ['philosopherId'],
        computed: {
            ...mapGetters([
                'getCount'
            ]),
            displayCount: function () {
                return this.getCount(this.philosopherId);
            }
        },
        methods: mapActions([
            'increment',
            'decrement',
        ])
    }
</script>