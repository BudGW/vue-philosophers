<template>
    <div class="philosopher-info">
        <p v-if="!philosopher.real" class="disclaimer">Fictional character</p>
        <philosopher class="philosopher" :philosopher="philosopher">
            <div class="quote-list">
                <h4>Ses citations préférées :</h4>
                <quote :class="buildQuoteClass(index)" v-for="(quote, index) in philosopher.quotes" :quote="quote" :key="index"/>
            </div>
        </philosopher>
        <input v-model="newQuote" type="text"/>
        <button @click="addQuote">Add Quote</button>
    </div>
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
                philosopher: {},
                newQuote: ""
            }
        },
        methods: {
            buildQuoteClass(index) {
                return 'quote ' + (index % 2 === 0 ? 'even' : 'odd');
            },
            addQuote() {
                this.philosopher.quotes.push(this.newQuote);
                this.newQuote = "";
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
    .philosopher-info {
        width: 800px;
        margin: 20px auto;
    }

    .quote-list {
        text-align: left;
    }

    .quote {
        margin: 0;
        padding: 10px;
        border-bottom: 1px lightgrey solid;
    }

    .even {
        background-color: white;
    }

    .odd {
        background-color: #eff6fe;
    }

    .disclaimer {
        color: red;
        font-weight: bold;
    }

    .philosopher {
        margin: 10px;
    }
</style>