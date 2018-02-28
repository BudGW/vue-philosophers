# Step 04 - Philosopher detail page (nested components and slots)

Usually when you build an application you want to create nested components where you will be able to share and reuse sub components.
Now we want to display the detailed information about a philosopher and obviously their best quotes. In this step we will see
that Vue offers various ways to customize and nest components.

## Todo
- Create a new component `Quote` that will only display a quote (a simple `String`). 
- Create a `PhilosopherDetail` component and add a route to display the philosopher details page. In this new page use
 a [slot](https://vuejs.org/v2/guide/components-slots.html) to customize the existing `Philosopher` by adding the list of quotes.
 You can make a call to the backend to get the detail of a single philosopher, ex :
 ```
 http://localhost:9090/1' //get the philosopher with id = 1
 ```
- In the philosophers list, replace the name with a link to the philosopher details page. You can pass 
[props](https://router.vuejs.org/en/essentials/passing-props.html) in route. Add `props: true` in the route object then
on the router link you can either use an object as `to` attribute to specify the route to use and the params to pass as props :
```
:to="{ name: 'philosopher', params: { philosopherId: philosopher.id }  }"
```
or directly build the complete path with, for example, a computed property or inline JS :
```
:to="'/philosopher/' + philosopher.id"
```
- You will probably have to pay attention to the time spent by the backend call. Components might be rendered before their
props and data are assigned.

## Focus
- Notice how we structured our application in a hierarchy of components.
- Slots are a very powerful concept. `single slot` like the one we use here is the simplest one. You could have put default
content in it. Or you could also add `named slots` that you can reference by their names when you use a component. 
Typically a layout component will probably expose a header, a content and a footer slot. 
There is also the `scoped slots` to allow you to access child component data inside a slot. As an exercise you can try
to transform the `Philosopher` component in order to add a scoped slot allowing you tu customize the way the philosopher name and link
are displayed (keep it simple and just change the color to begin).

