<template>
  <div class="page__wrapper">
    <div v-for="pageNum in totalPages" :key="pageNum" class="page" :class="{ 'current-page': page === pageNum }"
      @click="$emit('update', pageNum)">
      {{ pageNum }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    totalPages: Number
  }
}
</script>

<style scoped>
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
</style>