<template>
    <header>
        <div class="cont row">
            <!-- Logo -->
            <div class="logo">
                <img src="@/assets/logo.svg" alt="">
            </div>

            <div class="menu">
                <div><button class="btn scroll_btn" data-anchor="first_section">Lottery</button></div>

                <div><button class="btn scroll_btn" data-anchor="prize_pool">Prize pool</button></div>

                <!-- <div><button class="btn scroll_btn" data-anchor="leaderboard">Leaderboard</button></div> -->

                <div><button class="btn scroll_btn" data-anchor="our_bros">Bros</button></div>

                <div><button class="btn scroll_btn" data-anchor="steps">Rules</button></div>
            </div>

            <!-- Connect wallet button -->
            <button class="connect_btn" @click.prevent="connectKeplr()" v-if="!store.isKeplrConnected" :class="{ process: store.isKeplrConnecting }">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 5.79086 1.79086 4 4 4H16C18.2091 4 20 5.79086 20 8H18C15.7909 8 14 9.79086 14 12C14 14.2091 15.7909 16 18 16H20C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V8ZM3 8C3 7.44772 3.44772 7 4 7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H4C3.44772 9 3 8.55228 3 8Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C16.3431 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15H21.3636C21.7151 15 22 14.7151 22 14.3636V9.63636C22 9.28491 21.7151 9 21.3636 9H18ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z" fill="currentColor"/>
                </svg>

                <span>Connect wallet</span>
            </button>

            <template v-else>
            <div class="balance">
                <div class="staked">
                    <div class="val">{{ store.user.delegation_difference }} {{ store.currentNetwork.symbol }}</div>

                    <div class="label">Staked</div>
                </div>

                <div class="tickets">
                    <div class="delegation">
                        <span>{{ store.user.delegation_tickets }}</span>

                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29 17C29 16.2044 29.3161 15.4413 29.8787 14.8787C30.4413 14.3161 31.2044 14 32 14V8C32 7.20435 31.6839 6.44129 31.1213 5.87868C30.5587 5.31607 29.7957 5 29 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V14C2.79565 14 3.55871 14.3161 4.12132 14.8787C4.68393 15.4413 5 16.2044 5 17C5 17.7956 4.68393 18.5587 4.12132 19.1213C3.55871 19.6839 2.79565 20 2 20V26C2 26.7956 2.31607 27.5587 2.87868 28.1213C3.44129 28.6839 4.20435 29 5 29H29C29.7957 29 30.5587 28.6839 31.1213 28.1213C31.6839 27.5587 32 26.7956 32 26V20C31.2044 20 30.4413 19.6839 29.8787 19.1213C29.3161 18.5587 29 17.7956 29 17ZM8 22.0208C8.31257 22.7816 9.07448 23.4502 9.98628 23.96C11.1898 24.6329 12.6922 25.0514 13.8885 25.0514H20.1115C21.3078 25.0514 22.8102 24.6329 24.0137 23.96C24.9255 23.4502 25.6874 22.7816 26 22.0208L20.5109 22.03C18.8299 22.03 17.4156 23.0239 17 24.3739C16.5844 23.0239 15.1701 22.03 13.4891 22.03L8 22.0208ZM9.98628 19.9472C9.07448 19.31 8.31257 18.4742 8 17.5232L13.4891 17.5347C15.1701 17.5347 16.5844 18.7771 17 20.4646C17.4156 18.7771 18.8299 17.5347 20.5109 17.5347L26 17.5232C25.6874 18.4742 24.9255 19.31 24.0137 19.9472C22.8102 20.7883 21.3078 21.3115 20.1115 21.3115H13.8885C12.6922 21.3115 11.1898 20.7883 9.98628 19.9472ZM8 16.6282C8.31257 15.6772 9.07448 14.8414 9.98628 14.2042C11.1898 13.363 12.6922 12.8398 13.8885 12.8398H20.1115C21.3078 12.8398 22.8102 13.363 24.0137 14.2042C24.9255 14.8414 25.6874 15.6772 26 16.6282L20.5109 16.6167C18.8299 16.6167 17.4156 15.3743 17 13.6867C16.5844 15.3743 15.1701 16.6167 13.4891 16.6167L8 16.6282ZM9.98628 10.143C9.07448 10.6528 8.31257 11.3214 8 12.0822L13.4891 12.073C15.1701 12.073 16.5844 11.079 17 9.72902C17.4156 11.079 18.8299 12.073 20.5109 12.073L26 12.0822C25.6874 11.3214 24.9255 10.6528 24.0137 10.143C22.8102 9.47008 21.3078 9.05151 20.1115 9.05151H13.8885C12.6922 9.05151 11.1898 9.47008 9.98628 10.143Z" fill="#F4BF20"/>
                        </svg>
                    </div>

                    <div class="referral">
                        <span>{{ store.user.referral_tickets }}</span>

                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.37 24.2L17 20.75L11.63 24.2L13.25 18.02L8.315 14L14.69 13.61L17 7.7L19.31 13.61L25.685 14L20.75 18.02M29 17C29 16.2044 29.3161 15.4413 29.8787 14.8787C30.4413 14.3161 31.2044 14 32 14V8C32 7.20435 31.6839 6.44129 31.1213 5.87868C30.5587 5.31607 29.7956 5 29 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V14C2.79565 14 3.55871 14.3161 4.12132 14.8787C4.68393 15.4413 5 16.2044 5 17C5 17.7956 4.68393 18.5587 4.12132 19.1213C3.55871 19.6839 2.79565 20 2 20V26C2 26.7956 2.31607 27.5587 2.87868 28.1213C3.44129 28.6839 4.20435 29 5 29H29C29.7956 29 30.5587 28.6839 31.1213 28.1213C31.6839 27.5587 32 26.7956 32 26V20C31.2044 20 30.4413 19.6839 29.8787 19.1213C29.3161 18.5587 29 17.7956 29 17Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="address">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C1.79086 4 0 5.79086 0 8V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H4ZM4 7C3.44772 7 3 7.44772 3 8C3 8.55228 3.44772 9 4 9H8C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7H4Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 9C24.6569 9 26 10.3431 26 12C26 13.6569 24.6569 15 23 15H21.4545C21.2035 15 21 14.7965 21 14.5455V9.45455C21 9.20351 21.2035 9 21.4545 9H23ZM24 13C23.4477 13 23 12.5523 23 12C23 11.4477 23.4477 11 24 11C24.5523 11 25 11.4477 25 12C25 12.5523 24.5523 13 24 13Z" fill="currentColor"/>
                    <path d="M16 3H6L12.514 0.557253C13.3843 0.230886 14.3647 0.547125 14.8803 1.32051L16 3Z" fill="currentColor"/>
                </svg>

                <span>{{ store.user.address.slice(0, 5) + '...' + store.user.address.slice(-6) }}</span>
            </div>
            </template>
        </div>
    </header>
</template>


<script setup>
    import { onMounted } from 'vue'
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore()


    onMounted(() => {
		// Smooth scrolling to anchor
		const scrollBtns = document.querySelectorAll('.scroll_btn')

		if (scrollBtns) {
			scrollBtns.forEach(element => {
				element.addEventListener('click', e => {
					e.preventDefault()

					let anchor = element.getAttribute('data-anchor')

					document.getElementById(anchor).scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					}, 1000)
				})
			})
		}
	})


    // Connect Keplr
    async function connectKeplr() {
        try {
            // Keplr connecting status
            store.isKeplrConnecting = true

            // Connect Keplr
            await store.connectKeplr()

            // Keplr connecting status
            store.isKeplrConnecting = false
        } catch (error) {
            console.error('Error connecting to Keplr:', error)

            // Keplr connecting status
            store.isKeplrConnecting = false
        }
    }
</script>


<style scoped>
    header
    {
        position: sticky;
        z-index: 101;
        top: 0;

        color: #fff;
        background: #32007e;
    }


    .cont
    {
        align-content: center;
        align-items: center;
        justify-content: space-between;

        height: 90px;
    }


    .logo img
    {
        display: block;

        max-width: 100%;
    }



    .menu
    {
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        margin-right: auto;
        margin-left: 159px;

        text-transform: capitalize;

        gap: 40px;
    }



    .balance
    {
        display: flex;
        flex-direction: column;

        margin-left: 20px;

        gap: 6px;
    }


    .balance .staked
    {
        font-size: 20px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;

        text-transform: capitalize;

        color: #6b8bff;

        gap: 6px;
    }


    .balance .staked .val
    {
        font-weight: 500;
    }


    .balance .staked .label
    {
        font-weight: 100;
    }


    .balance .tickets
    {
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;

        gap: 14px;
    }


    .balance .tickets > *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        gap: 13px;
    }


    .balance .tickets svg
    {
        display: block;

        width: 32px;
        height: 32px;
    }



    .address
    {
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin-left: 20px;
        padding: 13px 20px;

        border-radius: 10px;
        background: #597bf5;

        gap: 15px;
    }


    .address svg
    {
        display: block;

        width: 26px;
        height: 24px;
    }


    .address span
    {
        position: relative;
        top: -2px;
    }



    .connect_btn
    {
        font-weight: 500;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin-left: 20px;
        padding: 13px 20px;

        text-transform: capitalize;

        border-radius: 10px;
        background: #597bf5;

        gap: 13px;
    }


    .connect_btn svg
    {
        display: block;

        width: 26px;
        height: 24px;
    }


    .connect_btn.process
    {
        pointer-events: none;

        opacity: .5;
    }
</style>