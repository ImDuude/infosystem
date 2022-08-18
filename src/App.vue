<template>
    <img class="banner" src="./assets/banner.png" alt="">
    <div class="navigation">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/Bauelemente">Bauelemente</router-link> |
            <router-link to="/Baugruppe">Baugruppe</router-link> |
            <router-link to="/BaugruppeHilfstabelle">Baugruppen Ansicht</router-link> |
            <router-link to="/Maschine">Maschine</router-link>
        </nav>
    <router-view />
    </div>

  
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #b6ff00;
    background-color: beige;
    border-block-end-color: gray;
    border-block-end-style: solid;
    border-block-end-width: 1px;
    min-height: 1000px;
  }

    .navigation {
        background-color: beige;
        padding: 10px;
    }

    nav {
        font-size: 25px;
        margin-top: -76px;
        margin-bottom: 20px;
        margin-left: 200px;

        a {
            font-weight: bold;
            color: darkslategray;
            background-color: beige;
            padding: 10px;

            &.router-link-exact-active {
                color: darkgoldenrod;
                background-color: lightgray;
                padding: 10px;
                border-start-start-radius: 10px;
                border-start-end-radius: 10px;
                border-end-start-radius: 10px;
                border-end-end-radius: 10px;
            }
        }
    }
  .banner {
      display: flex;  
      width: stretch;
      align-self: center;
      margin-top: -60px;
      margin-bottom: 10px;
      padding-bottom: 5px;
      padding-right: 10px;
      border-bottom-style: solid;
      border-bottom-color: darkgray;
      border-bottom-width: 2px;
  }
</style>
