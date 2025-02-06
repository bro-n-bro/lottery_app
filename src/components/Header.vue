<template>
    <header>
        <div class="cont row">
            <!-- Logo -->
            <div class="logo">
                <span></span>
            </div>

            <div class="menu">

            </div>

            <!-- Connect wallet button -->
            <button class="connect_btn" @click.prevent="connectKeplr()" v-if="!store.isKeplrConnected" :class="{ process: store.isKeplrConnecting }">
                <span>Connect wallet</span>
            </button>

            <div class="tickets" v-else>
                Tickets: {{ store.user.ticketsAmount }}
            </div>
        </div>
    </header>
</template>


<script setup>
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore()


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
        padding: 24px 0;

        color: #fff;
        background: rgba(0,0,0,.5);
    }


    .cont
    {
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }


    .logo span
    {
        display: block;

        width: 100px;
        height: 40px;

        background: #ddd;
    }


    .connect_btn
    {
        padding: 12px 24px;

        transition: opacity .2s linear;
    }


    .connect_btn.process
    {
        pointer-events: none;

        opacity: .5;
    }
</style>