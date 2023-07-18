<template>
  <!-- Вёрстка -->
  <div class="posts__wrapper">
    <h2>Posts page</h2>
    <my-input placeholder="Search posts" v-focus v-model="searchQuery" />
    <div class="app__buttons">
      <my-button @click="showDialog" style="padding: 10px; font-size: 18px; margin: 10px 0px;">Add post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
      <!-- v-model - двустороннее связывание -->
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list @remove="removePost" :posts="sortSearchPosts" v-if="!isPostsLoading" />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <my-pagination :page="page" :totalPages="totalPages" @update="changePage"/> -->
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
import axios from 'axios';
export default {
  components: { // Подключение всего приходящего
    PostList, PostForm, MyDialog, MyButton, MySelect, MyInput,MyPagination
  },
  data() { // Изначальные данные
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'Name' },
        { value: 'body', name: 'Description' }
      ]
    }
  },
  methods: { // Хук
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
    // changePage(pageNum){
    //   this.page = pageNum;
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (error) {
        console.error()
        alert(`Error to fetchposts, ${error}`)
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page +=1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts,...response.data];
      } catch (error) {
        console.error()
        alert(`Error to fetchposts, ${error}`)
      }
    },
  },
  mounted() { //lifecycle hook, после того как компонент вмонтирован, следим
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
    sortSearchPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
    // page(){
    //   this.fetchPosts();
    // }
  }
}
</script>

<!-- Стили -->
<style scoped> 
 .app__buttons {
   width: 50%;
   display: flex;
   align-items: center;
   gap: 20px;
 }
 .posts__wrapper{
  padding: 50px;
 }
 .app__buttons select {
   height: 25px;
   padding: 10px;
 }
 .page__wrapper{
  display: flex;
  margin-top: 15px;
}
.page{
  border: 1px solid gray;
  padding: 10px;
}
.current-page{
  border: 2px solid black;
}
.observer{
  height: 10px;
}
</style>