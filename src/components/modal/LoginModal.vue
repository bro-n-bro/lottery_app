<template>
    <!-- Login modal -->
    <section class="modal" :class="{ closing: isClosing }">
        <div class="modal_content">
            <div class="data">
                <!-- Modal title -->
                <div class="modal_title">
                    <span>Admin</span>
                    <span>Admin</span>
                </div>

                <!-- Title -->
                <div class="title">Log In</div>

                <!-- Modal data -->
                 <div class="bg">
                    <div class="field">
                        <input type="password" class="input" v-model="password" placeholder="Password">
                    </div>
                 </div>

                 <button class="btn" @click.prevent="login()">
                    <span>Log in</span>
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
    <div class="modal_overlay" :class="{ closing: isClosing }"></div>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        notification = useNotification(),
        isClosing = ref(false),
        password = ref('')


    onBeforeMount(() => {
        // Get x-token to localstorage
        password.value = localStorage.getItem('x-token')
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "hide_login_modal"
            emitter.emit('hide_login_modal')
        }, 200)
    }


    // Login
    async function login() {
        try {
            // Set x-token to localstorage
            localStorage.setItem('x-token', password.value)

            // Draw lottery
            await store.drawLottery(password.value)

            // Create lottery
            await store.createLottery(password.value)

            // Close modal
            closeHandler()
        } catch (error) {
            console.error('LoginModal.vue:', error)

            // Show notification
            notification.notify({
                group: 'default',
                speed: 200,
                duration: 1000,
                title: 'Invalid token',
                type: 'error'
            })
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

        background: url(@/assets/bg_register_modal.svg) 0 0/100% 100% no-repeat;
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

        background: url(@/assets/bg_register_modal_points.svg) 0 0/100% 100% no-repeat;
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


    .title
    {
        font-size: 32px;
        font-weight: 700;

        margin-bottom: 26px;

        text-align: center;
    }


    .bg
    {
        padding: 26px 20px;

        border-radius: 20px;
        background: linear-gradient(180deg, #1b003b 0%, #2d0061 100%);
    }


    .field
    {
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #734fd2 0%,#1f064d 100%);
    }


    .field .input
    {
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;

        display: block;

        width: 100%;
        height: 46px;
        padding: 3px 15px;

        color: #fff;
        border: none;
        border-radius: 9px;
        background: #06000e;
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

        background: url(@/assets/bg_register_btn.svg) 0 0 /100% 100% no-repeat;
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