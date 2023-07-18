import { createApp } from 'vue';
import App from './App.vue';
import components from './components/UI/index';
import router from './router/router';
import directives from './directives/index';
import store from './store';

const app = createApp(App);
components.forEach((element) => {
  app.component(element.name, element);
});
directives.forEach((dir) => {
  app.directive(dir.name, dir);
});

app.use(router).use(store).mount('#app');
