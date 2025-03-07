<template>
    <!-- Referral modal -->
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
                    <span>Extra tickets</span>
                    <span>Extra tickets</span>
                </div>

                <!-- Modal data -->
                <div class="text">Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets. Text about copy link, friends and extra tickets.</div>

                <div class="field_wrap">
                    <div class="field">
                        <span>{{ refURL }}</span>

                        <button class="copy_btn" @click.prevent="copyHandler()">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.2857 15.5137H11.1429C10.7696 15.5137 10.4643 15.2043 10.4643 14.8262V3.82617C10.4643 3.44805 10.7696 3.13867 11.1429 3.13867H17.0846L19.9643 6.05625V14.8262C19.9643 15.2043 19.6589 15.5137 19.2857 15.5137ZM11.1429 17.5762H19.2857C20.7828 17.5762 22 16.343 22 14.8262V6.05625C22 5.51055 21.7837 4.98633 21.402 4.59961L18.5266 1.68203C18.1449 1.29531 17.6275 1.07617 17.0888 1.07617H11.1429C9.64576 1.07617 8.42857 2.30938 8.42857 3.82617V14.8262C8.42857 16.343 9.64576 17.5762 11.1429 17.5762ZM5.71429 6.57617C4.21719 6.57617 3 7.80937 3 9.32617V20.3262C3 21.843 4.21719 23.0762 5.71429 23.0762H13.8571C15.3542 23.0762 16.5714 21.843 16.5714 20.3262V18.9512H14.5357V20.3262C14.5357 20.7043 14.2304 21.0137 13.8571 21.0137H5.71429C5.34107 21.0137 5.03571 20.7043 5.03571 20.3262V9.32617C5.03571 8.94805 5.34107 8.63867 5.71429 8.63867H7.07143V6.57617H5.71429Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>

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
    import { ref, inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useClipboard } from '@vueuse/core'
    import { useNotification } from '@kyvg/vue3-notification'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        notification = useNotification(),
        isClosing = ref(false),
        refURL = ref(`https://lottery.brondro.io?ref=${store.user.referral_token}`),
        { copy } = useClipboard()


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "hide_referral_modal"
            emitter.emit('hide_referral_modal')
        }, 200)
    }


    // Copy handler
    function copyHandler() {
        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 100,
            duration: 750,
            title: 'Copied to clipboard',
            type: 'copied'
        })

        // Copy
        copy(refURL.value)
    }
</script>


<style scoped>
    .data
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        height: 252px;
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

        background: url(@/assets/bg_referral_modal.svg) 0 0/100% 100% no-repeat;
    }


    .data:after
    {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;

        display: block;

        width: 818px;
        height: 311px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        background: url(@/assets/bg_referral_modal_points.svg) 0 0/100% 100% no-repeat;
    }


    .text
    {
        font-size: 16px;
        font-weight: 500;

        width: 100%;
        margin-bottom: 27px;
    }



    .field_wrap
    {
        width: 100%;
        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #734fd2 0%,#1f064d 100%);
    }


    .field
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        height: 46px;
        padding: 3px 15px;

        white-space: nowrap;

        border-radius: 9px;
        background: #06000e;
    }



    .field .copy_btn
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;
        bottom: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 24px;
        height: 100%;
        margin: auto 0;

        transition: opacity .2s linear;
    }


    .field .copy_btn svg
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .field .copy_btn:hover
    {
        opacity: .5;
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

        width: 850px;
        height: 345px;

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
        left: 5.8%;
    }

    .bulbs .bulb:nth-child(2)
    {
        top: 0;
        left: 18.8%;
    }

    .bulbs .bulb:nth-child(3)
    {
        top: 0;
        right: 18.8%;
    }

    .bulbs .bulb:nth-child(4)
    {
        top: 0;
        right: 5.8%;
    }

    .bulbs .bulb:nth-child(5)
    {
        top: 22.029%;
        right: 0;
    }

    .bulbs .bulb:nth-child(6)
    {
        top: 48.216%;
        right: 0;
    }

    .bulbs .bulb:nth-child(7)
    {
        top: 75.503%;
        right: 0;
    }

    .bulbs .bulb:nth-child(8)
    {
        right: 9.8%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(9)
    {
        right: 20.651%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(10)
    {
        right: 31.5%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(11)
    {
        right: 42%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(12)
    {
        right: 52.5%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(13)
    {
        right: 63.2%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(14)
    {
        right: 74.2%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(15)
    {
        right: 85.9%;
        bottom: 0;
    }

    .bulbs .bulb:nth-child(16)
    {
        top: 75.503%;
        left: 0;
    }

    .bulbs .bulb:nth-child(17)
    {
        top: 48.216%;
        left: 0;
    }

    .bulbs .bulb:nth-child(18)
    {
        top: 22.029%;
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