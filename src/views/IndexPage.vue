<template>
    <!-- Frist section -->
    <TheFirstSecton v-if="!store.isKeplrConnected" />

    <!-- Steps -->
    <TheSteps />

    <!-- Prize pool -->
    <ThePrizePool />

    <!-- Leaderboard -->
    <!-- <TheLeaderboard /> -->

    <!-- Our bros -->
    <TheOurBros />
</template>


<script setup>
    import { useGlobalStore } from '@/store'

    // Components
    import TheFirstSecton from '@/components/FirstSecton.vue'
    import TheSteps from '@/components/Steps.vue'
    import ThePrizePool from '@/components/PrizePool.vue'
    // import TheLeaderboard from '@/components/Leaderboard.vue'
    import TheOurBros from '@/components/OurBros.vue'


    const store = useGlobalStore()
</script>
