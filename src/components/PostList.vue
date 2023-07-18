<template>
  <div v-if="posts.length > 0">
    <h2>Post list</h2>
    <transition-group name="post-list">
      <post-item @remove="$emit('remove',post)" :post="post" :key="post.id" v-for="post in posts" />
    </transition-group>
  </div>
  <h2 v-else style="background-color: #F5F5F5;">No posts here</h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active{
  transition: all 0.3s ease;;
}
.post-list-enter-from,
.post-list-leave-to{
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move{
  transition: transform 0.3s ease;
}
</style>