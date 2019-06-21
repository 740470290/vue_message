import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 设置属性
  state: {
    isLogin: false,
    userName: '',
    count: 1,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  // 获取属性的状态
  getters: {
    // 获取登录状态
    isLogin: state => state.isLogin,
    userName: state => state.userName,
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  // 设置属性状态
  mutations: {
    // 保存登录状态
    userStatus (state, flag) {
      state.isLogin = flag
    },
    userName (state, flag) {
      state.userName = flag
    },
    increment (state, n) {
      state.count += n
    }
  },

  // 应用mutations
  actions: {
    // 获取登录状态
    setUser ({commit}, flag) {
      commit('userStatus', flag)
    },
    setName ({commit}, flag) {
      commit('userName', flag)
    },
    increment ({commit}, flag) {
      commit('increment', flag)
    }
  }
})
