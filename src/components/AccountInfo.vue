<template>
    <section class="account_info" id="first_section">
        <div class="cont">
            <!-- Main data -->
            <TheMainData />
        </div>

        <!-- Invite button -->
        <TheInviteButton />
    </section>
</template>


<script setup>
    // Components
    import TheInviteButton from '@/components/account/InviteButton.vue'
    import TheMainData from '@/components/account/MainData.vue'
</script>


<style scoped>
.account_info
{
    position: relative;

    padding: 69px 0 97px;
}
</style>
