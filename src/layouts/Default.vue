<template>
    <div class="main">
        <!-- Header -->
        <TheHeader />

        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </div>
</template>


<script setup>
    // Components
    import TheHeader from '@/components/Header.vue'
</script>
