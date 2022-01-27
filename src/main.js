import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import fetch from '~/plugins/fetch'
import lazyLoad from '~/plugins/lazyLoad'
const app = createApp(App)
app.use(router)//플러그인 등록하는 메서드
app.use(store)
app.use(fetch)
app.use(lazyLoad)
app.mount('#app')
