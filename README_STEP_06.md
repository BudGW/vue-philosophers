# Step 06 - Form Input Binding

At this point we haven't interact with the backend data. It is time to see Vue.js virtual DOM in action. In this step
we will allow the user to add some quotes to the existing ones (no backend update for the moment).  

## Todo
- Add an input text and a button 'Add quote' in the `PhilosopherDetail` page.
- Bind a data with the input value (Tip : `v-model` directive is a good choice).
- Listen to click event on the button and add the quote to the current list.

## Focus
- `v-model` is the directive to create a [two-way binding](https://vuejs.org/v2/api/#v-model). Basically, it is just 
[syntax sugar](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components) for a `v-bind` on a `value` property
and a listener on an `input` event. We will see more about it on the next steps.
- You can either use `@event-name` or `v-on:event-name` to listen to events.
