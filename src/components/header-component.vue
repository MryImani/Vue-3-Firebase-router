<template>
  <header class="header">
    <img :src="require('@/assets/logo.png')" alt="logo" srcset="" class="header__logo">
  </header>

</template>

<script>

export default {
}
</script>

<style>
.header{
    max-width: 100vw;
    height: 150px;
    box-shadow: 2px 2px 2px 2px #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header .header__logo{
  width: 100px;
  height: 100px;
}
</style>