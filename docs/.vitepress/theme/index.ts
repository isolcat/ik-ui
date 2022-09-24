import DefaultTheme from 'vitepress/theme';
import IkUI, { loadingService } from '@ikui/components'
import './var.css';
import './style.css';
// console.log(IkUI, loadingService, 'ikui')
// import 'vitepress-theme-demoblock/theme/styles/index.css';
// import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(IkUI);
    // app.config.globalProperties.$loading = loadingService
    // app.component('Demo', Demo);
    // app.component('DemoBlock', DemoBlock);
  }
}