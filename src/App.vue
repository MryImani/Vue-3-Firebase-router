<template>
    <Header />
  <router-view/>

</template>
<script>
import Header from '@/components/header-component.vue'

export default {
   components: {
    Header
   } ,
mounted(){
  localStorage.setItem('userToken','Admin');
}
}
</script>

<style>
@font-face {
  font-family: "Kalame_Bold";
  font-weight: 700;
  src: url(@/assets/fonts/Kalameh-Bold.ttf);
}

@font-face {
  font-family: "Kalame_SemiBold";
  font-weight: 600;
  src: url(@/assets/fonts/Kalameh-SemiBold.ttf);
}

@font-face {
  font-family: "Kalame_Regular";
  font-weight: 400;
  src: url(@/assets/fonts/Kalameh-Regular.ttf);
}
body{
  margin: 0px;
  box-sizing: border-box;
  direction: rtl;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px 0px;
  text-align: right;
}
nav .fa-angle-left{
  font-size: 21px;
    position: relative;
    top: 3px;
    margin: 3px;
}
nav a {
  font-family: "Kalame_SemiBold";
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color:rgb(243, 49, 14);
}

</style>