<template>
    <!-- Admin header -->
    <TheAdminHeader />

    <!-- Login modal -->
    <TheLoginModal v-if="showLoginModal" />

    <!-- Admin data -->
    <TheAdminData v-else />
</template>


<script setup>
    import { ref, inject } from 'vue'

    // Components
    import TheLoginModal from '@/components/modal/LoginModal.vue'
    import TheAdminHeader from '@/components/admin/Header.vue'
    import TheAdminData from '@/components/admin/Index.vue'


    const emitter = inject('emitter'),
        showLoginModal = ref('true')


    // Event "hide_login_modal"
    emitter.on('hide_login_modal', () => {
        // Hide login modal
        showLoginModal.value = false
    })
</script>