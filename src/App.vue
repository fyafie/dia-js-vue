<template>
  <div>
    <nav class="menu">
      <router-link to="/" v-slot="{ isActive }">
        <a class="btn-link" :class="{ active: isActive }"> Home</a>
      </router-link>
      <router-link to="/about" v-slot="{ isActive }">
        <a class="btn-link" :class="{ active: isActive }"> About</a>
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
  
<script>


export default {
  name: 'App',
  
}
</script>

<style scoped>
  .btn-link{
    background-color: #204f54;;
  }
  .menu {
    width: 100%;
    padding: 16px;
    background: #2c3e50;
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 32px;
  }
  a{
    text-decoration: none;
    color: white;
  }
  .active{
    color: greenyellow;
  }
</style>
