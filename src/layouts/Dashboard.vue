<template>
  <div class="container">
      <header class="header">
          <slot name="header"></slot>
      </header>
      <main class="main">
          <slot name="main"></slot>
      </main>
      <footer class="footer">
          <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script>
export default {
    name : 'DashboardLayout'
}
</script>

<style scoped>
.container{
    position: relative;
    max-width: 100%;
    margin: auto;
}
.header{
    background: greenyellow;
    width: 100%;
    padding: 16px;
}
.main{
    background: ghostwhite;
    width: 100%;
    padding: 16px;

}
.footer{
    background: green;
    color: white;
    width: 100%;
    padding: 16px;
}
</style>