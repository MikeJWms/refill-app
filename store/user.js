export const state = () => ({
  authToken: null
})

export const mutations = {
  setAuthToken (state, payload) {
    state.authToken = payload;
  }
}