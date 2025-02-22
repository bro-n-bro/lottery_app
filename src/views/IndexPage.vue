<template>
    <!-- Frist section -->
    <TheFirstSecton v-if="!store.isKeplrConnected" />

    <!-- Account info -->
    <TheAccountInfo v-if="store.isKeplrConnected" />

    <!-- Rules -->
    <TheRules />

    <!-- Prize pool -->
    <ThePrizePool />

    <!-- Leaderboard -->
    <!-- <TheLeaderboard /> -->

    <!-- Our bros -->
    <TheOurBros />

    <!-- Loader -->
    <TheLoader v-if="store.isKeplrConnecting" class="fixed" />
</template>


<script setup>
    import { useGlobalStore } from '@/store'

    // Components
    import TheFirstSecton from '@/components/FirstSecton.vue'
    import TheAccountInfo from '@/components/AccountInfo.vue'
    import TheRules from '@/components/Rules.vue'
    import ThePrizePool from '@/components/PrizePool.vue'
    // import TheLeaderboard from '@/components/Leaderboard.vue'
    import TheOurBros from '@/components/OurBros.vue'
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore()
</script>
