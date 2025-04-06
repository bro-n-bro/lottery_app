<template>
    <section class="last_round_winners">
        <div class="cont">
            <div class="title">
                <span>Last Round Winners</span>

                <div class="bulbs">
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
                </div>
            </div>

            <div class="row">
                <div class="item" v-for="(winner, index) in store.lastWinners" :key="winner.id">
                    <div class="thumb">
                        <a :href="`https://www.stargaze.zone/p/${convertAddress(winner.initial_delegator.address, 'stars')}/tokens`" target="_blank" rel="noopener nofollow">
                            <img :src="store.lastRoundPrizePool[index]?.image" :alt="store.lastRoundPrizePool[index]?.name" loading="lazy">
                        </a>

                        <div class="info">
                            <div class="collection">
                                <a :href="store.lastRoundPrizePool[index]?.collection_link" target="_blank" rel="noopener nofollow">
                                    {{ store.lastRoundPrizePool[index]?.collection_name }}
                                </a>
                            </div>

                            <div class="name">
                                <a :href="`https://www.stargaze.zone/p/${convertAddress(winner.initial_delegator.address, 'stars')}/tokens`" target="_blank" rel="noopener nofollow">
                                    {{ store.lastRoundPrizePool[index]?.name }}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="address">
                        <div class="label">Address:</div>

                        <div class="val">
                            <a :href="`https://www.stargaze.zone/p/${convertAddress(winner.initial_delegator.address, 'stars')}/tokens`" target="_blank" rel="noopener nofollow">
                                {{ winner.initial_delegator.address.slice(0, 5) + '...' + winner.initial_delegator.address.slice(-6) }}
                            </a>
                        </div>
                    </div>

                    <div class="staked">
                        <div class="label">Staked:</div>

                        <div class="val">{{ winner.amount_difference }} {{ store.currentNetwork.symbol }}</div>
                    </div>

                    <div class="tickets">
                        <div class="label">Tickets:</div>

                        <div class="val">
                            <span>{{ winner.total_tickets }}</span>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 20" fill="none">
                                <path d="M16.975 16L12.5 13.125L8.025 16L9.375 10.85L5.2625 7.5L10.575 7.175L12.5 2.25L14.425 7.175L19.7375 7.5L15.625 10.85M22.5 10C22.5 9.33696 22.7634 8.70107 23.2322 8.23223C23.7011 7.76339 24.337 7.5 25 7.5V2.5C25 1.83696 24.7366 1.20107 24.2678 0.732233C23.7989 0.263392 23.163 0 22.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V7.5C0.663041 7.5 1.29893 7.76339 1.76777 8.23223C2.23661 8.70107 2.5 9.33696 2.5 10C2.5 10.663 2.23661 11.2989 1.76777 11.7678C1.29893 12.2366 0.663041 12.5 0 12.5V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H22.5C23.163 20 23.7989 19.7366 24.2678 19.2678C24.7366 18.7989 25 18.163 25 17.5V12.5C24.337 12.5 23.7011 12.2366 23.2322 11.7678C22.7634 11.2989 22.5 10.663 22.5 10Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img src="@/assets/bg_last_round_winners.svg" alt="" class="bg" loading="lazy">
    </section>
</template>


<script setup>
    import { useGlobalStore } from '@/store'
    import { convertAddress } from '@/utils'


    const store = useGlobalStore()
</script>


<style scoped>
    .last_round_winners
    {
        position: relative;

        margin-bottom: 120px;
    }


    .last_round_winners .bg
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;

        display: block;

        width: 1920px;
        min-height: 100px;

        transform: translate(-50%, -50%);
        pointer-events: none;
    }


    .last_round_winners .cont
    {
        position: relative;
        z-index: 3;

        max-width: 1840px;
    }


    .last_round_winners .title
    {
        font-size: 48px;
        font-weight: 900;

        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 748px;
        max-width: 100%;
        height: 150px;
        margin: 0 auto 80px;

        text-align: center;

        border-radius: 30px;
        background: url(@/assets/bg_last_round_winners_title.svg) 0 0/100% 100% no-repeat;
    }


    .last_round_winners .bulbs
    {
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 50%;

        width: 780px;
        height: 184px;

        transform: translate(-50% ,-50%);
        pointer-events: none;
    }


    .last_round_winners .bulb
    {
        position: absolute;

        display: block;

        width: 42px;
        height: 42px;

        background: url(@/assets/main_data_bulb.svg) 0 0/100% 100% no-repeat;
    }


    .last_round_winners .bulb1
    {
        top: 0;
        left: 9.487%;
    }

    .last_round_winners .bulb2
    {
        top: 0;
        left: 24.615%;
    }

    .last_round_winners .bulb3
    {
        top: 0;
        left: 39.743%;
    }

    .last_round_winners .bulb4
    {
        top: 0;
        left: 54.871%;
    }

    .last_round_winners .bulb5
    {
        top: 0;
        left: 70%;
    }

    .last_round_winners .bulb6
    {
        top: 0;
        left: 82.564%;
    }

    .last_round_winners .bulb7
    {
        top: calc(50% - 21px);
        right: 0;

        transform: rotate(90deg);
    }

    .last_round_winners .bulb8
    {
        bottom: 0;
        left: 82.564%;

        transform: rotate(180deg);
    }

    .last_round_winners .bulb9
    {
        bottom: 0;
        left: 70%;

        transform: rotate(180deg);
    }

    .last_round_winners .bulb10
    {
        bottom: 0;
        left: 54.871%;

        transform: rotate(180deg);
    }

    .last_round_winners .bulb11
    {
        bottom: 0;
        left: 39.743%;

        transform: rotate(180deg);
    }

    .last_round_winners .bulb12
    {
        bottom: 0;
        left: 24.615%;

        transform: rotate(180deg);
    }

    .last_round_winners .bulb13
    {
        bottom: 0;
        left: 9.487%;

        transform: rotate(180deg);
    }

    .last_round_winners .bulb14
    {
        top: calc(50% - 21px);
        left: 0;

        transform: rotate(-90deg);
    }


    .last_round_winners .bulb:before
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


    .bulb:nth-child(odd):before
    {
        animation: blink 1s infinite steps(1, end);
    }

    .bulb:nth-child(even):before
    {
        animation: blink 1s infinite steps(1, end) reverse;
    }


    .last_round_winners .row
    {
        align-content: stretch;
        align-items: stretch;
        justify-content: center;

        margin-bottom: -28px;
        margin-left: -28px;
    }


    .last_round_winners .row > *
    {
        width: calc(20% - 28px);
        margin-bottom: 28px;
        margin-left: 28px;
    }


    .last_round_winners .item
    {
        position: relative;

        display: flex;
        flex-direction: column;

        padding: 20px 20px 28px;

        border-radius: 10px;
        background: radial-gradient(138.56% 130.09% at 52.94% -4.79%, rgba(120, 255, 136, .40) 0%, rgba(120, 255, 136, .00) 100%), #005e00;
        box-shadow: inset 0 0 15px rgba(0, 49, 0, .9);
    }


    .last_round_winners .item .thumb
    {
        position: relative;

        margin-bottom: 23px;

        border-radius: 10px;
    }


    .last_round_winners .item .thumb a
    {
        display: block;

        text-decoration: none;

        color: currentColor;
    }


    .last_round_winners .item .thumb img
    {
        display: block;

        width: 100%;

        border-radius: 10px;

        aspect-ratio: 1/1;
        object-fit: cover;
    }


    .last_round_winners .item .info
    {
        position: absolute;
        z-index: 3;
        bottom: 0;
        left: 0;

        width: 100%;
        padding: 32px 20px 16px;

        pointer-events: none;

        border-radius: 0 0 10px 10px;
        background: linear-gradient(180deg, rgba(0, 0, 0, .00) 0%, #000 41.81%);
    }


    .last_round_winners .item .collection
    {
        font-size: 19px;
        font-weight: 500;

        margin-bottom: 10px;
    }


    .last_round_winners .item .collection a
    {
        display: inline-block;

        vertical-align: top;
        text-decoration: none;
        pointer-events: auto;

        color: currentColor;
    }


    .last_round_winners .item .name
    {
        font-size: 25px;
        font-weight: 700;
    }


    .last_round_winners .item .name a
    {
        display: inline-block;

        vertical-align: top;
        text-decoration: none;
        pointer-events: auto;

        color: currentColor;
    }


    .last_round_winners .item .address
    {
        margin-bottom: 60px;
    }


    .last_round_winners .item .address .label
    {
        font-size: 22px;
        line-height: 100%;
    }


    .last_round_winners .item .address .val
    {
        font-size: 34px;
        font-weight: 500;
        line-height: 100%;
    }


    .last_round_winners .item .address a
    {
        display: inline-block;

        vertical-align: top;
        text-decoration: none;

        color: currentColor;
    }


    .last_round_winners .item .staked
    {
        font-size: 22px;
        line-height: 100%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .last_round_winners .item .staked .val
    {
        font-size: 28px;
        font-weight: 500;
        line-height: 100%;
    }


    .last_round_winners .item .tickets
    {
        font-size: 22px;
        line-height: 100%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        margin-top: 12px;
    }


    .last_round_winners .item .tickets .val
    {
        font-size: 28px;
        font-weight: 500;
        line-height: 100%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;

        gap: 6px;
    }


    .last_round_winners .item .tickets .val svg
    {
        display: block;

        width: 25px;
        height: 20px;
    }



    @media print, (max-width: 1899px)
    {
        .last_round_winners .row
        {
            margin-bottom: -20px;
            margin-left: -20px;
        }


        .last_round_winners .row > *
        {
            width: calc(20% - 20px);
            margin-bottom: 20px;
            margin-left: 20px;
        }


        .last_round_winners .item
        {
            padding: 16px 16px 24px;
        }


        .last_round_winners .item .thumb
        {
            margin-bottom: 20px;
        }


        .last_round_winners .item .info
        {
            padding: 24px 16px 12px;
        }


        .last_round_winners .item .collection
        {
            font-size: 16px;

            margin-bottom: 8px;
        }


        .last_round_winners .item .name
        {
            font-size: 20px;
        }


        .last_round_winners .item .address .label
        {
            font-size: 18px;
        }


        .last_round_winners .item .address .val
        {
            font-size: 28px;
        }


        .last_round_winners .item .address
        {
            margin-bottom: 48px;
        }


        .last_round_winners .item .staked,
        .last_round_winners .item .tickets
        {
            font-size: 18px;
        }


        .last_round_winners .item .tickets
        {
            margin-top: 10px;
        }


        .last_round_winners .item .staked .val,
        .last_round_winners .item .tickets .val
        {
            font-size: 24px;
        }
    }



    @media print, (max-width: 1439px)
    {
        .last_round_winners
        {
            margin-bottom: 100px;
        }


        .last_round_winners .bg
        {
            width: 1440px;
        }


        .last_round_winners .title
        {
            font-size: 44px;

            width: 698px;
            height: 140px;
            margin-bottom: 60px;

            border-radius: 24px;
        }


        .last_round_winners .bulbs
        {
            width: 736px;
            height: 176px;
        }


        .last_round_winners .row
        {
            display: block;
            overflow: auto;

            width: calc(100% + 48px);
            margin: 0 -24px;
            padding: 0 24px;

            white-space: nowrap;

            scroll-padding: 0 24px;
            scroll-snap-type: x mandatory;
            scrollbar-color: transparent transparent !important;
            scrollbar-width: thin !important;
        }


        .last_round_winners .row::-webkit-scrollbar
        {
            display: none !important;

            width: 0 !important;
            height: 0 !important;

            background-color: transparent !important;
        }


        .last_round_winners .row::-webkit-scrollbar-thumb
        {
            background-color: transparent !important;
        }


        .last_round_winners .row > *
        {
            display: inline-block;

            width: 280px;
            max-width: none;
            margin: 0;

            vertical-align: top;
            white-space: normal;

            scroll-snap-align: start;
        }


        .last_round_winners .row > * + *
        {
            margin-left: 20px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .last_round_winners .bg
        {
            width: 1280px;
        }


        .last_round_winners .title
        {
            font-size: 40px;

            width: 600px;
            height: 120px;
        }


        .last_round_winners .bulbs
        {
            width: 640px;
            height: 160px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .last_round_winners .title
        {
            font-size: 36px;

            width: 540px;
            height: 108px;
        }


        .last_round_winners .bulbs
        {
            width: 580px;
            height: 152px;
        }


        .last_round_winners .row > *
        {
            width: 240px;
        }


        .last_round_winners .item .thumb
        {
            margin-bottom: 16px;
        }


        .last_round_winners .item .collection
        {
            font-size: 15px;
        }


        .last_round_winners .item .name
        {
            font-size: 18px;
        }


        .last_round_winners .item .address
        {
            margin-bottom: 40px;
        }


        .last_round_winners .item .address .label
        {
            font-size: 16px;

            margin-bottom: 4px;
        }


        .last_round_winners .item .address .val
        {
            font-size: 24px;
        }


        .last_round_winners .item .staked,
        .last_round_winners .item .tickets
        {
            font-size: 16px;
        }


        .last_round_winners .item .staked .val,
        .last_round_winners .item .tickets .val
        {
            font-size: 22px;
        }


        .last_round_winners .item .tickets .val svg
        {
            width: 22px;
            height: 18px;
        }
    }



    @media (max-width: 767px)
    {
        .last_round_winners
        {
            margin-bottom: 80px;
        }


        .last_round_winners .bg
        {
            width: 1140px;
        }


        .last_round_winners .title
        {
            font-size: 30px;

            width: 440px;
            height: 88px;
            margin-bottom: 48px;
        }


        .last_round_winners .bulbs
        {
            width: 472px;
            height: 120px;
        }


        .last_round_winners .bulb
        {
            width: 32px;
            height: 32px;
        }


        .last_round_winners .bulb7,
        .last_round_winners .bulb14
        {
            top: calc(50% - 16px);
        }
    }



    @media (max-width: 479px)
    {
        .last_round_winners
        {
            margin-bottom: 68px;
        }


        .last_round_winners .bg
        {
            width: 1024px;
        }


        .last_round_winners .title
        {
            font-size: 26px;

            width: 335px;
            height: 68px;
        }


        .last_round_winners .bulbs
        {
            width: 372px;
            height: 104px;
        }
    }
</style>