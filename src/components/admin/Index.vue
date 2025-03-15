<template>
    <section class="data">
        <section class="top" :class="{ congratulation: isCongratulation }">
            <!-- Drum -->
            <div class="drum">
                D00G00F0O00J000B00T00V0WWW00000HH00000000000
            </div>

            <!-- Start button -->
            <button class="start_btn" @click.prevent="start()" :class="{ disabled: currentIndex === winners.length || isPlaying }">START</button>

            <!-- Bulbs -->
            <div class="bulb bulb1"><span></span></div>
            <div class="bulb bulb2"><span></span></div>
            <div class="bulb bulb3"><span></span></div>
            <div class="bulb bulb4"><span></span></div>
            <div class="bulb bulb5"><span></span></div>
            <div class="bulb bulb6"><span></span></div>
            <div class="bulb bulb7"><span></span></div>
            <div class="bulb bulb8"><span></span></div>
            <div class="bulb bulb9"><span></span></div>
            <div class="bulb bulb10"><span></span></div>
            <div class="bulb bulb11"><span></span></div>
            <div class="bulb bulb12"><span></span></div>
            <div class="bulb bulb13"><span></span></div>
            <div class="bulb bulb14"><span></span></div>
            <div class="bulb bulb15"><span></span></div>
            <div class="bulb bulb16"><span></span></div>
            <div class="bulb bulb17"><span></span></div>
            <div class="bulb bulb18"><span></span></div>
            <div class="bulb bulb19"><span></span></div>
            <div class="bulb bulb20"><span></span></div>
            <div class="bulb bulb21"><span></span></div>
            <div class="bulb bulb22"><span></span></div>
            <div class="bulb bulb23"><span></span></div>
            <div class="bulb bulb24"><span></span></div>
            <div class="bulb bulb25"><span></span></div>
            <div class="bulb bulb26"><span></span></div>
            <div class="bulb bulb27"><span></span></div>
            <div class="bulb bulb28"><span></span></div>
            <div class="bulb bulb29"><span></span></div>
            <div class="bulb bulb30"><span></span></div>
            <div class="bulb bulb31"><span></span></div>
            <div class="bulb bulb32"><span></span></div>
            <div class="bulb bulb33"><span></span></div>
            <div class="bulb bulb34"><span></span></div>
            <div class="bulb bulb35"><span></span></div>
            <div class="bulb bulb36"><span></span></div>
        </section>

        <section class="bottom">
            <!-- Screen -->
            <div class="screen">
                <!-- Start message -->
                <div class="start_message" v-if="!isStarting">
                    <!-- Start message - Title -->
                    <div class="title">BROTTERY</div>

                    <!-- Start message - Description -->
                    <div class="desc">Press start</div>
                </div>

                <!-- List of winners -->
                <div class="list" v-else>
                    <!-- Winner -->
                    <div v-for="(winner, index) in winners.slice(0, currentIndex)" :key="index">
                        <span v-if="!isPlaying || index < currentIndex - 1">{{ winner }}</span>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<script setup>
    import { ref } from 'vue'


    const isStarting = ref(false),
        isPlaying = ref(false),
        isCongratulation = ref(false),
        currentIndex = ref(null),
        winners = ref([
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs'
        ])


    function start() {
        // Start status
        isStarting.value = true

        // Get next winner
        getNextWinner()
    }


    // Get next winner
    function getNextWinner() {
        // Play status
        isPlaying.value = true

        // Update current index
        currentIndex.value === null
            ? currentIndex.value = 1
            : currentIndex.value++

        setTimeout(() => {
            // Play status
            isPlaying.value = false

            // Congratulation status
            isCongratulation.value = true

            // Congratulation status
            setTimeout(() => isCongratulation.value = false, 3000)
        }, 3000)
    }
</script>


<style scoped>
    .data
    {
        position: relative;

        padding-top: 44px;
    }



    .top
    {
        position: relative;
        z-index: 5;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 1114px;
        max-width: 100%;
        height: 243px;
        margin: 0 auto -12px;
        padding: 0 32px;

        background: url(@/assets/bg_admin_data_top.svg) 0 0/100% 100% no-repeat;
    }



    .drum
    {
        font-family: var(--font_family3);
        font-size: 40px;

        display: flex;
        overflow: hidden;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 892px;
        height: 141px;

        text-transform: uppercase;

        color: #000;
        background: url(@/assets/bg_admin_drum.svg) 0 0/100% 100% no-repeat;

        filter: drop-shadow(0px 15px 8px rgba(0, 0, 0, .25));
    }



    .start_btn
    {
        font-size: 26px;
        font-weight: 900;

        width: 146px;
        height: 140px;
        margin-left: auto;

        transition: opacity .2s linear;
        text-transform: uppercase;

        background: url(@/assets/bg_admin_start_btn.svg) 0 0/100% 100% no-repeat;
    }


    .start_btn.disabled
    {
        pointer-events: none;

        opacity: .5;
    }



    .bottom
    {
        position: relative;
        z-index: 3;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 1052px;
        max-width: 100%;
        height: 467px;
        margin: 0 auto;

        background: url(@/assets/bg_admin_data_bottom.svg) 0 0/100% 100% no-repeat;
    }


    .screen
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 701px;
        max-width: 100%;
        height: 359px;
        margin: 0 auto;
        padding: 16px 16px 17px;

        background: url(@/assets/bg_admin_data_screen.svg) 0 0/100% 100% no-repeat;
    }


    .screen .title
    {
        font-family: var(--font_family2);
        font-size: 70px;
        font-weight: 700;
        line-height: 40px;

        width: 100%;

        text-align: center;
        text-transform: uppercase;

        color: #ffdc2c;
    }


    .screen .desc
    {
        font-family: var(--font_family2);
        font-size: 40px;

        width: 100%;
        margin-top: 15px;

        text-align: center;
        letter-spacing: 14.6px;
        text-transform: uppercase;
    }



    .list
    {
        font-family: var(--font_family2);
        font-size: 18px;

        display: flex;
        overflow: auto;
        flex-direction: column;

        width: 100%;
        height: 326px;
        padding: 16px 12px;

        counter-reset: number;
        white-space: nowrap;
        text-transform: uppercase;

        color: #ffdc2c;

        gap: 6px;
        overscroll-behavior-y: contain;
    }


    .list > *
    {
        position: relative;

        min-height: 23px;
        padding-left: 34px;
    }


    .list > *:before
    {
        position: absolute;
        top: 0;
        left: 0;

        content: counter(number) '.';
        counter-increment: number;
    }



    .bulb
    {
        position: absolute;

        display: block;

        width: 42px;
        height: 42px;

        pointer-events: none;

        background: url(@/assets/main_data_bulb.svg) 0 0/100% 100% no-repeat;
    }


    .bulb:before
    {
        position: absolute;
        z-index: 2;
        top: -4px;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        content: '';

        opacity: 0;
        border-radius: 50%;
        background: radial-gradient(50% 49.99% at 50.04% 49.96%, #fff8ab 0%, rgba(238, 255, 154, .80) 8.79%, rgba(243, 255, 109, .70) 24.72%, rgba(228, 237, 53, .50) 45.98%, rgba(163, 174, 16, .30) 71.79%, rgba(163, 174, 16, .00) 100%);
    }


    .bulb1
    {
        top: -26px;
        left: 2.702%;
    }

    .bulb2
    {
        top: -26px;
        left: 9.189%;
    }

    .bulb3
    {
        top: -26px;
        left: 15.675%;
    }

    .bulb4
    {
        top: -26px;
        left: 22.162%;
    }

    .bulb5
    {
        top: -26px;
        left: 28.648%;
    }

    .bulb6
    {
        top: -26px;
        left: 35.135%;
    }

    .bulb7
    {
        top: -26px;
        left: 41.621%;
    }

    .bulb8
    {
        top: -26px;
        left: 48.108%;
    }

    .bulb9
    {
        top: -26px;
        left: 54.594%;
    }

    .bulb10
    {
        top: -26px;
        left: 61.081%;
    }

    .bulb11
    {
        top: -26px;
        left: 67.567%;
    }

    .bulb12
    {
        top: -26px;
        left: 74.054%;
    }

    .bulb13
    {
        top: -26px;
        left: 80.54%;
    }

    .bulb14
    {
        top: -26px;
        left: 87.027%;
    }

    .bulb15
    {
        top: -26px;
        left: 93.513%;
    }

    .bulb16
    {
        top: 11.297%;
        right: -26px;

        transform: rotate(90deg);
    }

    .bulb17
    {
        top: 41.422%;
        right: -26px;

        transform: rotate(90deg);
    }

    .bulb18
    {
        top: 71.548%;
        right: -26px;

        transform: rotate(90deg);
    }

    .bulb19
    {
        right: 2.702%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb20
    {
        right: 9.189%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb21
    {
        right: 15.675%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb22
    {
        right: 22.162%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb23
    {
        right: 28.648%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb24
    {
        right: 35.135%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb25
    {
        right: 41.621%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb26
    {
        right: 48.108%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb27
    {
        right: 54.594%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb28
    {
        right: 61.081%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb29
    {
        right: 67.567%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb30
    {
        right: 74.054%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb31
    {
        right: 80.54%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb32
    {
        right: 87.027%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb33
    {
        right: 93.513%;
        bottom: -26px;

        transform: rotate(180deg);
    }

    .bulb34
    {
        bottom: 11.297%;
        left: -26px;

        transform: rotate(-90deg);
    }

    .bulb35
    {
        bottom: 41.422%;
        left: -26px;

        transform: rotate(-90deg);
    }

    .bulb36
    {
        bottom: 71.548%;
        left: -26px;

        transform: rotate(-90deg);
    }


    .bulb:nth-child(odd):before
    {
        animation: blink 1s infinite steps(1, end);
    }

    .bulb:nth-child(even):before
    {
        animation: blink 1s infinite steps(1, end) reverse;
    }


    .congratulation .bulb:nth-child(odd):before,
    .congratulation .bulb:nth-child(even):before
    {
        top: -12px;
        left: -25%;

        width: 150%;
        height: 150%;
    }


    .congratulation .bulb:nth-child(odd):before,
    .congratulation .bulb:nth-child(even):before
    {
        animation: blink 1s infinite;
    }
</style>