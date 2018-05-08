<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <h1>Philosophers list</h1>
    <div class="lead mx-auto clearfix" style="width: 800px;height: 300px;">
      <philosopher v-for="philosopher in philosophers" :key="philosopher.name" :philosopher="philosopher"/>
    </div>
  </div>
</template>

<script>
    import Philosopher from "@/components/Philosopher";

    export default {
        components: {Philosopher},
        name: 'HelloWorld',
        data: function() {
            return {
                philosophers: [{
                    img: require('./assets/moss.jpg'),
                    name: 'Maurice Moss'
                },{
                    img: require('./assets/sheldon.jpg'),
                    name: 'Sheldon Cooper'
                },{
                    img: require('./assets/goldblum.jpg'),
                    name: 'Jeff Goldblum'
                }]
            }
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
