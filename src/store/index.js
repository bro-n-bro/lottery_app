import { defineStore } from 'pinia'
import { createKeplrOfflineSinger } from '@/utils'


export const useGlobalStore = defineStore('global', {
    state: () => ({
        isKeplrConnected: false,
        isKeplrConnecting: false,
        isAvailableBalancesGot: false,
        isUserInfoGot: false,

        showRegisterModal: false,

        Keplr: {},
        StargateClient: {},

        prices: [],
        redelegations: [],
        availableBalance: [],
        prizePool: [],
        lastWinners: [],
        topStakers: [],

        user: {},

        apiURL: 'https://api.lottery.bronbro.io',

        currentNetwork: {
            name: 'Cosmos Hub',
            lcd_api: 'https://lcd.cosmoshub-4.bronbro.io',
            rpc_api: 'https://rpc.cosmoshub-4.bronbro.io',
            websocket_url: 'wss://rpc.cosmoshub-4.bronbro.io:443/websocket',
            denom: 'uatom',
            symbol: 'ATOM',
            chain_id: 'cosmoshub-4',
            prefix: 'cosmos',
            explorer_link: 'https://www.mintscan.io/cosmos/tx/{tx_hash}',
            alias: 'cosmoshub',
            exponent: 6,
            gas_adjustment: 1.6
        },

        currentLottery: null,
        ticketPrice: 10,
        currentCurrency: 'USD',
        currentCurrencySymbol: '$',
        currentTxHash: '',
        validatorAddress: 'cosmosvaloper106yp7zw35wftheyyv9f9pe69t8rteumjrx52jg',
        addressConfirmationString: "i am in brottery",

        formatableTokens: [
            {
                token_name: 'USD',
                format_token_name: 'usdt',
                exponent: 0
            }
        ]
    }),


    actions: {
        // Init
        async init() {
            try {
                // Send request
                const response = await fetch(`${this.apiURL}/lotteries/current`)

                if (!response.ok) {
                    throw new Error('Failed to fetch current lottery. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.currentLottery = data

                // Load prize poll
                await this.loadPrizePool()
            } catch (error) {
                console.error(error)
            }
        },


        // Get prices
        async getPrices() {
            try {
                // Send request
                const response = await fetch('https://rpc.bronbro.io/price_feed_api/tokens/')

                if (!response.ok) {
                    throw new Error('Failed to fetch prices. Status: ' + response.status)
                }

                // Set data
                this.prices = await response.json()
            } catch (error) {
                console.error(error)
            }
        },


        // Load prize poll
        async loadPrizePool() {
            try {
                // Send request
                const response = await fetch(`/prize_pools/round_${this.currentLottery.id}.json`)

                if (!response.ok) {
                    throw new Error('Failed to fetch prize poll JSON. Status: ' + response.status)
                }

                // Set data
                this.prizePool = await response.json()
            } catch (error) {
                throw error
            }
        },


        // Connect Keplr
        async connectKeplr() {
            try {
                // Check Keplr
                if (!window.keplr) {
                    throw new Error('Keplr is not installed or not available')
                }

                // Create Keplr offline singer
                await createKeplrOfflineSinger(this.currentNetwork.chain_id)

                // Keplr connected status
                this.isKeplrConnected = true

                try {
                    // Get user info
                    const { success } = await this.getUserInfo()

                    if (!success) {
                        // Show register modal
                        this.showRegisterModal = true
                    }
                } catch (error) {
                    throw error
                }
            } catch (error) {
                throw error
            }
        },


        // Get available balance
        async getAvailableBalance() {
            // Available balance status
            this.isAvailableBalanceGot = false

            // Reset available balance
            this.availableBalance = []

            try {
                // Send request
                const response = await fetch(`${this.currentNetwork.lcd_api}/cosmos/bank/v1beta1/balances/${this.user.address}`)

                if (!response.ok) {
                    throw new Error('Failed to fetch available balances. Status: ' + response.status)
                }

                const data = await response.json()

                if (data.balances.length) {
                    // Set data
                    this.availableBalance = data.balances.filter(
                        el => el.amount > 0 && el.denom === this.currentNetwork.denom
                    )
                }

                // Available balance status
                this.isAvailableBalanceGot = true
            } catch (error) {
                throw error
            }
        },


        // Get user validators
        async getUserValidators() {
            try {
                // Send request
                const validators = await fetch(`${this.currentNetwork.lcd_api}/cosmos/staking/v1beta1/delegators/${this.user.address}/validators?status=BOND_STATUS_BONDED&pagination.limit=200`)

                if (!validators.ok) {
                    throw new Error('Failed to fetch redelegations. Status: ' + response.status)
                }

                const validatorsData = await validators.json()

                // Set data
                this.user.validators = validatorsData.validators.filter(el => el.operator_address !== this.validatorAddress)


                if (this.user.validators.length) {
                    // Send request
                    const delegations = await fetch(`${this.currentNetwork.lcd_api}/cosmos/staking/v1beta1/delegations/${this.user.address}`)

                    if (!delegations.ok) {
                        throw new Error('Failed to fetch delegations. Status: ' + response.status)
                    }

                    const delegationData = await delegations.json()

                    this.user.validators.forEach(validator => {
                        validator.balance = (delegationData.delegation_responses.find(el => el.delegation.validator_address === validator.operator_address)).balance
                    })

                    // Filter validators
                    this.user.validators = this.user.validators.filter(validator => validator.balance.amount > 0)
                }
            } catch (error) {
                // Throw error
                throw new Error(`getRedelegations() failed: ${error.message}`)
            }
        },


        // Get user info
        async getUserInfo() {
            // User info status
            this.isUserInfoGot = false

            try {
                // Send request
                const response = await fetch(`${this.apiURL}/lottery/current/${this.user.address}/info`)

                if (response.status === 200) {
                    const data = await response.json()

                    // Set data
                    Object.assign(this.user, data.address_info)

                    // Get user prizes
                    await this.getUserPrizes()

                    // User info status
                    this.isUserInfoGot = true

                    return { success: true }
                } else if (response.status === 400) {
                    return {
                        success: false,
                        message: 'User not found'
                    }
                } else {
                    throw new Error('Failed to fetch user info. Status: ' + response.status)
                }
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                }
            }
        },


        // Register user
        async registerUser() {
            try {
                // Send request
                const response = await fetch(`${this.apiURL}/initial-delegator/${this.user.address}/participate`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        address: this.user.address,
                        referral_code: this.user.referralCode,
                        pubkey: this.user.signDoc.pub_key.value,
                        signatures: this.user.signDoc.signature
                    })
                })

                if (response.status === 200) {
                    const data = await response.json()

                    // Result
                    if (data.is_participate) {
                        // Registered status
                        this.user.isRegistered = true
                    } else {
                        throw new Error('Failed to register user.')
                    }
                } else if (response.status === 403) {
                    return
                } else {
                    throw new Error('Failed to register user. Status: ' + response.status)
                }
            } catch (error) {
                throw error
            }
        },


        // Get user prizes
        async getUserPrizes() {
            try {
                // Send request
                const response = await fetch(`${this.apiURL}/${this.user.address}/prizes`)

                if (!response.ok) {
                    throw new Error('Failed to fetch user prizes. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.user.prizes = data
            } catch (error) {
                throw error
            }
        },


        // Get last winners
        async getLastWinners() {
            try {
                // Send request
                const response = await fetch(`${this.apiURL}/lotteries/last`)

                if (!response.ok) {
                    throw new Error('Failed to fetch last lottery info. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.lastWinners =  data.winners
            } catch (error) {
                throw error
            }
        },


        // Get top stakers
        async getTopStakers() {
            try {
                // Send request
                const response = await fetch(`${this.apiURL}/stakers/ranking`)

                if (!response.ok) {
                    throw new Error('Failed to fetch top stakers. Status: ' + response.status)
                }

                const data = await response.json()

                // Set data
                this.topStakers =  data
            } catch (error) {
                throw error
            }
        },


        // Claim prize
        async claimPrize() {
            try {
                // Request
                const response = await fetch(`${this.apiURL}/${this.user.address}/claim-prizes`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        address: this.user.address
                    })
                })

                // Check the response status
                if (!response.ok) {
                    // Get the response body
                    const errorData = await response.json()

                    throw new Error(`Error ${response.status}: ${errorData.detail || 'Unknown error'}`)
                }

                // Process the response
                const data = await response.json()
            } catch (error) {
                throw error
            }
        }
    }
})