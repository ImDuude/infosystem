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
    </div>
    <br />
    <h3>
        Diese Anwendung stellt eine mögliche Umsetzung dar, welche so in der Ralität genutzt werden könnte. Inhalt der Anwendung ist die Darstellung von Maschinen samt ihrer Baugruppen und derer einzelnen Bauteile.

        Über die Navigationsleiste kann auf die verschiedenen Komponenten zugegriffen werden.
    </h3>
  <router-view/>
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
        font-size: 30px;
        margin-top: -90px;
        a {
            font-weight: bold;
            color: darkslategray;
            background-color: beige;
            padding: 10px;

            &.router-link-exact-active {
                color: darkgoldenrod;
                background-color: honeydew;
                padding: 10px;
            }
        }
    }
  .banner {
      display: flex;  
      width: 90%;
      align-self: center;
      margin-top: -60px;
      margin-bottom: 10px;
  }
</style>
