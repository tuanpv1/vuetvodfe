import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { RECHARGE_TVOD } from "./actions.type";
import { SET_ERROR } from "./mutations.type";

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
    [RECHARGE_TVOD] (context, credentials) {
        console.log('vào ddaay roi')
        return new Promise((resolve) => {
            var signature = '';
            var mac_address = state.mac;
            ApiService.setHeader()
            ApiService
                .get('payment/topup-tvod-card?card_code=' + credentials.card_code + '&signature=' + signature + '&mac_address=' + mac_address)
                .then(({data}) => {
                    if (data.data.success) {
                        // context.commit(SET_AUTH, data.data)
                        context.commit(SET_ERROR, data.message)
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
    }
}

const mutations = {
    [SET_ERROR] (state, error) {
        state.errors = error
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
