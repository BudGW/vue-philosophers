# Step 10 - VueX

At some point you will need to make components share some data and interact with each other.
For some simple application it is enough to share data between components by sending it via props from a common parent component and change these data with callbacks.

VueX is a state management library that serves as a centralized store that can be accessed by the component to query or update data.
You can think of it as a database on the front-end.

## Todo
- We already have installed Vuex by selecting it with the Vue CLI in the first step. 
If you forgot it, you can still install VueX with `yarn add vuex` or `npm install --save vuex`
- Install Vue.js Devtools (in case you haven't already) and notice the VueX tab.
- Create a `Counter` component with 2 Buttons to upvote or downvote for all philosophers
- Separate the data into the store to have distinct counters for each philosopher.

## Focus

![VueX diagram](https://vuex.vuejs.org/en/images/vuex.png)

VueX Core concepts:
- State: contains the data (single source of truth for the application)
- Getters: create a representation of the data that fit your use case (equivalent of computed properties). Automatically updates when data changes.
- Actions: The action decide when the mutation fires. Can be asynchronous and have side effects. Why Actions ? to avoid repetition when you want to do the same thing to the store from different components. Also actions can trigger multiple mutations.
- Mutations: message sent to the store to update itself


When should I use Vuex ?
Like every design decision VueX comes with drawbacks (it adds complexity, and some boilerplate) so you don't have to use it from the start on every application.
You can go with a simple global event bus but if your are building a complex SPA you might want to think about it.
To quote the creator of Redux: "it's like glasses: you’ll know when you need them."

If my application grows really big the store will be a total mess ?
You can use modules to divide your store into sub stores. For example one with your products related data and another with the user related data.