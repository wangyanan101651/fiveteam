import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
    state:{
        data:null,
        lists:null
    },
    actions:{
        getList({commit},data){
            commit('setList',data)
        },
        getTwo({commit},data){
            commit('settwoList',data)
        }
    },
    mutations:{
        setList(state,data){
            state.data=data
        },
        settwoList(data){
          state.lists=data  
        }
    }
})