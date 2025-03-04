<template>
    <div class="main">
        <!-- Header -->
        <TheHeader />

        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>

        <!-- Footer -->
        <TheFooter />
    </div>
</template>


<script setup>
    // Components
    import TheHeader from '@/components/Header.vue'
    import TheFooter from '@/components/Footer.vue'
</script>
