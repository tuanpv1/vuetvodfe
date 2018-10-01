import {
  TagsService,
} from '@/common/api.service'
import {
  FETCH_START,
} from './mutations.type'

const state = {
  tags: [],
  isLoading: true,
  articlesCount: 0
}

const getters = {
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
}

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START] (state) {
    state.isLoading = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
