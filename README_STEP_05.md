# Step 05 - Add some styles and conditional rendering

Our lovely product owner comes back to take a look at our application. He is not entirely satisfied by the look and feel
of the details page. He would like to add some color to the quotes list to improve readability. He also asks to add a disclaimer
text to warn when the "philosopher" is a fictional character. 

## Todo
- Add a different background color on one out of two lines. Tips : use a `method` to choose the css class name.
You can get the iteration index in a `v-for` directive :
```
v-for="(quote, index) in philosopher.quotes"
``` 
- Be sure your styles won't interfere with other components of your application. (Think about SCSS nested styles or scoped styles)
- Add a text ("Fictional character") on the details page when the philosopher is not a real person. Use the `real` boolean returned 
by the web service.

## Focus
- CSS styles put in the `<style>` part are globals by default. If you want to avoid conflict with global styles or other styles
from other components, it is recommended to isolate them. We suggest two ways for doing it. 
  - Scoped styles : By adding a `scoped` attribute to the `<style>` tag, Vue will add a `data-v` attribute to all the component's
  children and limit all the CSS rules to tags with this attribute (ex of CSS class with data attribute : `.even[data-v-c21348c8] {...}`) 
  - SCSS nested rules : Add a class or id to the root element of the component then include all your styles in it. Ex :
  ```
  .philosopher-detail {
      .even {
          background-color: white;
      }
      
      .odd {
          background-color: #eff6fe;
      }
  }
  ```
  Note that it's perfectly fine to combine both.
- Methods are common attributes in a Vue component, you can call them from the `template` or from the `script`. However, always ask yourself
if a method could be replaced by a `computed` property that would take advantage of the cache (A computed property is called only when the data it uses changes).
- `v-if` vs `v-show` are two ways for conditional displaying. Remember that `v-if` add the element to the DOM only if needed whereas `v-show` 
is just CSS conditional rendering.

