import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'


const routes = [
	{
		path: '/',
		name: 'IndexPage',
		component: () => import('@/views/IndexPage.vue'),
		meta: {
			layout: defaultLayout
		}
	}
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})


export default router
