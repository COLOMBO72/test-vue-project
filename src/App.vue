<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }

}
</script>

<!-- Стили -->
<style> 
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 .app {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;
   
 }

</style>