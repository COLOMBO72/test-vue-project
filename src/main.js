import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI/index';

const app = createApp(App);
components.forEach(element => {
  app.component(element.name,element)
});
app.mount('#app');
