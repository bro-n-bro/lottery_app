<template>
    <!-- Register modal -->
    <section class="modal" :class="{ closing: isClosing }">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7992 1.41416C19.0181 0.633107 17.7518 0.633107 16.9707 1.41416L12.0209 6.36396L7.07125 1.41427C6.29021 0.633226 5.02388 0.633226 4.24283 1.41427L1.4144 4.2427C0.633351 5.02375 0.633351 6.29008 1.4144 7.07113L6.36409 12.0208L1.4144 16.9705C0.633351 17.7516 0.633351 19.0179 1.4144 19.7989L4.24283 22.6274C5.02388 23.4084 6.29021 23.4084 7.07125 22.6274L12.0209 17.6777L16.9707 22.6275C17.7518 23.4085 19.0181 23.4085 19.7992 22.6275L22.6276 19.799C23.4087 19.018 23.4087 17.7517 22.6276 16.9706L17.6778 12.0208L22.6276 7.07101C23.4087 6.28996 23.4087 5.02363 22.6276 4.24258L19.7992 1.41416Z" fill="currentColor"/>
                    </svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    <span>Consent</span>
                    <span>Consent</span>
                </div>

                <!-- Loader -->
                <TheLoader v-if="loading" />

                <!-- Modal data -->
                <div class="text">By confirming you agree to participate in the lottery.<br> Go and approve your Keplr transaction.</div>

                <div class="ref_code">
                    <div class="label">Referral code (optional):</div>

                    <div class="field">
                        <input type="text" class="input" v-model="store.user.referralCode" placeholder="Enter code">
                    </div>
                </div>

                <button class="btn" @click.prevent="register()">
                    <span>Registration</span>
                </button>

                <div class="bulbs">
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                    <div class="bulb"></div>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { addressConfirmation, getReferralCodeFromURL } from '@/utils'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        isClosing = ref(false),
        loading = ref(false)


    onBeforeMount(() => {
        // Get referral code from URL
        store.user.referralCode = getReferralCodeFromURL()
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "hide_register_modal"
            emitter.emit('hide_register_modal')
        }, 200)
    }


    async function register() {
        // Show loading
        loading.value = true

        try {
            // Address confirmation
            await addressConfirmation()

            // Register user
            await store.registerUser()

            // Get user info
            await store.getUserInfo()

            // Hide loading
            loading.value = false

            // Close modal
            closeHandler()
        } catch (error) {
            console.error('Error registering user:', error)

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


    .data:after
    {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;

        display: block;

        width: 508px;
        height: 461px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        background: url('@/assets/bg_register_modal_points.svg') 0 0/100% 100% no-repeat;
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
        margin: 0 auto;
    }


    .ref_code
    {
        width: 340px;
        max-width: 100%;
        margin: 17px auto 0;
    }


    .ref_code .label
    {
        font-size: 14px;

        padding: 0 10px;
    }


    .ref_code .field ::-webkit-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .ref_code .field :-moz-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .ref_code .field ::-moz-placeholder
    {
        opacity: 1;
        color: rgba(255,255,255,.6);
    }

    .ref_code .field :-ms-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }


    .ref_code .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .ref_code .input,
    .ref_code .input:focus
    {
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;

        display: block;

        width: 100%;
        height: 46px;
        padding: 0 15px;

        color: currentColor;
        border: 1px solid transparent;
        border-radius: 9px;
        background: #06000e;
    }


    .ref_code .input:-webkit-autofill
    {
        -webkit-box-shadow: inset 0 0 0 50px #170232 !important;
    }


    .ref_code .input.error
    {
        border-color: #f00;
    }

    .ref_code .input.success
    {
        border-color: #00aa63;
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



    .bulbs
    {
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 50%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 540px;
        height: 477px;
        margin-top: 10px;

        transform: translate(-50%, -50%);
        pointer-events: none;
    }


    .bulbs .bulb
    {
        position: absolute;

        width: 43px;
        height: 43px;

        border-radius: 50%;
        background: radial-gradient(49.99% 49.99% at 50.01% 50%, #fff 0%, #fff 20.75%, rgba(255, 255, 216, .93) 26%, rgba(255, 255, 166, .84) 33.57%, rgba(255, 255, 121, .74) 41.53%, rgba(255, 255, 84, .63) 49.72%, rgba(255, 255, 53, .53) 58.21%, rgba(255, 255, 30, .42) 67.08%, rgba(255, 255, 13, .30) 76.51%, rgba(255, 255, 3, .17) 86.88%, rgba(255, 255, 0, .00) 100%);
    }


    .bulbs .bulb:nth-child(1)
    {
        top: 0;
        left: 1.852%;
    }

    .bulbs .bulb:nth-child(2)
    {
        top: 0;
        right: 1.852%;
    }

    .bulbs .bulb:nth-child(3)
    {
        top: 14.046%;
        right: 0;
    }

    .bulbs .bulb:nth-child(4)
    {
        top: 33.004%;
        right: 0;
    }

    .bulbs .bulb:nth-child(5)
    {
        top: 51.872%;
        right: 0;
    }

    .bulbs .bulb:nth-child(6)
    {
        top: 70.740%;
        right: 0;
    }

    .bulbs .bulb:nth-child(7)
    {
        right: 2.818%;
        bottom: 2.096%;
    }

    .bulbs .bulb:nth-child(8)
    {
        right: 19.777%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(9)
    {
        right: 36.5%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(10)
    {
        right: 53.318%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(11)
    {
        right: 70%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(12)
    {
        bottom: 2.096%;
        left: 3.918%;
    }

    .bulbs .bulb:nth-child(13)
    {
        top: 70.740%;
        left: 0;
    }

    .bulbs .bulb:nth-child(14)
    {
        top: 51.872%;
        left: 0;
    }

    .bulbs .bulb:nth-child(15)
    {
        top: 33.004%;
        left: 0;
    }

    .bulbs .bulb:nth-child(16)
    {
        top: 14.046%;
        left: 0;
    }


    .bulbs .bulb:nth-child(odd)
    {
        animation: blink2 1s infinite steps(1, end);
    }

    .bulbs .bulb:nth-child(even)
    {
        animation: blink2 1s infinite steps(1, end) reverse;
    }
</style>