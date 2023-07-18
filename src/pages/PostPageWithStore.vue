<template>
  <div class="posts__wrapper">
    <h1>{{ $store.getters.double }}</h1>
    <h2>Posts page</h2>
    <my-input placeholder="Search posts" v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" />
    <div class="app__buttons">
      <my-button @click="showDialog" style="padding: 10px; font-size: 18px; margin: 10px 0px;">Add post</my-button>
      <my-select :model-value="selectedSort" :options="sortOptions" @update:model-value="setSelectedSort" />
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
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import axios from 'axios';
export default {
  components: { // Подключение всего приходящего
    PostList, PostForm, MyDialog, MyButton, MySelect, MyInput, MyPagination
  },
  data() { // Изначальные данные
    return {
      dialogVisible: false,
    }
  },
  methods: { // Хук
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() { //lifecycle hook, после того как компонент вмонтирован, следим
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state=>state.post.posts,
      isPostsLoading: state=>state.post.isPostsLoading,
      selectedSort: state=>state.post.selectedSort,
      page: state=>state.post.page,
      limit: state=>state.post.limit,
      totalPages: state=>state.post.totalPages,
      searchQuery: state=>state.post.searchQuery,
      sortOptions: state=>state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortSearchPosts: 'post/sortSearchPosts'
    })
  },
  watch: {
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
 }
</style>