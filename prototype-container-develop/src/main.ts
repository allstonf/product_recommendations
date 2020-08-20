import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import store from './Store'
import router from './Router'

Vue.config.productionTip = false

// const isProd = process.env.NODE_ENV === 'production'
// sendHitTask off in development avoid sending data to domain in development
Vue.use(VueGtag, {
    config: {
        id: 'UA-172783562-1'
        // params: {
        //     debug: {
        //         enabled: !isProd
        //         // sendHitTask: isProd
        //     }
        }
    }
)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
