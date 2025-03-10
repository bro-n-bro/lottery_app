<template>
    <!-- User referrals -->
    <section class="referrals" id="referrals">
        <div class="cont">
            <div class="data" :class="{ small: !store.user.referrals?.length }">
                <div class="title"></div>

                <!-- Loader -->
                <TheLoader v-if="loading" />

                <!-- Referrals -->
                <template v-else-if="store.user.referrals?.length">
                <div class="list">
                    <!-- Referral -->
                    <div class="item" v-for="(referral, index) in store.user.referrals" :key="index">
                        <div class="number"></div>

                        <div class="address">{{ referral.address.slice(0, 5) + '...' + referral.address.slice(-6) }}</div>

                        <div class="tickets" :class="{ inactive: !referral.tickets }">
                            <span>{{ referral.tickets }}</span>

                            <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8632 9.885C22.6992 9.31661 22.7677 8.70635 23.0536 8.18846C23.3396 7.67058 23.8195 7.28749 24.3879 7.12348L23.1511 2.83725C22.9871 2.26886 22.604 1.7889 22.0861 1.50296C21.5683 1.21703 20.958 1.14853 20.3896 1.31254L3.24468 6.25977C2.67629 6.42378 2.19633 6.80687 1.91039 7.32475C1.62445 7.84264 1.55596 8.4529 1.71997 9.02129L2.95677 13.3075C3.52516 13.1435 4.13543 13.212 4.65331 13.4979C5.1712 13.7839 5.55428 14.2638 5.71829 14.8322C5.88231 15.4006 5.81381 16.0109 5.52787 16.5288C5.24193 17.0467 4.76197 17.4297 4.19358 17.5938L5.43039 21.88C5.5944 22.4484 5.97749 22.9283 6.49537 23.2143C7.01326 23.5002 7.62352 23.5687 8.19191 23.4047L25.3368 18.4575C25.9052 18.2935 26.3852 17.9104 26.6711 17.3925C26.9571 16.8746 27.0256 16.2643 26.8616 15.6959L25.6247 11.4097C25.0564 11.5737 24.4461 11.5052 23.9282 11.2193C23.4103 10.9333 23.0272 10.4534 22.8632 9.885ZM9.90703 16.6108C10.2236 17.0069 10.793 17.271 11.4247 17.4153C12.2586 17.6057 13.2277 17.5943 13.9425 17.388L17.6606 16.3152C18.3754 16.1089 19.2016 15.6023 19.8058 14.9969C20.2636 14.5382 20.6047 14.0114 20.6616 13.5075L17.3836 14.4593C16.3792 14.7491 15.7038 15.5808 15.6859 16.4509C15.2072 15.7241 14.1926 15.3801 13.1882 15.6699L9.90703 16.6108ZM10.7399 15.0419C10.0864 14.8222 9.48849 14.4592 9.13944 13.9507L12.421 13.0111C13.4254 12.7213 14.4824 13.2123 15.0187 14.1387C14.979 13.069 15.612 12.0904 16.6164 11.8005L19.894 10.8474C19.8696 11.4637 19.557 12.0894 19.121 12.6235C18.5454 13.3284 17.7371 13.8969 17.0223 14.1031L13.3042 15.176C12.5894 15.3823 11.6025 15.3318 10.7399 15.0419ZM8.98678 13.4216C9.01124 12.8053 9.32382 12.1796 9.75985 11.6455C10.3354 10.9406 11.1437 10.3721 11.8585 10.1658L15.5766 9.09299C16.2914 8.88673 17.2783 8.93716 18.1409 9.22712C18.7944 9.4468 19.3923 9.80976 19.7414 10.3183L16.4598 11.2578C15.4554 11.5476 14.3984 11.0567 13.8621 10.1303C13.9018 11.2 13.2688 12.1786 12.2644 12.4684L8.98678 13.4216ZM9.06676 9.24356C8.60898 9.70226 8.26787 10.2291 8.21095 10.7329L11.489 9.78112C12.4933 9.49131 13.1687 8.65963 13.1867 7.78955C13.6653 8.51634 14.68 8.86033 15.6844 8.57052L18.9655 7.62964C18.6489 7.23357 18.0796 6.96948 17.4478 6.82517C16.6139 6.6347 15.6449 6.64616 14.93 6.85242L11.212 7.92528C10.4972 8.13153 9.67101 8.6381 9.06676 9.24356Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="ref_url">
                    <span>{{ refURL }}</span>

                    <button class="copy_btn" @click.prevent="copyHandler()">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.2857 15.5137H11.1429C10.7696 15.5137 10.4643 15.2043 10.4643 14.8262V3.82617C10.4643 3.44805 10.7696 3.13867 11.1429 3.13867H17.0846L19.9643 6.05625V14.8262C19.9643 15.2043 19.6589 15.5137 19.2857 15.5137ZM11.1429 17.5762H19.2857C20.7828 17.5762 22 16.343 22 14.8262V6.05625C22 5.51055 21.7837 4.98633 21.402 4.59961L18.5266 1.68203C18.1449 1.29531 17.6275 1.07617 17.0888 1.07617H11.1429C9.64576 1.07617 8.42857 2.30938 8.42857 3.82617V14.8262C8.42857 16.343 9.64576 17.5762 11.1429 17.5762ZM5.71429 6.57617C4.21719 6.57617 3 7.80937 3 9.32617V20.3262C3 21.843 4.21719 23.0762 5.71429 23.0762H13.8571C15.3542 23.0762 16.5714 21.843 16.5714 20.3262V18.9512H14.5357V20.3262C14.5357 20.7043 14.2304 21.0137 13.8571 21.0137H5.71429C5.34107 21.0137 5.03571 20.7043 5.03571 20.3262V9.32617C5.03571 8.94805 5.34107 8.63867 5.71429 8.63867H7.07143V6.57617H5.71429Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                </template>

                <div class="empty" v-else>
                    <div class="sub_title">Invite your friend and get extra tickets</div>

                    <button class="btn" @click.prevent="openModal()">INVITE</button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useClipboard } from '@vueuse/core'
    import { useNotification } from '@kyvg/vue3-notification'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        notification = useNotification(),
        loading = ref(false),
        refURL = ref(`https://lottery.bronbro.io?ref=${store.user.referral_token}`),
        { copy } = useClipboard()


    onBeforeMount(async () => {
        try {
            // Get user referrals
            await store.getUserReferrals()
        } catch (error) {
            console.error('Referrals.vue:', error)

            // Hide loading
            loading.value = false
        }
    })


    // Open modal
    function openModal() {
        // Event "show_referral_modal"
        emitter.emit('show_referral_modal')
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
    .referrals
    {
        position: relative;
        z-index: 3;

        margin-bottom: 100px;
        padding-top: 60px;
    }


    .referrals .data
    {
        position: relative;

        width: 1100px;
        max-width: 100%;
        height: 396px;
        margin: 0 auto;
        padding: 51px 51px 41px;

        border-radius: 42px;
        background: radial-gradient(106.93% 106.93% at 50% 0%, rgba(52, 255, 38, .40) 0%, rgba(53, 255, 38, .00) 100%), #002e05;
    }


    .referrals .data:before
    {
        position: absolute;
        z-index: 1;
        top: -1px;
        left: 50%;

        display: block;

        width: 1160px;
        max-width: calc(100% + 60px);
        height: 424px;

        content: '';
        transform: translateX(-50%);
        pointer-events: none;

        background: url(@/assets/bg_referrals.svg) 0 0/100% 100% no-repeat;
    }


    .referrals .data.small
    {
        height: 196px;
        padding: 56px;
    }

    .referrals .data.small:before
    {
        height: 224px;

        background: url(@/assets/bg_referrals_small.svg) 0 0/100% 100% no-repeat;
    }


    .referrals .title
    {
        position: absolute;
        z-index: 3;
        top: -52px;
        right: 0;
        left: 0;

        width: 242px;
        height: 91px;
        margin: 0 auto;

        pointer-events: none;

        background: url(@/assets/referrals_title.svg) 0 0/100% 100% no-repeat;
    }


    .referrals .list
    {
        display: flex;
        overflow: auto;
        flex-direction: column;

        height: 244px;
        padding: 20px;

        counter-reset: number;

        border-radius: 10px;
        background: linear-gradient(180deg, #002e05 0%, #005a09 100%);

        overscroll-behavior-y: contain;
        gap: 10px;
    }


    .referrals .list::-webkit-scrollbar
    {
        display: none;

        width: 0;
        height: 0;

        background-color: none;
    }


    .referrals .list::-webkit-scrollbar-thumb
    {
        background-color: none;
    }


    .referrals .item
    {
        font-size: 20px;
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 9px 20px;

        border-radius: 10px;
        background: rgba(0, 0, 0, .70);
        box-shadow: 0 2px 4.5px 0 rgba(255, 255, 255, .15), 0 -2px 4.5px 0 rgba(38, 0, 0, .45);
    }


    .referrals .item .number
    {
        font-weight: 500;

        width: 24px;
        margin-right: 4px;
    }


    .referrals .item .number:before
    {
        content: counter(number) '.';
        counter-increment: number;
    }


    .referrals .item .address
    {
        font-weight: 500;
    }


    .referrals .item .tickets
    {
        font-weight: 900;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        margin-left: auto;

        gap: 6px;
    }


    .referrals .item .tickets svg
    {
        display: block;

        width: 28px;
        height: 25px;
    }


    .referrals .item .tickets.inactive
    {
        opacity: .4;
    }



    .referrals .ref_url
    {
        font-size: 20px;
        font-weight: 500;

        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        margin-top: 20px;
        padding: 8px 15px;

        border-radius: 6px;
        background: rgba(0, 0, 0, .70);
        box-shadow: 0 2px 4.5px 0 rgba(255, 255, 255, .15), 0 -2px 4.5px 0 rgba(38, 0, 0, .45);
    }



    .referrals .ref_url .copy_btn
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


    .referrals .ref_url .copy_btn svg
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .referrals .ref_url .copy_btn:hover
    {
        opacity: .5;
    }



    .referrals .empty
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 8px 10px 8px 30px;

        border-radius: 10px;
        background: linear-gradient(180deg, #002e05 0%, #005a09 100%);
    }


    .referrals .empty .sub_title
    {
        font-size: 32px;
        font-weight: 600;
    }


    .referrals .empty .btn
    {
        font-size: 28px;
        font-weight: 900;

        width: 264px;
        max-width: 100%;
        height: 68px;

        text-transform: uppercase;

        background: url(@/assets/bg_referrals_invite_btn.svg) 0 0/100% 100% no-repeat;
    }



    @media print, (max-width: 1439px)
    {
        .referrals .empty .sub_title
        {
            font-size: 30px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .referrals
        {
            margin-bottom: 92px;
        }


        .referrals .data,
        .referrals .data.small
        {
            width: 924px;
            padding: 56px 48px 48px;
        }


        .referrals .data.small
        {
            height: 184px;
        }


        .referrals .data.small:before
        {
            height: 210px;
        }


        .referrals .empty .sub_title
        {
            font-size: 28px;
        }


        .referrals .empty .btn
        {
            font-size: 26px;

            width: 252px;
            height: 64px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .referrals
        {
            margin-bottom: 68px;
        }


        .referrals .data,
        .referrals .data.small
        {
            width: calc(100% - 48px);
            height: 328px;
            padding: 56px 32px 32px;
        }


        .referrals .data:before
        {
            max-width: calc(100% + 36px);
            height: 352px;
        }


        .referrals .data.small
        {
            height: 230px;
        }


        .referrals .data.small:before
        {
            max-width: calc(100% + 36px);
            height: 262px;
        }


        .referrals .item
        {
            font-size: 18px;

            padding: 8px 20px;
        }


        .referrals .list
        {
            height: 181px;
        }


        .referrals .ref_url
        {
            font-size: 18px;
        }


        .referrals .empty
        {
            padding: 16px;
        }


        .referrals .empty .sub_title
        {
            font-size: 24px;

            width: 100%;

            text-align: center;
        }


        .referrals .empty .btn
        {
            font-size: 24px;

            width: 240px;
            height: 60px;
            margin: 12px auto 0;
        }
    }



    @media print, (max-width: 767px)
    {
        .referrals
        {
            margin-bottom: 60px;
            padding-top: 48px;
        }


        .referrals .title
        {
            top: -40px;

            width: 181px;
            height: 68px;
        }


        .referrals .empty
        {
            padding: 0;

            border-radius: 0;
            background: none;
        }


        .referrals .empty .sub_title
        {
            font-size: 22px;
        }


        .referrals .empty .btn
        {
            font-size: 20px;

            width: 179px;
            height: 46px;
        }


        .referrals .data,
        .referrals .data.small
        {
            width: 420px;
            height: 241px;
            padding: 40px 24px 24px;

            border-radius: 20px;
        }


        .referrals .data:before,
        .referrals .data.small:before
        {
            top: -6px;

            width: calc(100% + 40px);
            max-width: calc(100% + 40px);
            height: 250px;

            background: url(@/assets/bg_mob_referrals.svg) 0 0/100% 100% no-repeat;
        }


        .referrals .list
        {
            height: 121px;
            padding: 16px;

            gap: 8px;
        }


        .referrals .item
        {
            font-size: 16px;

            padding: 8px 16px;
        }


        .referrals .item .tickets svg
        {
            width: 24px;
            height: 21px;
        }


        .referrals .ref_url
        {
            font-size: 16px;

            margin-top: 16px;
        }
    }



    @media print, (max-width: 479px)
    {
        .referrals
        {
            margin-bottom: 52px;
            padding-top: 40px;
        }


        .referrals .title
        {
            top: -32px;

            width: 149px;
            height: 56px;
        }


        .referrals .data,
        .referrals .data.small
        {
            width: 335px;
            height: 194px;
            padding: 32px 16px 16px;

            border-radius: 16px;
        }


        .referrals .data:before,
        .referrals .data.small:before
        {
            top: -3px;

            width: calc(100% + 18px);
            max-width: calc(100% + 18px);
            height: 200px;
        }


        .referrals .list
        {
            height: 97px;
            padding: 10px;

            gap: 4px;
        }


        .referrals .item
        {
            font-size: 14px;

            padding: 4px 12px;
        }


        .referrals .item .number
        {
            width: 16px;
        }


        .referrals .item .tickets svg
        {
            width: 20px;
            height: 18px;
        }


        .referrals .ref_url
        {
            font-size: 13px;
            line-height: 17px;

            padding-left: 10px;
        }


        .referrals .ref_url .copy_btn
        {
            right: 12px;

            width: 20px;
        }


        .referrals .empty .sub_title
        {
            font-size: 18px;
        }


        .referrals .empty .btn
        {
            font-size: 18px;

            width: 179px;
            height: 46px;
            margin-top: 8px;
        }
    }
</style>
