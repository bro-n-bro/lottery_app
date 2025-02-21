<template>
    <section class="account_info" id="first_section">
        <div class="cont">
            <!-- Main data -->
            <TheMainData />
        </div>

        <!-- Invite button -->
        <TheInviteButton />

        <!-- Claim -->
        <TheClaim />
    </section>

    <!-- Referral modal -->
    <TheReferralModal v-if="showReferralModal" />

    <!-- Delegate modal -->
    <TheDelegateModal v-if="showDelegateModal" />
</template>


<script setup>
    import { ref, inject } from 'vue'

    // Components
    import TheInviteButton from '@/components/account/InviteButton.vue'
    import TheMainData from '@/components/account/MainData.vue'
    import TheClaim from '@/components/account/Claim.vue'

    import TheReferralModal from '@/components/modal/ReferralModal.vue'
    import TheDelegateModal from '@/components/modal/DelegateModal.vue'


    const emitter = inject('emitter'),
        showReferralModal = ref(false),
        showDelegateModal = ref(false)


    // Event "show_referral_modal"
    emitter.on('show_referral_modal', () => {
        // Show referral modal
        showReferralModal.value = true
    })

    // Event "hide_referral_modal"
    emitter.on('hide_referral_modal', () => {
        // Hide referral modal
        showReferralModal.value = false
    })


    // Event "show_delegate_modal"
    emitter.on('show_delegate_modal', () => {
        // Show delegate modal
        showDelegateModal.value = true
    })

    // Event "hide_delegate_modal"
    emitter.on('hide_delegate_modal', () => {
        // Hide delegate modal
        showDelegateModal.value = false
    })
</script>


<style scoped>
    .account_info
    {
        position: relative;

        padding: 69px 0 97px;
    }
</style>
