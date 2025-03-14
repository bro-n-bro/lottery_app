<template>


    <!-- Login modal -->
    <TheLoginModal v-if="showLoginModal" />
</template>


<script setup>
    import { inject } from 'vue'

    // Components
    import TheLoginModal from '@/components/modal/LoginModal.vue'


    const emitter = inject('emitter'),
        showLoginModal = ref('true')


    // Event "hide_login_modal"
    emitter.on('hide_login_modal', () => {
        // Hide login modal
        showLoginModal.value = false
    })
</script>


<style scoped>

</style>