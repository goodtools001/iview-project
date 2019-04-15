import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        paramMap:{
            "reportType":"",
            "timeRange":"",
            "reportFormat":""
        }
    },
    mutations:{
     add(){
         return this.state.count++;
     },
     setReportType(state,reportTypeTemp){
         return state.paramMap.reportType=reportTypeTemp
     },


    },
})