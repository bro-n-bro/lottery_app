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

                <div><button class="btn scroll_btn" data-anchor="leaderboard">Leaderboard</button></div>

                <div><button class="btn scroll_btn" data-anchor="our_bros">Bros</button></div>

                <div><button class="btn scroll_btn" data-anchor="">Rules</button></div>
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
                    <div class="val">{{ store.user.delegated_tokens_after_snapshot }} {{ store.currentNetwork.symbol }}</div>

                    <div class="label">Staked</div>
                </div>

                <div class="tickets">
                    <span>{{ store.user.tickets_number }}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                        <path d="M19.691 18.4L14.5 15.0938L9.309 18.4L10.875 12.4775L6.1045 8.625L12.267 8.25125L14.5 2.5875L16.733 8.25125L22.8955 8.625L18.125 12.4775M26.1 11.5C26.1 10.7375 26.4055 10.0062 26.9494 9.46707C27.4932 8.9279 28.2309 8.625 29 8.625V2.875C29 2.1125 28.6945 1.38123 28.1506 0.842068C27.6068 0.302901 26.8691 0 26.1 0H2.9C2.13087 0 1.39325 0.302901 0.84939 0.842068C0.305535 1.38123 0 2.1125 0 2.875V8.625C0.769128 8.625 1.50675 8.9279 2.05061 9.46707C2.59447 10.0062 2.9 10.7375 2.9 11.5C2.9 12.2625 2.59447 12.9938 2.05061 13.5329C1.50675 14.0721 0.769128 14.375 0 14.375V20.125C0 20.8875 0.305535 21.6188 0.84939 22.1579C1.39325 22.6971 2.13087 23 2.9 23H26.1C26.8691 23 27.6068 22.6971 28.1506 22.1579C28.6945 21.6188 29 20.8875 29 20.125V14.375C28.2309 14.375 27.4932 14.0721 26.9494 13.5329C26.4055 12.9938 26.1 12.2625 26.1 11.5Z" fill="currentColor"/>
                    </svg>
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
        z-index: 10;
        top: 0;

        color: #fff;
        background: #32007E;
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

        gap: 13px;
    }


    .balance .tickets svg
    {
        display: block;

        width: 29px;
        height: 23px;
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
        background: #597BF5;

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
        background: #597BF5;

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