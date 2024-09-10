import { createStore } from 'vuex';

const savedTheme = localStorage.getItem('isDarkTheme') === 'true';

export default createStore({
    state: {
        isDarkTheme: savedTheme,
    },
    mutations: {
        cambiarTema(state) {
            state.isDarkTheme = !state.isDarkTheme;
            localStorage.setItem('isDarkTheme', state.isDarkTheme);
        },
    },
    actions: {
        cambiarTema({ commit }) {
            commit('cambiarTema');
        },
    },
    getters: {
        isDarkTheme: (state) => state.isDarkTheme,
    },
});
