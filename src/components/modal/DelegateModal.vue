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
                <TheLoader v-if="loading || isProcess" />

                <template v-if="!loading">
                <!-- Modal data -->
                <div class="tabs">
                    <button class="btn" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">
                        <span>Delegate</span>
                    </button>

                    <button class="btn" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2, disabled: !store.user.validators.length }">
                        <span>Redelegate</span>
                    </button>
                </div>


                <div class="form">
                    <div class="bg">
                        <div class="validator" v-if="activeTab === 1">
                            <div class="logo"><div>
                                <img src="@/assets/bro_n_bro_logo.svg" alt="">
                            </div></div>

                            <div>
                                <div class="label">Your validator:</div>

                                <div class="name">Bro_n_Bro</div>
                            </div>
                        </div>

                        <div class="balances" v-if="activeTab === 1">
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

                                <div class="cost">${{ formatTokenCost(calcTokenCost(store.user.amount)) }}</div>
                            </div>
                        </div>

                        <div class="from_validator" v-if="activeTab === 2">
                            <div class="label">Change validator from <b>({{ store.user.validators.length }})</b>:</div>

                            <div class="field" @click.prevent="toggleDropdown()">
                                <div class="input">
                                    <div v-if="!validatorFrom">Choose your validator</div>

                                    <template v-else>
                                    <div class="name">
                                        {{ validatorFrom.description.moniker }}
                                    </div>

                                    <div class="amount">
                                        {{ formatTokenAmount(validatorFrom.balance.amount, store.currentNetwork.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }} {{ store.currentNetwork.symbol }}
                                    </div>
                                    </template>
                                </div>

                                <svg class="arr" width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 11.3497L14.5 18.3497L21.5 11.3497" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>

                            <div class="dropdown" v-if="showValidatorsDropdown">
                                <div class="scroll">
                                    <div v-for="(validator, index) in store.user.validators" :key="index" @click.stop.prevent="setFromValidator(validator)">
                                        <div class="name">
                                            {{ validator.description.moniker }}
                                        </div>

                                        <div class="amount">
                                            {{ formatTokenAmount(validator.balance.amount, store.currentNetwork.exponent).toLocaleString('ru-RU', { maximumFractionDigits: 5 }).replace(',', '.') }} {{ store.currentNetwork.symbol }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="validator" v-if="activeTab === 2">
                            <div class="logo"><div>
                                <img src="@/assets/bro_n_bro_logo.svg" alt="">
                            </div></div>

                            <div>
                                <div class="label">To:</div>

                                <div class="name">Bro_n_Bro</div>
                            </div>
                        </div>

                        <div class="amount">
                            <div class="label">
                                <span>Amount:</span>

                                <span class="cost" v-if="isAmountReady">
                                    ${{ formatTokenCost(calcTokenCost(amount)) }}
                                </span>
                            </div>

                            <div class="field" :class="{ disabled: activeTab === 2 && !validatorFrom }">
                                <input type="number" inputmode="decimal" class="input" v-model="amount"
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
                        <button type="submit" class="submit_btn" :class="{ disabled: !isFormValid }" @click.prevent="onSubmit()">
                            <span v-if="activeTab === 1">DELEGATE</span>
                            <span v-if="activeTab === 2">REDELEGATE</span>
                        </button>
                    </div>
                </div>
            </template>

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
    import { ref, inject, onBeforeMount, watch, computed } from 'vue'
    import { useGlobalStore } from '@/store'
    import { useNotification } from '@kyvg/vue3-notification'
    import { formatTokenAmount, formatTokenCost, calcTokenCost, signTx, sendTx } from '@/utils'
    import { MsgDelegate, MsgBeginRedelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        notification = useNotification(),
        isClosing = ref(false),
        isProcess = ref(false),
        activeTab = ref(1),
        validatorFrom = ref(null),
        showValidatorsDropdown = ref(false),
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

                // Get user validators
                store.getUserValidators()
            ])

            // Hide loading
            loading.value = false
        } catch (error) {
            console.error(`DelegateModal.vue: ${error.message}`)
        }
    })


    watch(computed(() => activeTab.value), () => {
        // Rset data
        isAmountReady.value = false
        validatorFrom.value = null
        amount.value = ''
        tickets.value = 0
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
                    validatorSrcAddress: validatorFrom.value.operator_address,
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
            // Max. amount
            const maxAmount = activeTab.value === 1 ? store.availableBalance[0].amount : validatorFrom.value.balance.amount

            // Separator replacement
            Number(String(amount.value).replace(/,/g, "."))

            // Negative value
            if (String(amount.value).length && amount.value < 0) {
                // Set empty
                amount.value = ''
            }

            // Acceptable value
            if (amount.value && amount.value > 0 && amount.value < formatTokenAmount(maxAmount, store.currentNetwork.exponent)) {
                // Set amount status
                isAmountReady.value = true
            }

            // More than available balance
            if (amount.value > formatTokenAmount(maxAmount, store.currentNetwork.exponent)) {
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
            // Max. amount
            const maxAmount = activeTab.value === 1 ? store.availableBalance[0].amount : validatorFrom.value.balance.amount

            // Set amount
            amount.value = formatTokenAmount(maxAmount, store.currentNetwork.exponent)

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


    // Toggle dropdown
    function toggleDropdown() {
        // Set status
        showValidatorsDropdown.value = !showValidatorsDropdown.value
    }


    // Set from validator
    function setFromValidator(validator) {
        // Set data
        validatorFrom.value = validator

        // Toggle dropdown
        toggleDropdown()
    }


    // Submit
    async function onSubmit() {
        // Set process status
        isProcess.value = true

        // Clean notifications
        notification.notify({
            group: 'default',
            clean: true
        })

        // Show notification
        notification.notify({
            group: 'default',
            speed: 100,
            duration: -100,
            title: 'Transaction is pending...'
        })

        try {
            // Sign Tx
            const txBytes = await signTx(msgAny.value)

            // Send Tx
            const result = await sendTx(txBytes)

            if (result.code === 0) {
                // Set Tx hash
                store.currentTxHash = result.transactionHash

                // Set process status
                isProcess.value = false

                // Clean notifications
                notification.notify({
                    group: 'default',
                    clean: true
                })

                // Show notification
                notification.notify({
                    group: 'default',
                    speed: 100,
                    duration: 3000,
                    title: 'Transaction successful',
                    type: 'success',
                    data: {
                        explorer_link: (store.currentNetwork.explorer_link).replace('{tx_hash}', store.currentTxHash)
                    }
                })

                // Close modal
                closeHandler()

                // Update user info
                await store.getUserInfo()
            }
        } catch (error) {
            console.error(`DelegateModal.vue: ${error.message}`)

            // Set process status
            isProcess.value = false

            // Clean notifications
            notification.notify({
                group: 'default',
                clean: true
            })

            // Show notification
            notification.notify({
                group: 'default',
                speed: 100,
                duration: 1500,
                title: 'Transaction failed',
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

        background: url(@/assets/bg_delegate_modal.svg) 0 0/100% 100% no-repeat;
    }


    .data:after
    {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;

        display: block;

        width: 508px;
        height: 561px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        background: url(@/assets/bg_delegate_modal_points.svg) 0 0/100% 100% no-repeat;
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
        margin-bottom: 24px;
        margin-left: -25px;
    }


    .tabs .btn
    {
        font-size: 28px;
        font-weight: 900;

        width: 222px;
        height: 85px;
        padding: 30px 20px 20px;

        transition: color .2s linear;

        color: #7900d6;
    }


    .tabs .btn.disabled
    {
        pointer-events: none;

        opacity: .5;
    }


    .btn:first-child
    {
        background: url(@/assets/bg_delegate_tab.svg) 0 0/100% 100% no-repeat;
    }

    .btn:last-child
    {
        background: url(@/assets/bg_redelegate_tab.svg) 0 0/100% 100% no-repeat;
    }


    .tabs .btn.active
    {
        color: #fff;
        background: none;
    }



    .form
    {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;

        gap: 20px;
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


    .form .bg
    {
        padding: 18px 20px 20px;

        border-radius: 20px;
        background: linear-gradient(180deg, #1b003b 0%, #2d0061 100%);
    }


    .form .validator
    {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 18px;
        padding: 7px 0;
    }


    .form .from_validator + .validator
    {
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

        width: 40px;
        height: 40px;
        padding: 6px;

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

        width: calc(100% - 54px);
    }


    .form .validator .label
    {
        font-size: 14px;
    }


    .form .validator .name
    {
        font-size: 22px;
        font-weight: 600;

        margin-top: -4px;
    }


    .form .balances
    {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-bottom: 19px;
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
        position: relative;

        margin-bottom: 12px;
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
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-between;

        padding-right: 47px;

        white-space: nowrap;
        pointer-events: none;
    }

    .form .from_validator .input .name
    {
        overflow: hidden;

        width: 100%;

        text-overflow: ellipsis;
    }


    .form .from_validator .input .amount
    {
        width: auto;
        margin-left: 20px;

        opacity: .5;
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
        width: 260px;
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


    .form .dropdown
    {
        font-size: 14px;

        position: absolute;
        z-index: 5;
        top: 100%;
        left: 0;

        width: 100%;
        margin-top: 4px;
        padding: 8px 4px 8px 15px;

        border-radius: 10px;
        background: #06000e;
    }


    .form .dropdown .scroll
    {
        display: flex;
        overflow: auto;
        flex-direction: column;

        max-height: 128px;
        padding-right: 4px;

        gap: 8px;
    }


    .form .dropdown .scroll::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;

        border-radius: 5px;
    }


    .form .dropdown .scroll > *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: flex-start;

        cursor: pointer;
        white-space: nowrap;
    }


    .form .dropdown .name
    {
        overflow: hidden;

        width: 100%;

        text-overflow: ellipsis;
    }


    .form .dropdown .amount
    {
        width: auto;
        margin-left: 20px;

        opacity: .5;
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

        background: url(@/assets/bg_delegate_btn.svg) 0 0 /100% 100% no-repeat;
    }


    .form .submit_btn.disabled
    {
        pointer-events: none;

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

        width: 540px;
        height: 577px;

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
        top: 2px;
        left: 1.852%;
    }

    .bulbs .bulb:nth-child(2)
    {
        top: 2px;
        right: 1.852%;
    }

    .bulbs .bulb:nth-child(3)
    {
        top: 13.338%;
        right: 0;
    }

    .bulbs .bulb:nth-child(4)
    {
        top: 29.104%;
        right: 0;
    }

    .bulbs .bulb:nth-child(5)
    {
        top: 45%;
        right: 0;
    }

    .bulbs .bulb:nth-child(6)
    {
        top: 60.5%;
        right: 0;
    }

    .bulbs .bulb:nth-child(7)
    {
        top: 76%;
        right: 0;
    }

    .bulbs .bulb:nth-child(8)
    {
        right: 2.818%;
        bottom: 1.096%;
    }

    .bulbs .bulb:nth-child(9)
    {
        right: 19.777%;
        bottom: -8px;
    }

    .bulbs .bulb:nth-child(10)
    {
        right: 36.5%;
        bottom: -8px;
    }

    .bulbs .bulb:nth-child(11)
    {
        right: 53.318%;
        bottom: -8px;
    }

    .bulbs .bulb:nth-child(12)
    {
        right: 70%;
        bottom: -8px;
    }

    .bulbs .bulb:nth-child(13)
    {
        bottom: 1.096%;
        left: 4%;
    }

    .bulbs .bulb:nth-child(14)
    {
        top: 76%;
        left: 0;
    }

    .bulbs .bulb:nth-child(15)
    {
        top: 60.5%;
        left: 0;
    }

    .bulbs .bulb:nth-child(16)
    {
        top: 45%;
        left: 0;
    }

    .bulbs .bulb:nth-child(17)
    {
        top: 29.104%;
        left: 0;
    }

    .bulbs .bulb:nth-child(18)
    {
        top: 13.646%;
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