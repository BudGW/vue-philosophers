# Step 02 - Vue Router

If you plan to create a single page application, a routing system will probably be necessary. In this step 
we will use Vue Router to associate an url with a component.

Vue CLI has already added the dependency on vue router for us and prepared some config files. Take a look
at `router.js`, this file contains the routes declarations. As you can see we associate a path to a component.

These routes are injected in the vue instance in `main.js`. Then, in `App.vue`, the `<router-view/>` component
tells Vue where to insert the component matching the current path.

You can test the routes by clicking on the Home and About links.

## Todo

- In the first steps we have added our philosophers list on the home page but our nice product owner wants a new
page dedicated to it with its own url, let's say `/philosophers`. 
- Move the philosophers list in a new component `PhilosophersPage.vue` in the `views` folder. 
- Then configure the routes and add a link to it in `App.vue`

## Focus

- In the next steps you will probably need to change route programmatically, that can be done with `router.push`
([doc](https://router.vuejs.org/en/essentials/navigation.html)) 
- Vue Router is a very powerful plugin that can be the subject of a whole workshop. Don't hesitate to take a look
at the [documentation](https://router.vuejs.org/en/) for further information.
- To go further : Try to display the nav bar and a footer by using several `<router-view/>`. You will have to
use [Named views](https://router.vuejs.org/en/essentials/named-views.html).


