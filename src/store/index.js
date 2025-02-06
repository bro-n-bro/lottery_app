import { defineStore } from 'pinia'
import { createKeplrOfflineSinger } from '@/utils'


export const useGlobalStore = defineStore('global', {
    state: () => ({
        isKeplrConnected: false,
        isKeplrConnecting: false,
        isAvailableBalancesGot: false,
        isStakedBalancesGot: false,
        isStakedToUs: false,

        Keplr: {},
        StargateClient: {},

        availableBalances: [],
        stakedBalances: [],
        stakedToUs: [],

        user: {
            ticketsAmount: 0
        },

        currentNetwork: {
            name: 'Cosmos Hub',
            lcd_api: 'https://lcd.cosmoshub-4.bronbro.io',
            rpc_api: 'https://rpc.cosmoshub-4.bronbro.io',
            websocket_url: 'wss://rpc.cosmoshub-4.bronbro.io:443/websocket',
            denom: 'uatom',
            token_name: 'ATOM',
            chain_id: 'cosmoshub-4',
            prefix: 'cosmos',
            explorer_link: 'https://www.mintscan.io/cosmos/tx/{tx_hash}',
            alias: 'cosmoshub',
            exponent: 6,
            gas_adjustment: 1.6
        },

        currentTxHash: '',
        ticketPrice: 10,
        validatorAddress: 'cosmosvaloper106yp7zw35wftheyyv9f9pe69t8rteumjrx52jg',
    }),


    actions: {
        // Connect Keplr
        async connectKeplr() {
            try {
                // Check Keplr
                if (!window.keplr) {
                    throw new Error('Keplr is not installed or not available')
                }

                // Create Keplr offline singer
                await createKeplrOfflineSinger(this.currentNetwork.chain_id)

                await Promise.all([
                    // Get available balances
                    this.getAvailableBalances(),

                    // Get staked balances
                    this.getStakedBalances()
                ])

                // Calculate the number of tickets
                this.calcTicketsAmount()
            } catch (error) {
                throw error
            }
        },


        // Get available balances
        async getAvailableBalances() {
            // Available balances status
            this.isAvailableBalancesGot = false

            // Reset available balances
            this.availableBalances = []

            try {
                // Request
                await fetch(`${this.currentNetwork.lcd_api}/cosmos/bank/v1beta1/balances/${this.user.address}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.balances.length) {
                            // Set data
                            this.availableBalances = data.balances.filter(
                                el => el.amount > 0 && el.denom === this.currentNetwork.denom
                            )
                        }
                    })

                // Available balances status
                this.isAvailableBalancesGot = true
            } catch (error) {
                throw error
            }
        },


        // Get staked balances
        async getStakedBalances() {
            // Staked balances status
            this.isStakedBalancesGot = false

            // Reset staked balances
            this.stakedBalances = []

            try {
                // Request
                await fetch(`${this.currentNetwork.lcd_api}/cosmos/staking/v1beta1/delegations/${this.user.address}`)
                    .then(response => response.json())
                    .then(async data => {
                        if (data.delegation_responses) {
                            // Set data
                            this.stakedBalances = data.delegation_responses.filter(
                                el => el.balance.amount > 0 && el.balance.denom === store.currentNetwork.denom
                            )

                            // Staked to us
                            this.stakedToUs = this.stakedBalances.find(
                                balance => balance.delegation.validator_address === store.validatorAddress
                            ) || []

                            // Is staked to us
                            this.isStakedToUs = this.stakedBalances.some(
                                balance => balance.delegation.validator_address === store.validatorAddress
                            )
                        }
                    })

                // Staked balances status
                this.isStakedBalancesGot = true
            } catch (error) {
                throw error
            }
        },


        // Calculate the number of tickets
        calcTicketsAmount() {
            if (this.stakedToUs.length) {
                // Set tickets amount
                this.user.ticketsAmount = parseInt(this.stakedToUs.amount / Math.pow(10, this.currentNetwork.exponent) / this.ticketPrice)
            }
        }
    }
})