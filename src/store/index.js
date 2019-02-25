import Vue from 'vue'
import "babel-polyfill"
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    configIfo:undefined
  },
  mutations: {  //取值 commit
    increment (state) {
      state.count++
    },
    descrease (state) {
    	state.count--
    },
    configIfoFun(state,configIfo) {
    	state.configIfo = configIfo.list
    }
  },
  actions: {   //不必要元素；取值用dispatch //可执行异步操作，（一般用于数据请求）
    incrementAction (context) {
      context.commit('increment');																				 
  	},
  	descreaseAction (context) {
  		context.commit ("descrease");
  	},
  	configIfoFunAction(context){
  		context.commit (configIfoFun);
  	},
  	configIfoFunAction ({ commit},data) {
  		axios.get('/api/site/info')
		  .then(function (response) {
		  	commit(configIfoFun,{list:response.data.info})
		  	//commit('configIfoFun', {list: date});
		  	
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	  }
  },
   getters: {
  	getState(state){
  		if(state.count>=0){  
  			state.count = state.count;
  		}else{
  			state.count = 0;
  		}
  		return state.count;
  	},
  	getConfigIfo(state){
  		//return state.configIfo;
  	}
  }
 
})