import { createRouter, createWebHistory } from 'vue-router'

import defaultLayout from '@/layouts/Default.vue'
import errorLayout from '@/layouts/Error.vue'


const routes = [
	{
		path: '/',
		name: 'IndexPage',
		component: () => import('@/views/IndexPage.vue'),
		meta: {
			layout: defaultLayout,
			accessDenied: []
		}
	},
	{
        path: '/keplr_error',
        name: 'KeplrErrorPage',
        component: () => import('@/views/KeplrErrorPage.vue'),
        meta: {
            layout: errorLayout,
            accessDenied: ['with_keplr']
        }
    },
]


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})


router.beforeResolve((to, from, next) => {
	// Check access
	to.matched.some(record => {
		let access = record.meta.accessDenied

		if (access.length) {
			// Forbidden without keplr
			if(access.includes('without_keplr') && !window.keplr) {
				next({ name: 'KeplrError' })

				return false
			}
		}
	})

	next()
})


export default router
