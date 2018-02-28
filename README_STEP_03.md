# Step 03 - Calling a webservice

At some point you may need to make an external HTTP call to fetch data.
In this step we call an external service to fetch the name and images of the philosophers instead of hardcoding the data.

## Todo
- Clone and Run the [kompanion app](https://github.com/BudGW/philosophers-kompanion.git) to serve the philosopher data as a JSON from another server.
Run in the directory `./gradlew run` (or follow README instructions for Docker) then you should be able to access to the philosopher information at `http://localhost:9090/`
- Place a hook in the [component lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) to fetch the data from the server and display the name.
- Display the philosopher image. You must prefix the base64 encoded image with `data:image/png;base64,` to render it correctly.
- Use a [Computed Property](https://vuejs.org/v2/guide/computed.html#Computed-Properties) to compute the value of the image source property.

## Focus

- To fetch the data from the server you can either use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Or if you must stay compatible with older browsers you can import an HTTP client like [Axios](https://github.com/axios/axios)
```bash
npm install --save axios
```


