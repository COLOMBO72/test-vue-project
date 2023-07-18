<template>
  <div class="post">
    <div><b>{{ post.title }}: </b>{{ post.body }}</div>
    <div class="post__buttons">
      <my-button @click="$emit('remove',post)" style="background-color: rgb(218, 143, 143);">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 10px;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px dotted black;
  font-size: 16px;
  width: 75%;
  background-color: #f5f5f5;
}

</style>