<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Bauelemente">Bauelemente</router-link> |
    <router-link to="/Baugruppe">Baugruppe</router-link> |
    <router-link to="/BaugruppeHilfstabelle">Baugruppen Ansicht</router-link> |
    <router-link to="/Maschine">Maschine</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

  nav {

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
