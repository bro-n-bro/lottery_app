<template>
	<!-- Main component -->
	<component :is="layout" />

	<!-- Notifications -->
	<notifications width="280px" position="top left" group="default">
		<template #body="props">
			<div class="notification">

			</div>
		</template>
	</notifications>
</template>


<script setup>
    import { computed, onBeforeMount } from 'vue'
	import { useGlobalStore } from '@/store'
    import { useRoute } from 'vue-router'
	import { useTitle } from '@vueuse/core'


	const store = useGlobalStore(),
		route = useRoute(),
        title = useTitle(),
        layout = computed(() => route.meta.layout || 'default-layout')


	onBeforeMount(async () => {
		try {
			// Set page title
			title.value = 'Bro_n_Bro lottery'

			// Change Keplr account
			window.addEventListener('keplr_keystorechange', () => {
				// Reload page
				window.location.reload()
			})

			// Init
			await store.init()
		} catch (error) {
            console.error('Error initializating app:', error)
        }
	})
</script>
