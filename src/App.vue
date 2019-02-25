<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
    	<router-view></router-view>
    	<v-header v-if="tabType"></v-header>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import header from './components/commen/header'
//import MetaInfo from 'vue-meta-info'

Vue.use(Router)
Vue.use(Meta)
//Vue.use(MetaInfo)
/* eslint-disable no-new */

export default {
	name: 'App',
	data() {
			return {
				homeInfo:{},
				mytitle:'贡和堂',
				description:"",
				keyWorld:"",
				tabType:true
			}
	},
	components: {
			'v-header':header
		},
	metaInfo () {
	  return {
	    title: this.mytitle,
	    meta: [
	      { vmid: 'description', name: "description", content: this.description },
	      { vmid: 'keyword', name: "keyword", content: this.keyWorld }
	      
	    ]
	  }
	},
	methods: {
			init() {
				this.axios.get('/api/site/info').then(
					response => {
						this.homeInfo    = response.data.info
						this.mytitle     = response.data.info.site_title
						this.description = response.data.info.site_description
						this.keyWorld    = response.data.info.site_keywords
//						console.log(this.mytitle)
					}
				)
			}
		},
		watch:{
			$route(e){
				// chrome
		    document.body.scrollTop = 0
		    // firefox
		    document.documentElement.scrollTop = 0
		    // safari
		    window.pageYOffset = 0

				
			}
		},
		created() {
			this.init()
		}
}
</script>

<style>
#app {
  
}
</style>
