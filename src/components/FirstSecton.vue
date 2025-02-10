<template>
    <section class="first_section" id="first_section">
        <div class="cont">
            <div class="title">Lottery by Bro_n_Bro</div>

            <div class="desc">Stake atom and get your chance to win NFT once a week</div>

            <button class="btn" @click.prevent="connectKeplr()" :class="{ process: store.isKeplrConnecting }">Connect your wallet</button>

            <div class="exp">Stake with Bro and increase your chances!</div>
        </div>
    </section>
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
    .first_section
    {
        padding: 82px 0 86px;

        text-align: center;
    }


    .first_section .title
    {
        font-size: var(--font_size_title);
        font-weight: 500;
    }


    .first_section .desc
    {
        font-size: 32px;
        font-weight: 500;

        margin-top: 20px;
    }


    .first_section .btn
    {
        font-weight: 500;

        margin-top: 48px;
        padding: 13px 39px 14px 39px;

        border-radius: 33px;
        background: linear-gradient(180deg, #2849c7 0%, #010d38 128%), #1b3594;
    }


    .first_section .btn.process
    {
        pointer-events: none;

        opacity: .5;
    }


    .first_section .exp
    {
        font-size: 24px;
        font-weight: 500;

        margin-top: 17px;
    }
</style>
