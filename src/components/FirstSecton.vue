<template>
    <section class="first_section" id="first_section">
        <div class="cont">
            <div class="title">Lottery by Bro_n_Bro</div>

            <div class="desc">Stake atom and get your chance to win NFT once a week</div>

            <button class="btn" @click.prevent="connectKeplr()" :class="{ process: store.isKeplrConnecting }">
                Connect your wallet
            </button>

            <div class="exp">Stake with Bro and increase your chances!</div>
        </div>


        <div id="parallax">
            <div class="layer layer1" data-depth-x="0.1" data-depth-y="0.3">
                <img src="@/assets/parallax_layer1.svg" alt="" loading="lazy">
            </div>

            <div class="layer layer2" data-depth-x="0.05" data-depth-y="0.5">
                <img src="@/assets/parallax_layer2.svg" alt="" loading="lazy">
            </div>

            <div class="layer layer3" data-depth-x="0.2" data-depth-y="0.4">
                <img src="@/assets/parallax_layer3.svg" alt="" loading="lazy">
            </div>

            <div class="layer layer4" data-depth-x="0.05" data-depth-y="0.5">
                <img src="@/assets/parallax_layer4.svg" alt="" loading="lazy">
            </div>

            <div class="layer layer5" data-depth-x="0.2" data-depth-y="0.4">
                <img src="@/assets/parallax_layer5.svg" alt="" loading="lazy">
            </div>

            <div class="layer layer6" data-depth-x="0.1" data-depth-y="0.3">
                <img src="@/assets/parallax_layer6.svg" alt="" loading="lazy">
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onMounted } from 'vue'
    import { useGlobalStore } from '@/store'
    import Parallax from 'parallax-js'


    const store = useGlobalStore()


    onMounted(() => {
        // Parallax
        new Parallax(document.getElementById('parallax'))
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
    .first_section
    {
        position: relative;

        padding: 84px 0 88px;

        text-align: center;
    }


    .first_section .cont
    {
        position: relative;
        z-index: 3;
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
        font-size: 18px;
        font-weight: 700;

        margin-top: 48px;
        padding: 13px 30px 14px;

        border-radius: 33px;
        background: linear-gradient(180deg, #ff59d4 0%, #e47200 100%);
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



    #parallax
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        pointer-events: none;
    }


    #parallax .layer
    {
        position: absolute !important;
    }


    #parallax .layer1
    {
        top: 20px !important;
        left: 50% !important;

        margin-left: -520px;
    }

    #parallax .layer2
    {
        top: 50% !important;
        left: 50% !important;

        margin-top: -12px;
        margin-left: -640px;
    }

    #parallax .layer3
    {
        top: auto !important;
        bottom: 16px !important;
        left: 50% !important;

        margin-left: -472px;
    }

    #parallax .layer4
    {
        top: 28px !important;
        right: 50% !important;
        left: auto !important;

        margin-right: -520px;
    }

    #parallax .layer5
    {
        top: 50% !important;
        right: 50% !important;
        left: auto !important;

        margin-top: 24px;
        margin-right: -600px;
    }

    #parallax .layer6
    {
        top: auto !important;
        right: 50% !important;
        bottom: 0 !important;
        left: auto !important;

        margin-right: -472px;
    }


    #parallax img
    {
        display: block;
    }
</style>
