import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入全局的字体图标
import '@/common/css/iconfont.css'
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
