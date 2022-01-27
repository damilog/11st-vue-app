export default {
  namespaced: true, //모듈에서 필수 옵션
  state: () => ({
    isShow: false
  }),
  getters: {
    
  },
  mutations: { //commit으로 실행
    setState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions: { //dispatch로 실행
    onNav({ commit }) {
      commit('setState', { //mutation 호출
        isShow: true
      })
    },
    offNav({ commit }) { //context에서 commit 꺼냄
      commit('setState', { //mutation 호출
        isShow: false
      })
      
    }
  }
}
