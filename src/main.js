import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可
// import loading from './common/imgs/loading.gif'
import installElementPlus from './plugins/element'
// import installFilters from './filters'


const app = createApp(App)
installElementPlus(app)
// installFilters(app)
// app.use(loading)// 内部自定义一个指令lazy
app.use(store).use(router).mount('#app')
