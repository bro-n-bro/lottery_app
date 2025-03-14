<template>
    <section class="account_info" id="first_section">
        <div class="cont">
            <!-- Main data -->
            <TheMainData />
        </div>

        <!-- Invite button -->
        <KeepAlive>
        <TheInviteButton />
        </KeepAlive>

        <!-- Claim -->
        <!-- <KeepAlive>
        <TheClaim v-if="store.user.prizes.length" />
        </KeepAlive> -->
    </section>

    <!-- Referral modal -->
    <TheReferralModal v-if="showReferralModal" />

    <!-- Delegate modal -->
    <TheDelegateModal v-if="showDelegateModal" />
</template>


<script setup>
    import { ref, inject } from 'vue'
	import { useGlobalStore } from '@/store'

    // Components
    import TheInviteButton from '@/components/account/InviteButton.vue'
    import TheMainData from '@/components/account/MainData.vue'
    // import TheClaim from '@/components/account/Claim.vue'

    import TheReferralModal from '@/components/modal/ReferralModal.vue'
    import TheDelegateModal from '@/components/modal/DelegateModal.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
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



    @media print, (max-width: 1439px)
    {
        .account_info
        {
            padding: 60px 0 80px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .account_info
        {
            padding: 0 0 20px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .account_info
        {
            padding: 80px 0;
        }
    }
</style>
