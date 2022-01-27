import { createStore } from 'vuex'
import navigation from './navigation'

//파일을 import해서 모듈로 등록하는 것
export default createStore({
  modules: {
    navigation
  }
})
