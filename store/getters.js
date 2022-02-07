// /store/mutations.js
export default{
    getRepos: (state) => {
        const PER_PAGE = 3

        const pageMin = state.page
        const pageMax = pageMin + PER_PAGE

        const paginatedArray = state.repos.slice(pageMin, pageMax)

        return paginatedArray
        //return state.repos
    },

    getPagesAvaiable: (state) => {
        return state.pagesAvaiable
    }
  }