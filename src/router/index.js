import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'
import adminLayout from '@/layouts/Admin.vue'


const routes = [
	{
		path: '/',
		name: 'IndexPage',
		component: () => import('@/views/IndexPage.vue'),
		meta: {
			layout: defaultLayout
		}
	},
	{
		path: '/admin',
		name: 'AdminPage',
		component: () => import('@/views/AdminPage.vue'),
		meta: {
			layout: adminLayout
		}
	}
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})


export default router
