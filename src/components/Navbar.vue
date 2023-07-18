<template>
  <div class="navbar">
    <h2>Ellent</h2>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" style="margin: 0px 10px; font-size: 18px;">Posts</my-button>
      <my-button @click="$router.push('/about')" style="margin: 0px 10px; font-size: 18px;">About us</my-button>
      <my-button @click="$router.push('/')" style="margin: 0px 10px; font-size: 18px;">Home</my-button>
      <my-button @click="$router.push('/composition')" style="margin: 0px 10px; font-size: 18px;">Composition</my-button>
      <my-button @click="$router.push('/store')" style="margin: 0px 10px; font-size: 18px;">Store</my-button>
    </div>
  </div>
</template>
<script>
export default {
  
  
}
</script>
<style >
.navbar{
  width: 100%;
  background-color: rgb(86, 206, 75);
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-around;
}
</style>