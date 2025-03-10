<template>
    <!-- Frist section -->
    <TheFirstSecton v-if="!store.isUserInfoGot" />

    <!-- Account info -->
    <TheAccountInfo v-else />

    <!-- Rules -->
    <KeepAlive>
    <TheRules />
    </KeepAlive>

    <!-- Referrals -->
    <TheReferrals v-if="store.isUserInfoGot" />

    <!-- Prize pool -->
    <KeepAlive>
    <ThePrizePool />
    </KeepAlive>

    <!-- Leaderboard -->
    <KeepAlive>
    <TheLeaderboard />
    </KeepAlive>

    <!-- Our bros -->
    <KeepAlive>
    <TheOurBros />
    </KeepAlive>

    <!-- Loader -->
    <TheLoader v-if="store.isKeplrConnecting" :customClass="'fixed'" />

    <!-- Register modal -->
    <TheRegisterModal v-if="store.showRegisterModal" />
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/store'

    // Components
    import TheFirstSecton from '@/components/FirstSecton.vue'
    import TheAccountInfo from '@/components/AccountInfo.vue'
    import TheRules from '@/components/Rules.vue'
    import TheReferrals from '@/components/Referrals.vue'
    import ThePrizePool from '@/components/PrizePool.vue'
    import TheLeaderboard from '@/components/Leaderboard.vue'
    import TheOurBros from '@/components/OurBros.vue'
    import TheLoader from '@/components/Loader.vue'
    import TheRegisterModal from '@/components/modal/RegisterModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter')


    // Event "show_register_modal"
    emitter.on('show_register_modal', () => {
        // Show register modal
        store.showRegisterModal = true
    })

    // Event "hide_register_modal"
    emitter.on('hide_register_modal', () => {
        // Hide register modal
        store.showRegisterModal = false
    })
</script>
