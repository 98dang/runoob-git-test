import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
//完成后暴露并创建一个仓库：	
export default new Vuex.Store({
    //初始化状态对象	
    state: {
        uid:1
    },
    //自定义函数事件
    mutations: {
        setUid(state,id) {
            state.uid = id
        }
    }
})