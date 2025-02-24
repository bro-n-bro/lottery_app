<template>
    <!-- Register modal -->
    <section class="modal">
        <div class="modal_content">
            <div class="data">
                <!-- Modal title -->
                <div class="modal_title">
                    <span>Consent</span>
                    <span>Consent</span>
                </div>

                <!-- Loader -->
                <TheLoader v-if="loading" />

                <!-- Modal data -->
                <div class="text">By confirming you agree to participate in the lottery.<br> Go and approve your Kepler transaction.</div>

                <button class="btn" @click.prevent="register()">
                    <span>Registration</span>
                </button>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay"></div>
</template>


<script setup>
    import { ref } from 'vue'
    import { useGlobalStore } from '@/store'
    import { addressConfirmation } from '@/utils'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        loading = ref(false)


    async function register() {
        // Show loading
        loading.value = true

        try {
            // Address confirmation
            await addressConfirmation()

            // Register user
            // await store.registerUser()
        } catch (error) {
            console.error('Error connecting to Keplr:', error)

            // Hide loading
            loading.value = false
        }
    }
</script>


<style scoped>
.data
{
    display: flex;
    flex-direction: column;

    width: 450px;
    height: 412px;
    padding: 63px 33px 24px;
}


.data:before
{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    display: block;

    width: 100%;
    height: 100%;

    content: '';
    pointer-events: none;

    background: url('@/assets/bg_register_modal.svg') 0 0/100% 100% no-repeat;
}


.loader_wrap
{
    z-index: 10;

    width: calc(100% - 10px);
    height: calc(100% - 10px);
    margin: auto;

    border-radius: 33px;

    inset: 0;
}


.text
{
    font-size: 18px;
    font-weight: 500;

    width: 340px;
    max-width: 100%;
    margin: 0 auto 17px;
}


.btn
{
    font-size: 28px;
    font-weight: 900;

    display: block;

    width: 384px;
    height: 68px;
    margin: auto auto 0;

    text-transform: capitalize;

    background: url('@/assets/bg_register_btn.svg') 0 0 /100% 100% no-repeat;
}


</style>