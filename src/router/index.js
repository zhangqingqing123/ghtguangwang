import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import about from '@/components/about'
import advantage from '@/components/advantage'
import business from '@/components/business'
import contact from '@/components/contact'
import home from '@/components/home'
import life from '@/components/life'

Vue.use(Router)

export default new Router({
	linkActiveClass: "active", //全局配置
//	mode: "history",
	routes: [{
		path: '/',
		name: 'layout',
		component: layout,
//		redirect:"/home",
		children: [
			{
				path: '',
				name: "home",
				component: home
			},
			{
				path: 'about',
				name: "about",
				component: about
			},
			{
				path: 'advantage',
				name: "advantage",
				component: advantage
			},
			{
				path: 'business',
				name: "business",
				component: business
			},
			{
				path: 'contact',
				name: "contact",
				component: contact
			},
			{
				path: 'life',
				name: "life",
				component: life
			},
			{
				path: '*',
				name: "404",
				component: home
			}
		]
	}]
})