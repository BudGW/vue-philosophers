<template>
    <div>
        <quote-field v-model="quote"></quote-field>
        <button @click="saveQuote">Add Quote</button>
        <button @click="setDefault">Set default quote</button>
    </div>
</template>

<script>
    import axios from 'axios'
    import QuoteField from "./QuoteField";

    export default {
        name: "QuoteForm",
        components: {QuoteField},
        data: function () {
            return {
                quote: ''
            }
        },
        props: {
            philosopherId: {
                type: Number,
                default: null
            },
        },
        methods: {
            saveQuote() {
                axios.post('http://localhost:9090/quote', {
                    philosopherId: this.philosopherId,
                    quote: this.quote
                }).then(() => {
                    this.$emit('new-quote', this.quote);
                    this.quote = '';
                });
            },
            setDefault() {
                this.quote = "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former";
            }
        }
    }
</script>

<style scoped>

</style>