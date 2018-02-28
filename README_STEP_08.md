# Step 08 - Create a custom input with v-model / Update backend

In the last step, we created a `QuoteForm` composed of a simple input text and a button. Here our field (an input 
text) is really simple but what if we had more complex field, for instance an input with a preview area ? Yes we 
should have wrapped our field (input + preview) in a new component. This component should behave just like a standard
input : with a v-model. Let's do this.

## Todo
- Create a `QuoteField` component and move the input in it.
- Add a preview zone, simply display the quote in a colored or italic font, it's just for the purpose of the exercise.
- Implement a model on `QuoteField` so that you can use it with a `v-model` directive in `QuoteForm`. Remember :
it is just [syntax sugar](https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components) for a `v-bind` 
on a `value` props and a listener on an `input` event. You can use a `watch` to detect value change of `data`, 
`props` or `computed`.
- Use `QuoteField` in `QuoteForm` with a v-model and make it work like before.
- Use Axios to update the backend when the save button is clicked (POST `philosopherId` and `quote` to `/quote` url).

## Focus
- Go further with v-model and try to change the default props and event names.
- Notice how we use our newly created component like a standard HTML input. It is generally a good idea to define a
model property in a component if its main responsibility is to work on a single value. Components libraries
like Vuetify or Element.io usually provides model on most of their components. But you can of course choose to use
events to communicate between components. 
- `v-model` are also useful if you have to use default value coming from a parent component. 
Try to set a default value to the quote `data` in `QuoteForm` and see how `QuoteField` is
updated.