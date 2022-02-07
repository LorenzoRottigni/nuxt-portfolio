import axios from "axios"

export default {
    async nuxtServerInit({ commit, dispatch, req}){
        await dispatch('reposDispatcher')
    },
    async reposDispatcher({ commit }){
        const {data} = await axios.get('http://localhost:3000/repos')
        console.log(data)
        commit('loadRepos', data)
    },
    setPagination({commit}, payload){
        commit('setPagination', payload)
    }
  }