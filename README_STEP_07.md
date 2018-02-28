# Step 07 - Component interactions with events

Components are first class citizen in a Vue.js application and it is generally a good idea to keep that in mind when you
develop with Vue. You should try to design your web page as a composition of components. In a way our previous step break this
principle, we probably should have encapsulated the input and the button in a QuoteForm component. Let's do that.

## Todo
- Create a `QuoteForm` component and move the input and the button from the previous step in it.
- Emit an event from `QuoteForm` when button is click
- Listen to this event in `PhilosopherDetail` and add the new quote to the current list.

## Focus
- This step does not change our application visually but it shows how components can interact between each others.
- `this.$emit` is used to emit event from a component.
- Think about why is it a good thing to use a component approach and extending basic HTML elements to encapsulate reusable code.
For example: isolated state allows to reason more easily about the code, to test them in an easier way and components can be reused in other parts of the site, allow to decouple components via message communication, etc. etc.