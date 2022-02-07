// /store/mutations.js
export default{
    loadRepos(state, val){
        state.repos = val
        state.pagesAvaiable = (val.length/5)
    },
    setPagination(state, val){
        state.page = val
    }
  }