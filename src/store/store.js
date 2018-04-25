import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    philosophers: []
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment (state, philosopherId) {
        const philosopher = state.philosophers.find(item => item.id === philosopherId);
        if(!philosopher) {
            state.philosophers.push({id: philosopherId, count: 1});
            return;
        }

        philosopher.count++;
    },
    decrement (state, philosopherId) {
        const philosopher = state.philosophers.find(item => item.id === philosopherId);
        if(!philosopher) {
            state.philosophers.push({id: philosopherId, count: -1});
            return;
        }

        philosopher.count--;
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({ commit }, philosopherId) => commit('increment', philosopherId),
    decrement: ({ commit }, philosopherId) => commit('decrement', philosopherId)
}

// getters are functions
// Similar with
const getters = {
    getCount: (state) => (id) => {
        if (!state.philosophers.find(item => item.id === id)) {
            return 0;
        }

        return state.philosophers.find(item => item.id === id).count;
    }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})