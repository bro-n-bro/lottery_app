<template>
	<!-- Main component -->
	<component :is="layout" />

	<!-- Notifications -->
	<notifications width="304px" position="top right" group="default">
		<template #body="props">
			<!-- Notification -->
			<transition name="slideRight">
			<div class="notification_wrap" :class="{
				success: props.item.type === 'success',
				error: props.item.type === 'error',
				copied: props.item.type === 'copied'
			}">
				<div class="notification">
					<!-- Notification icon -->
					<div class="icon">
						<!-- Success icon -->
						<img src="/images/ic_notification_success.svg" alt="" v-if="props.item.type === 'success' || props.item.type === 'copied'">

						<!-- Error icon -->
						<img src="/images/ic_notification_error.svg" alt="" v-else-if="props.item.type === 'error'">

						<!-- Loader -->
						<TheLoader v-else />
					</div>

					<div>
						<!-- Notification title -->
						<div class="title">
							{{ props.item.title }}
						</div>

						<!-- Notification desc -->
						<div class="desc">
							{{ props.item.text }}
						</div>

						<!-- Notification explorer link -->
						<div class="link" v-if="props.item.data.explorer_link">
							<a :href="props.item.data.explorer_link" target="_blank" rel="noopener nofollow">Explorer</a>
						</div>
					</div>
				</div>
			</div>
			</transition>
		</template>
	</notifications>
</template>


<script setup>
    import { computed, onBeforeMount } from 'vue'
	import { useGlobalStore } from '@/store'
    import { useRoute } from 'vue-router'
	import { useTitle } from '@vueuse/core'

    // Components
    import TheLoader from '@/components/Loader.vue'


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
			if (window.keplr) {
				await store.init()
			}
		} catch (error) {
            console.error('Error initializating app:', error)
        }
	})
</script>
