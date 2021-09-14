import axios from 'axios';

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user;
  }
};

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.user) {
      commit('SET_USER', req.user);
    }
  },
  async login ({ commit }) {
    try {
      const { data } = await axios.get('/api/auth/login');
      commit('SET_USER', data);
    } catch (error) {
      throw new Error('Error logging in!');
    }
  },
  async logout ({ commit }) {
    const { data } = await axios.get('/api/auth/logout');
    if (data.ok) { commit('SET_USER', null); }
  }
};
