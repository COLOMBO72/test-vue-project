<template>
  <form @submit.prevent>
    <h2>Create post</h2>
    <my-input v-focus v-model:value="post.title" class="input" type="text" placeholder="title"/>
    <my-input v-model:value="post.body" class="input" type="text" placeholder="descr"/>
    <my-button class="btn" @click="createPost">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost(){
      if (this.post.title != '' && this.post.body != ''){
        this.post.id = Date.now();
        this.$emit('create',this.post)
        this.post = {
          title: '',
          body: ''
        }
      }else{
        alert('No value finded')
      }
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>