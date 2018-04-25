<template>
    <div>
        <p class="preview">{{quote}}</p>
        <input v-model="quote" type="text"/>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "QuoteField",
        data: function () {
            return {
                quote: ''
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        watch: {
            value(newValue, oldValue) {
                this.quote = newValue;
            },
            quote(newValue, oldValue) {
                this.$emit('input', newValue);
            }
        }
    }
</script>

<style scoped>
    .preview {
        color : green;
    }
</style>