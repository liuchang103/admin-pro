const state = {
  count: 0
}

const mutations = {
  count: (state, count) => {
    state.count = count
  }
}

const actions = {
  count({ commit }, count) {
    commit('count', count)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}