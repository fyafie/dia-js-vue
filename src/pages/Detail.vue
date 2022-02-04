<template>
  <div class="detail">
      detail {{ $route.params.id }}
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    mounted(){
        console.log(parseInt(this.$route.params.id));
    }
}
</script>

<style>
    .detail{
        margin: auto;
        max-width: 90rem;
        width: 100%;
        padding: 16px;
    }
</style>