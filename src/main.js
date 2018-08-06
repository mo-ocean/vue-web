// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.min.css'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

import './style/main.css'
import axios from "axios"
import moment from 'moment'

axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.config.productionTip = false
    // moment时间处理
Vue.filter('fmtTime', function(data, fmt) {
        return moment(data).format(fmt)
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})