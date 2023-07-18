<template>
  <!-- Вёрстка -->
  <div class="posts__wrapper">
    <h2>Posts page</h2>
    <my-input placeholder="Search posts" v-focus v-model="searchQuery" />
    <div class="app__buttons">
      <my-button @click="showDialog" style="padding: 10px; font-size: 18px; margin: 10px 0px;">Add post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list @remove="removePost" :posts="sortSearchPosts" v-if="!isPostsLoading" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
// Скрипты
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';
import MyButton from '../components/UI/MyButton.vue';
import MyDialog from '../components/UI/MyDialog.vue';
import MyInput from '../components/UI/MyInput.vue';
import MySelect from '../components/UI/MySelect.vue';
import MyPagination from '../components/MyPagination.vue';
import usePosts from '../hooks/usePosts'
import useSortedPosts from '../hooks/useSortedPosts'
import useSortedSearchPosts from '../hooks/useSortedSearchPosts'
import { ref } from 'vue'
export default {
  components: { // Подключение всего приходящего
    PostList, PostForm, MyDialog, MyButton, MySelect, MyInput, MyPagination
  },
  data() { // Изначальные данные
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'Name' },
        { value: 'body', name: 'Description' }
      ]
    }
  },
  methods: { // Хук

  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortSearchPosts } = useSortedSearchPosts(sortedPosts);
    return {
      posts, totalPages, isPostsLoading, selectedSort, sortedPosts, searchQuery, sortSearchPosts
    }
  }
}
</script>

<!-- Стили -->
<style scoped> .app__buttons {
   width: 50%;
   display: flex;
   align-items: center;
   gap: 20px;
 }

 .posts__wrapper {
   padding: 50px;
 }

 .app__buttons select {
   height: 25px;
   padding: 10px;
 }

 .page__wrapper {
   display: flex;
   margin-top: 15px;
 }

 .page {
   border: 1px solid gray;
   padding: 10px;
 }

 .current-page {
   border: 2px solid black;
 }

 .observer {
   height: 10px;
 }</style>