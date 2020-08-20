import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { RootState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
    plugins: [createPersistedState()],
    state: {
        name: 'DisplayApp',
        version: '1.0.0'
    }
})
