# Step 00 - Prelude - Vue.js as a library

On this step we will see that Vue.js can be use in your legacy code like a simple library. Of course you will not 
benefit from single file component or ES2015 syntax but you will still have access to all the features of Vue.

Your job in this step is to create a component that display the photos of the philosophers and use it in our good old 
html page. 

Take a look at `index.html`. It's a simple html file that include Vue.js via a CDN (and Bootstrap, just to make our
list of philosophers a little more pretty). It already has a simple website layout. You can notice that a js file `main.js`
is also include. That is where you will code your component. It already contains a component declaration for the `navbar`
component and the declaration of a Vue instance. You can see this instance as the root of your application.

Notice that in this step we don't use webpack, babel, node or npm, it's only Javascript the old fashion way.

## Todo

- Open `main.js`
- Create a component named `philosopher` (take a look at the `navbar` component) that display the photo and the name 
of a philosopher
- Declare a list of philosophers in the Vue app instance (hint : use `data` property)
```
    {
        philosophers: [{
            img: 'img/moss.jpg',
            name: 'Maurice Moss'
        },{
            img: 'img/sheldon.jpg',
            name: 'Sheldon Cooper'
        },{
            img: 'img/goldblum.jpg',
            name: 'Jeff Goldblum'
        }]
    }
```
- In the Vue app template iterate over the philosophers list and use the `philosopher` component to display each
philosopher

## Focus

- The simpliest way to declare and register a global component is to use `Vue.component(tagName, options)`.
- Passing data to component is done using the `props` option.
- Declaring data in component or Vue instance is done using the `data` option (Be careful `data` must return a function, 
see the [doc](https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function)).
- Notice here two differents ways to use a template either with an inline string or with a `<script type="text/x-template">`
(note that with single file component in the next step these methods become obsoletes)
- Use `v-for` directive to iterate over collection in template 
(don't forget to specify a key attribute (eg : `philosopher.name`)) [doc](https://vuejs.org/v2/guide/list.html#key)
- To pass props to component you can either use the `v-bind` directive (eg `v-bind:my-prop`) or simply `:my-prop`
- You can go beyond : try to declare a method in the Vue instance and call it from outside Vue, let's say when you click
on a standard button (hint : you can put the Vue instance in a `var`) 

