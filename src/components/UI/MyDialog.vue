<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
      <!-- slot - заполняет в себя то, что мы обернём этой компонентой -->
    </div>
  </div>
</template>

<script>
import toggleMixin from '../../mixins/toggleMixin';
export default {
  name: 'my-dialog',
  mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
}
.dialog__content{
  margin: auto;
  background-color: white;
  border-radius: 7px;
  padding: 10px;
  min-height: 50px;
  max-width: 500px;
}
</style>