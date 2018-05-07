// import request from '@/api/request'
// import urls from '@/api/urls'

let state = {
  name: 'xiaoping'
}
const mutations = {
  'SET_NAME'(state, data) {
    state.name = data
  }
}
const actions = {
  SetName({ commit }, params) {
    commit('SET_NAME', params.name)
  }
}
const getters = {
  name: state => state.name
}

export default {
  state,
  mutations,
  actions,
  getters
}
