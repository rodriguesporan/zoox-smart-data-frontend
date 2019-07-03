<template>
  <div id="app" class="small-container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/states">Estados</router-link> |
      <router-link to="/cities">Cidades</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 680px;
  margin: 0 auto;
}

#app .hello h1 {
  color: #777;
}

#app .hello p {
  color: #777;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 24px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
