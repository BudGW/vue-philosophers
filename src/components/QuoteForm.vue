<template>
    <div>
        <input v-model="quote" type="text"/>
        <button @click="saveQuote">Add Quote</button>
    </div>
</template>

<script>
    export default {
        name: "QuoteForm",
        data: function () {
            return {
                quote: ''
            }
        },
        methods: {
            saveQuote() {
                this.$emit('new-quote', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>

</style>