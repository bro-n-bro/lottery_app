<template>
    <!-- Delegate modal -->
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

                    <button class="btn" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }" v-if="store.redelegations.length">
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
                                    <span v-else>{{ formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }}</span>

                                    <span class="symbol">{{ store.currentNetwork.symbol }}</span>
                                </div>

                                <div class="cost">${{ calcTokenCost(formatTokenCost(formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent))) }}</div>
                            </div>

                            <div>
                                <div class="label">Total Staked</div>

                                <div class="val">
                                    <span>{{ store.user.amount }}</span>

                                    <span class="symbol">{{ store.currentNetwork.symbol }}</span>
                                </div>

                                <div class="cost">${{ calcTokenCost(formatTokenCost(store.user.amount)) }}</div>
                            </div>
                        </div>

                        <div class="from_validator" v-if="activeTab === 2">
                            <div class="label">Change validator from <b>({{ store.redelegations.length }})</b>:</div>

                            <div class="field">
                                <input type="text" readonly v-model="validatorFrom" class="input" placeholder="Choose your validator">

                                <svg class="arr" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 11.3497L14.5 18.3497L21.5 11.3497" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>

                        <div class="amount">
                            <div class="label">
                                <span>Amount:</span>

                                <span class="cost" v-if="isAmountReady">
                                    ${{ calcTokenCost(formatTokenCost(amount)) }}
                                </span>
                            </div>

                            <div class="field" :class="{ disabled: activeTab === 2 && !validatorFrom }">
                                <input type="number" inputmode="decimal" class="input big" v-model="amount"
                                    :placeholder="`${store.currentNetwork.symbol} Amount`"
                                    @input="validateAmount()">

                                <button type="button" class="max_btn" @click.prevent="setMaxAmount()">MAX</button>

                                <div class="tickets">
                                    <span>=</span>

                                    <span>{{ tickets }}</span>

                                    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8982 17.027L13.9162 13.9675L8.93418 17.027L10.4371 11.5465L5.85871 7.98146L11.7731 7.6356L13.9162 2.39452L16.0593 7.6356L21.9736 7.98146L17.3952 11.5465M25.0491 10.6419C25.0491 9.93631 25.3423 9.25961 25.8643 8.76068C26.3863 8.26175 27.0942 7.98146 27.8323 7.98146V2.66057C27.8323 1.95497 27.5391 1.27828 27.0172 0.779348C26.4952 0.280418 25.7873 0.00012207 25.0491 0.00012207H2.78323C2.04507 0.00012207 1.33715 0.280418 0.81519 0.779348C0.293233 1.27828 0 1.95497 0 2.66057V7.98146C0.73816 7.98146 1.44609 8.26175 1.96804 8.76068C2.49 9.25961 2.78323 9.93631 2.78323 10.6419C2.78323 11.3475 2.49 12.0242 1.96804 12.5231C1.44609 13.022 0.73816 13.3023 0 13.3023V18.6232C0 19.3288 0.293233 20.0055 0.81519 20.5045C1.33715 21.0034 2.04507 21.2837 2.78323 21.2837H25.0491C25.7873 21.2837 26.4952 21.0034 27.0172 20.5045C27.5391 20.0055 27.8323 19.3288 27.8323 18.6232V13.3023C27.0942 13.3023 26.3863 13.022 25.8643 12.5231C25.3423 12.0242 25.0491 11.3475 25.0491 10.6419Z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="submit">
                        <button type="submit" class="submit_btn" :class="{ disabled: !isFormValid }">
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
    import { ref, inject, onBeforeMount, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { formatTokenAmount, formatTokenCost, calcTokenCost } from '@/utils'
    import { MsgDelegate, MsgBeginRedelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        isClosing = ref(false),
        activeTab = ref(1),
        validatorFrom = ref(null),
        isAmountReady = ref(false),
        amount = ref(''),
        tickets = ref(0),
        msgAny = ref([]),
        loading = ref(true),
        isFormValid = computed(() => {
            if (!isAmountReady.value) return false

            if (activeTab.value === 2) {
                return !!validatorFrom.value
            }

            return true
        })


    onBeforeMount(async () => {
        try {
            await Promise.all([
                // Get prices
                store.getPrices(),

                // Get available balance
                store.getAvailableBalance(),

                // Get redelegations
                store.getRedelegations()
            ])

            // Hide loading
            loading.value = false
        } catch (error) {
            console.error(`DelegateModal.vue: ${error.message}`)
        }
    })


    watch(computed(() => isFormValid.value), () => {
        if (isFormValid.value && activeTab.value === 1) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
                value: MsgDelegate.fromPartial({
                    delegatorAddress: store.user.address,
                    validatorAddress: store.validatorAddress,
                    amount: {
                        denom: store.currentNetwork.denom,
                        amount: `${parseFloat((amount.value).toString().replace(',', '.')).toFixed(store.currentNetwork.exponent) * Math.pow(10, store.currentNetwork.exponent)}`
                    }
                })
            }]
        }


        if (isFormValid.value && activeTab.value === 2) {
            // Set messeges
            msgAny.value = [{
                typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
                value: MsgBeginRedelegate.fromPartial({
                    delegatorAddress: store.user.address,
                    validatorSrcAddress: validatorFrom.operator_address,
                    validatorDstAddress: store.validatorAddress,
                    amount: {
                        denom: store.currentNetwork.denom,
                        amount: `${parseFloat((amount.value).toString().replace(',', '.')).toFixed(store.currentNetwork.exponent) * Math.pow(10, store.currentNetwork.exponent)}`
                    }
                })
            }]
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


    // Validate amount
    function validateAmount() {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Separator replacement
            Number(String(amount.value).replace(/,/g, "."))

            // Negative value
            if (String(amount.value).length && amount.value < 0) {
                // Set empty
                amount.value = ''
            }

            // Acceptable value
            if (amount.value && amount.value > 0 && amount.value < formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent)) {
                // Set amount status
                isAmountReady.value = true
            }

            // More than available balance
            if (amount.value > formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent)) {
                // Set MAX amount
                setMaxAmount()
            }

            // Calc new tickets
            calcNewTickets()
        })
    }


    // Set MAX amount
    function setMaxAmount() {
        // Set amount status
        isAmountReady.value = false

        setTimeout(() => {
            // Set amount
            amount.value = formatTokenAmount(store.availableBalance[0].amount, store.currentNetwork.exponent)

            // Calc new tickets
            calcNewTickets()

            // Set amount status
            isAmountReady.value = true
        })
    }


    // Calc new tickets
    function calcNewTickets() {
        const scale = 1000000,
            ticketCount = Math.floor(amount.value / store.ticketPrice),
            remainder = (Math.round(amount.value * scale) % Math.round(store.ticketPrice * scale)) / scale,
            stakedRemainder = (Math.round(store.user.amount * scale) % Math.round(store.ticketPrice * scale)) / scale

        // set data
        tickets.value = ticketCount + Math.floor((remainder +  stakedRemainder) / store.ticketPrice)
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

        margin-left: 2px;
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


    .form .field.disabled
    {
        pointer-events: none;

        opacity: .5;
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
        margin-left: 8px;

        white-space: nowrap;

        gap: 6px;
    }


    .form .tickets svg
    {
        display: block;

        width: 28px;
        height: 22px;
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


    .form .submit_btn.disabled
    {
        pointer-events: none;

        opacity: .5;
    }
</style>