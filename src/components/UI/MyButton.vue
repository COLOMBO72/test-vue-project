<template>
  <button><slot></slot></button>
</template>

<script>
export default{
  name: 'my-button'
}
</script>

<style scoped>
button {
  background-color: rgba(102, 102, 102, 0.692);
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  color: white;
}
</style>