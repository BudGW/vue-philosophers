# Step 09 - Test with Jest

Ok, so we are at step 9 and our little application start to look at something. But if you are like us : test and TDD enthusiasts, 
you would probably miss testing. It's just a workshop to learn Vue, so we will be cool on TDD, but it is still worth learning
how to test a Vue component. Jest has already been configured by Vue CLI so let's start.

## Todo
- Write a test on `QuoteField` named `QuoteField.spec.js`. 
- Assert that the preview text is updated when the `value` property is updated. Tips : By default, watchers are not called when a component
is mounted with a props value (because it does not detect a value change). You can use `setProps` on a wrapper to set properties
values. An other way is to use the `immediate : true` property on the watcher to force the execution on the component creation.
- Assert that an event `input` with the quote as payload is emitted when the quote data is changed
- Assert that quote data is modified when the `value` property is modified
- Run the tests with `npm run test` or your preferred IDE
- If you want to run the tests with Intellij you must add `"@babel/env"` presets to your `.babelrc` file :
```
"presets": [
    "@vue/app",
    "@babel/env"
  ]
```


## Focus
- `mount` create a wrapper with the mounted and rendered Vue component while `shallow` also create a a wrapper with the 
mounted and rendered Vue component but with stubbed child components
- Remember `vue-test-utils` ([doc](https://vue-test-utils.vuejs.org/en/)) is still under development and it can be unstable. But it's still a powerful tool to write 
tests without the pain of DOM and Vue lifecycle updates. It helps by applying updates synchronously.
- Go further and try to add a test on the component that list the philosophers `PhilosophersPage.vue`. You will have to mock
the HTTP call.