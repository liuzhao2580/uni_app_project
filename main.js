import Vue from 'vue'
import uView from 'uview-ui'
import App from './App'
import store from '@/store'
Vue.config.productionTip = false

// 导入 uView-ui 组件
Vue.use(uView)

// 引入全局的字体图标
import '@/common/css/iconfont.css'

// 引入全局样式
import '@/common/css/resect.css'
App.mpType = 'app'

const app = new Vue({
	store,
    ...App,
})
app.$mount()
