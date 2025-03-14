<template>
    <!-- Admin header -->
    <TheAdminHeader />

    <!-- Login modal -->
    <TheLoginModal v-if="showLoginModal" />

    <!-- Admin data -->
</template>


<script setup>
    import { ref, inject } from 'vue'

    // Components
    import TheAdminHeader from '@/components/AdminHeader.vue'
    import TheLoginModal from '@/components/modal/LoginModal.vue'


    const emitter = inject('emitter'),
        showLoginModal = ref('true')


    // Event "hide_login_modal"
    emitter.on('hide_login_modal', () => {
        // Hide login modal
        showLoginModal.value = false
    })
</script>