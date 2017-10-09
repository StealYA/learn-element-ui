import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/pages/main'

Vue.use(Router)

const teml1 = {
	template: '<h1>模版1</h1>'
}

const teml2 = {
	template: '<h1>模版2</h1>'
}
const teml3 = {
	template: '<h1>模版3</h1>'
}
const teml4 = {
	template: '<h1>模版4</h1>'
}

export default new Router({ 
  routes: [
  	{
  		path: '/main',
  		name: '主页',
  		component: Main,
  		children: [
  			{
  				path: 'first',
		  		name: '第一',
		  		component: HelloWorld,
  			},
  			{
  				path: 'second',
		  		name: '第二',
		  		component: teml2,
  			},
  			{
  				path: 'third',
		  		name: '第三',
		  		component: teml3,
  			},
  			{
  				path: 'fourth',
		  		name: '第四',
		  		component: teml4,
  			},
  		]
  	},
    {
      	path: '/hello',
      	name: 'Hello',
      	component: Main,
      	children: [
      		{
  				path: 'first',
		  		name: '第一',
		  		component: HelloWorld,
  			},
  			{
  				path: 'second',
		  		name: '第二',
		  		component: teml2,
  			},
  			{
  				path: 'third',
		  		name: '第三',
		  		component: teml3,
  			},
  			{
  				path: 'fourth',
		  		name: '第四',
		  		component: teml4,
  			},
      	]
    }
    ]
})
