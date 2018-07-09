import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import {CHECK_AUTH, LOGIN, LOGOUT} from "./actions.type";
import {PURGE_AUTH, SET_AUTH, SET_ERROR} from "./mutations.type";

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
}

const getters = {
    currentUser (state) {
        return state.user
    },
    isAuthenticated (state) {
        return state.isAuthenticated
    }
}

const actions = {
    [LOGIN] (context, credentials) {
        return new Promise((resolve) => {
            ApiService.setHeader()
            ApiService
                // .get('semantic/film-search')
                .get('payment/check-mac?mac_address=' + credentials.mac)
                .then(({data}) => {
                    if (data.data.success) {
                        context.commit(SET_AUTH, data.data)
                        resolve(data)
                    } else {
                        context.commit(SET_ERROR, data.message)
                    }
                })
                .catch(({response}) => {
                    // console.log(response)
                    context.commit(SET_ERROR, response.data.errors)
                })
        })
    },
    [LOGOUT] (context) {
        context.commit(PURGE_AUTH)
    },
    [CHECK_AUTH] (context) {
        if (JwtService.getToken()) {
            ApiService.setHeader()
            ApiService
                .get('payment/check-mac?mac_address=' + JwtService.getToken())
                .then(({data}) => {
                    if (data.data.success) {
                        context.commit(SET_AUTH, data.data)
                        resolve(data)
                    } else {
                        context.commit(SET_ERROR, data.message)
                    }
                })
                .catch(({response}) => {
                    context.commit(SET_ERROR, response.data.errors)
                })
        } else {
            context.commit(PURGE_AUTH)
        }
    }
}

const mutations = {
    [SET_ERROR] (state, error) {
        state.errors = error
    },
    [SET_AUTH] (state, user) {
        state.isAuthenticated = true
        state.user = user
        state.errors = {}
        JwtService.saveToken(state.user.mac_address)
    },
    [PURGE_AUTH] (state) {
        state.isAuthenticated = false
        state.user = {}
        state.errors = {}
        JwtService.destroyToken()
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
