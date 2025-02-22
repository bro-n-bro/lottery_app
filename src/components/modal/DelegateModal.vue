<template>
    <!-- Delegate modal -->
    <section class="modal" :class="{ closing: isClosing }">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()"></button>

                <!-- Modal title -->
                <div class="modal_title">
                    <span>Get your tickets</span>
                    <span>Get your tickets</span>
                </div>

                <!-- Loader -->
                <TheLoader v-if="loading" />

                <template v-else>
                <!-- Modal data -->
                <div class="tabs">
                    <button class="btn" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">
                        <span>Delegate</span>
                    </button>

                    <button class="btn" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }">
                        <span>Redelegate</span>
                    </button>
                </div>


                <form action="" class="form">
                    <div class="bg">
                        <div class="validator">
                            <div class="logo"><div>
                                <img src="@/assets/bro_n_bro_logo.svg" alt="" loading="lazy">
                            </div></div>

                            <div>
                                <div class="label">Your validator:</div>

                                <div class="name">Bro_n_Bro</div>
                            </div>
                        </div>

                        <div class="balances">
                            <div>
                                <div class="label">Available</div>

                                <div class="val">
                                    <span v-if="!store.availableBalance.length">0</span>
                                    <span v-else>{{ formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}</span> <span class="symbol">{{ store.currentNetwork.symbol }}</span>
                                </div>

                                <div class="cost">${{ calcTokenCost(formatTokenCost(formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent))) }}</div>
                            </div>

                            <div>
                                <div class="label">Total Staked</div>

                                <div class="val">
                                    <span>{{ store.user.amount }}</span> <span class="symbol">{{ store.currentNetwork.symbol }}</span>
                                </div>

                                <div class="cost">${{ calcTokenCost(formatTokenCost(store.user.amount)) }}</div>
                            </div>
                        </div>

                        <div class="from_validator" v-if="activeTab === 2">
                            <div class="label">Change validator from <b>(15)</b>:</div>

                            <div class="field">
                                <input type="text" readonly v-model="from_validator" class="input" placeholder="Choose your validator">

                                <svg class="arr" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 11.3497L14.5 18.3497L21.5 11.3497" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>

                        <div class="amount">
                            <div class="label">
                                <span>Amount:</span>

                                <span class="cost">48$</span>
                            </div>

                            <div class="field">
                                <input type="text" v-model="amount" class="input" :placeholder="`${store.currentNetwork.symbol} Amount`">

                                <button type="button" class="max_btn" @click.prevent="setMaxAmount()">MAX</button>

                                <div class="tickets">
                                    <span>=</span>

                                    <span>{{ tickets }}</span>

                                    <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.8826 22.4488L21.7976 21.5478L17.7896 27.4591L16.707 20.6019L9.81716 18.9352L16.2278 15.5761L15.9782 8.66352L20.9996 13.4208L27.758 10.8319L24.4535 17.103M32.5198 12.2473C32.165 11.4617 32.1512 10.5609 32.4814 9.74298C32.8116 8.92505 33.4588 8.25702 34.2806 7.88584L31.605 1.96205C31.2502 1.17651 30.5835 0.570586 29.7515 0.277587C28.9195 -0.0154126 27.9904 0.0285075 27.1686 0.399687L2.37985 11.596C1.55805 11.9671 0.910853 12.6352 0.580637 13.4531C0.250422 14.271 0.264235 15.1718 0.619039 15.9574L3.29462 21.8812C4.11642 21.51 5.0455 21.4661 5.87749 21.7591C6.70947 22.0521 7.3762 22.658 7.731 23.4435C8.08581 24.2291 8.09962 25.1299 7.7694 25.9478C7.43919 26.7657 6.79199 27.4338 5.97019 27.805L8.64577 33.7287C9.00058 34.5143 9.6673 35.1202 10.4993 35.4132C11.3313 35.7062 12.2604 35.6623 13.0822 35.2911L37.8709 24.0948C38.6927 23.7237 39.3399 23.0556 39.6701 22.2377C40.0004 21.4198 39.9866 20.519 39.6317 19.7334L36.9562 13.8096C36.1344 14.1808 35.2053 14.2247 34.3733 13.9317C33.5413 13.6387 32.8746 13.0328 32.5198 12.2473Z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="submit">
                        <button type="submit" class="submit_btn">
                            <span v-if="activeTab === 1">DELEGATE</span>
                            <span v-if="activeTab === 2">REDELEGATE</span>
                        </button>
                    </div>
                </form>
            </template>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, formatTokenCost, calcTokenCost } from '@/utils'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        isClosing = ref(false),
        activeTab = ref(1),
        tickets = ref(0),
        loading = ref(true)


    onBeforeMount(async () => {
        try {
            await Promise.all([
                // Get prices
                store.getPrices(),

                // Get available balance
                store.getAvailableBalance()
            ])

            // Hide loading
            loading.value = false
        } catch (error) {
            console.error(`DelegateModal.vue: ${error.message}`)
        }
    })


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "hide_delegate_modal"
            emitter.emit('hide_delegate_modal')
        }, 200)
    }
</script>


<style scoped>
    .data
    {
        display: flex;
        flex-direction: column;

        width: 450px;
        height: 512px;
        padding: 0 25px 25px;
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

        background: url('@/assets/bg_delegate_modal.svg') 0 0/100% 100% no-repeat;
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



    .tabs
    {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        flex-wrap: nowrap;
        justify-content: space-between;

        width: calc(100% + 50px);
        margin-right: -25px;
        margin-bottom: 16px;
        margin-left: -25px;
    }


    .tabs .btn
    {
        font-size: 28px;
        font-weight: 900;

        width: 226px;
        height: 89px;
        padding: 28px 12px 12px;

        transition: color .2s linear;

        color: #d09408;
    }


    .btn:first-child
    {
        background: url('@/assets/bg_delegate_tab.svg') 0 0/100% 100% no-repeat;
    }

    .btn:last-child
    {
        background: url('@/assets/bg_redelegate_tab.svg') 0 0/100% 100% no-repeat;
    }


    .tabs .btn.active
    {
        color: #fff;
        background: none;
    }



    .bg
    {
        padding: 18px 20px;

        border-radius: 20px;
        background: linear-gradient(180deg, #1b003b 0%, #2d0061 100%);
    }



    .form
    {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;

        gap: 16px;
    }


    .form .validator
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 12px;
    }


    .form .validator .logo
    {
        padding: 1px;

        border-radius: 50%;
        background: linear-gradient(180deg, #ae47ff 0%, #5a0999 100%);
    }


    .form .validator .logo div
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 52px;
        height: 52px;
        padding: 10px;

        border-radius: 50%;
        background: #950fff;
    }


    .form .validator .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;
    }


    .form .validator .logo + *
    {
        align-self: center;

        width: calc(100% - 66px);
    }


    .form .validator .label
    {
        font-size: 14px;
    }


    .form .validator .name
    {
        font-size: 32px;
        font-weight: 600;

        margin-top: -8px;
    }


    .form .balances
    {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 4px;
    }


    .form .balances > *
    {
        width: calc(50% - 6px);
        padding: 4px 8px;

        border-radius: 6px;
        background: #06000e;
    }


    .form .balances .label
    {
        font-size: 12px;
        font-weight: 500;
    }


    .form .balances .val
    {
        font-size: 12px;
        font-weight: 300;
    }


    .form .balances .val .symbol
    {
        font-weight: 400;

        margin-left: 6px;
    }


    .form .balances .cost
    {
        font-size: 12px;
        font-weight: 300;

        color: rgba(255, 255, 255, .60);
    }


    .form .from_validator
    {
        margin-bottom: 4px;
    }


    .form .from_validator .field
    {
        position: relative;

        cursor: pointer;
    }


    .form .from_validator .label
    {
        font-size: 14px;

        padding: 0 10px;
    }


    .form .from_validator .input
    {
        pointer-events: none;
    }


    .form .from_validator .arr
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 10px;
        bottom: 0;

        display: block;

        width: 28px;
        height: 28px;
        margin: auto 0;

        pointer-events: none;
    }


    .form .amount
    {
        width: 280px;
        max-width: 100%;
    }


    .form .amount .label
    {
        font-size: 14px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 0 10px;
    }


    .form .amount .label .cost
    {
        color: rgba(255, 255, 255, .70);
    }


    .form .field
    {
        position: relative;

        padding: 1px;

        border-radius: 10px;
        background: linear-gradient(to bottom,  #5d33ce 0%,#200750 100%);
    }


    .form ::-webkit-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .form :-moz-placeholder
    {
        color: rgba(255,255,255,.6);
    }

    .form ::-moz-placeholder
    {
        opacity: 1;
        color: rgba(255,255,255,.6);
    }

    .form :-ms-input-placeholder
    {
        color: rgba(255,255,255,.6);
    }


    .form .input,
    .form .input:focus
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


    .form .input:-webkit-autofill
    {
        -webkit-box-shadow: inset 0 0 0 50px #170232 !important;
    }


    .form .input:disabled
    {
        pointer-events: none;

        opacity: .6;
    }


    .form .input.error
    {
        border-color: #f00;
    }

    .form .input.success
    {
        border-color: #00aa63;
    }


    .form .max_btn
    {
        font-size: 16px;
        font-weight: 500;

        position: absolute;
        z-index: 3;
        top: 0;
        right: 16px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 36px;
        height: 100%;
        padding: 3px 0;

        text-align: center;
        text-transform: uppercase;
    }


    .form .tickets
    {
        position: absolute;
        top: 0;
        left: 100%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: flex-start;

        height: 48px;
        margin-left: 9px;

        white-space: nowrap;

        gap: 6px;
    }


    .form .tickets svg
    {
        display: block;

        width: 40px;
        height: 36px;
    }


    .form .submit
    {
        margin-top: auto;
    }


    .form .submit_btn
    {
        font-size: 28px;
        font-weight: 900;

        display: block;

        width: 264px;
        height: 68px;
        margin: 0 auto;

        text-transform: capitalize;

        background: url('@/assets/bg_delegate_btn.svg') 0 0 /100% 100% no-repeat;
    }

</style>