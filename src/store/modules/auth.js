import * as types from '../types'
import api from '../../api'

const state = {
  user_info: null
}

const actions = {
  queryUserInfo({
    state,
    commit
  }, {}) {
    if (!state.user_info) {
      api.post('api/user/user_info').then(res => {
        if (res.data.res_code) {
          commit(types.GET_USER_INFO, res.data.msg);
        }
      })
    } else {
        commit(types.GET_USER_INFO, state.user_info);
    }
  }
}

const mutations = {
  [types.GET_USER_INFO]: (state, payload) => {
    state.user_info = payload;
  }
}

export default {
  state,
  actions,
  mutations
}
