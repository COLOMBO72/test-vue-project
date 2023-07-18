<template>
  <input class="input" type="text" :value="value" @input="updateInput">
</template>

<script>
export default{
  name: 'my-input',
  props: {
    value: [String,Number]
  },
  methods: {
    updateInput(e){
      this.$emit('update:value',e.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 60%;
  outline: none;
  border: 0;
  border-bottom: 1px dotted black;
  margin: 20px;
  font-size: 26px;
  font-weight: 700;
  color: black;
  height: 50px;
  padding: 10px;
}
</style>