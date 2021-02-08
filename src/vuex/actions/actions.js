export default {
    ADD_TO_CART({ commit }, product) {
        commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, index) {
        commit('REMOVE_FROM_CARD', index)
    },
    INCREMENT_ITEM_CARD({ commit }, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_ITEM_CARD({ commit }, index) {
        commit('DECREMENT', index)
    }
}