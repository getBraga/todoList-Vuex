<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body,
a,
ul,
li,
h1,
h2,
h3,
p {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}
* {
  box-sizing: border-box;
}
body {
  background: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: #0fff;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
