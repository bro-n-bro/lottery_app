<template>
    <section class="prize_pool" id="prize_pool">
        <div class="cont">
            <div class="data">
                <div class="title">
                    <span>Prize Pool of this week</span>
                    <span>Prize Pool of this week</span>
                </div>

                <div class="title_bulbs">
                    <div class="bulb bulb1"></div>
                    <div class="bulb bulb2"></div>
                    <div class="bulb bulb3"></div>
                    <div class="bulb bulb4"></div>
                    <div class="bulb bulb5"></div>
                    <div class="bulb bulb6"></div>
                    <div class="bulb bulb7"></div>
                    <div class="bulb bulb8"></div>
                    <div class="bulb bulb9"></div>
                    <div class="bulb bulb10"></div>
                    <div class="bulb bulb11"></div>
                    <div class="bulb bulb12"></div>
                </div>

                <div class="row" v-if="store.prizePool.length">
                    <div class="item_wrap" v-for="(item, index) in store.prizePool" :key="index">
                        <div class="item" :class="{ best: item.best_offer }">
                            <div class="sticker" v-if="item.best_offer">Best offer</div>

                            <img :src="item.image" :alt="item.name" class="thumb">

                            <div class="info">
                                <div class="collection">
                                    <a v-if="item.collection_link" :href="item.collection_link" target="_blank" rel="noopener nofollow">
                                        {{ item.collection_name }}
                                    </a>

                                    <span v-else>{{ item.collection_name }}</span>
                                </div>

                                <div class="name">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
	import { useGlobalStore } from '@/store'


    const store = useGlobalStore()
</script>


<style scoped>
    .prize_pool
    {
        position: relative;

        margin-bottom: 40px;
    }


    .prize_pool .data
    {
        position: relative;

        height: 818.5px;
        padding: 196px 140px 77px;
    }


    .prize_pool .data > *
    {
        position: relative;
        z-index: 3;
    }


    .prize_pool .data:before
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 50%;

        display: block;

        width: 1692px;
        height: 100%;

        content: '';
        transform: translateX(-50%);
        pointer-events: none;

        background: url(@/assets/bg_prize_pool_data.png) 50% 100%/100% 100% no-repeat;
    }


    .prize_pool .title
    {
        font-size: 30px;
        font-weight: 800;

        position: absolute;
        z-index: 3;
        top: 57px;
        right: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 556px;
        height: 113px;
        margin: 0 auto;
        padding-bottom: 8px;

        text-align: center;
        white-space: nowrap;
        text-transform: uppercase;

        background: url(@/assets/bg_prize_pool_title.svg) 0 0/100% 100% no-repeat;
    }


    .prize_pool .title span:first-child
    {
        position: relative;
        z-index: 2;

        display: block;

        background: linear-gradient(168deg, #ffce2b 20.31%, #ffe590 29.2%, #ffce2b 37.73%, #d6a20e 48.05%, #ffce2b 51.25%, #e7a006 59.79%, #fed34a 67.25%, #d79300 78.63%, #d79300 91.44%);
        -webkit-background-clip: text;
                background-clip: text;

        -webkit-text-fill-color: transparent;
    }


    .prize_pool .title span:last-child
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;

        display: block;

        margin-top: -4px;

        transform: translate(-50%, -50%);

        color: #5f2b00;
        text-shadow: 0 7px 5px #5f2b00;

        -webkit-text-stroke: 7px #5f2b00;
    }


    .prize_pool .title_bulbs
    {
        position: absolute;
        z-index: 3;
        top: 40px;
        right: 0;
        left: 0;

        width: 568px;
        height: 147px;
        margin: 0 auto;

        pointer-events: none;
    }


    .prize_pool .title_bulbs .bulb
    {
        position: absolute;

        width: 27px;
        height: 30px;

        background: url(@/assets/prize_pool_title_bulb.svg) 0 0/100% 100% no-repeat;
    }


    .prize_pool .title_bulbs .bulb1
    {
        top: 0;
        left: 5.986%;
    }

    .prize_pool .title_bulbs .bulb2
    {
        top: 0;
        left: 25.880%;
    }

    .prize_pool .title_bulbs .bulb3
    {
        top: 0;
        left: 45.774%;
    }

    .prize_pool .title_bulbs .bulb4
    {
        top: 0;
        left: 65.669%;
    }

    .prize_pool .title_bulbs .bulb5
    {
        top: 0;
        left: 85.563%;
    }

    .prize_pool .title_bulbs .bulb6
    {
        top: 0;
        right: 0;
        bottom: 0;

        margin: auto 0;

        transform: rotate(90deg);
    }

    .prize_pool .title_bulbs .bulb7
    {
        bottom: 0;
        left: 82.042%;

        transform: rotate(180deg);
    }

    .prize_pool .title_bulbs .bulb8
    {
        bottom: 0;
        left: 63.908%;

        transform: rotate(180deg);
    }

    .prize_pool .title_bulbs .bulb9
    {
        bottom: 0;
        left: 45.774%;

        transform: rotate(180deg);
    }

    .prize_pool .title_bulbs .bulb10
    {
        bottom: 0;
        left: 27.641%;

        transform: rotate(180deg);
    }

    .prize_pool .title_bulbs .bulb11
    {
        bottom: 0;
        left: 9.507%;

        transform: rotate(180deg);
    }

    .prize_pool .title_bulbs .bulb12
    {
        top: 0;
        bottom: 0;
        left: 0;

        margin: auto 0;

        transform: rotate(-90deg);
    }


    .prize_pool .title_bulbs .bulb:before
    {
        position: absolute;
        top: 50%;
        left: 50%;

        display: block;

        width: 143px;
        height: 143px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        opacity: 0;
        border-radius: 50%;
        background: radial-gradient(ellipse at center,  rgba(252,80,0,.3) 0%,rgba(255,238,152,0) 60%,rgba(255,255,169,0) 100%);
    }


    .prize_pool .title_bulbs .bulb:nth-child(odd):before
    {
        animation: blink 1s infinite steps(1, end);
    }

    .prize_pool .title_bulbs .bulb:nth-child(even):before
    {
        animation: blink 1s infinite steps(1, end) reverse;
    }


    .prize_pool .row
    {
        align-content: stretch;
        align-items: stretch;
        justify-content: center;

        margin-bottom: -35px;
        margin-left: -46px;
    }


    .prize_pool .row > *
    {
        width: 187px;
        max-width: calc(20% - 46px);
        margin-bottom: 35px;
        margin-left: 46px;
    }


    .prize_pool .item_wrap
    {
        border-radius: 14px;
        background: radial-gradient(103.73% 103.73% at 50% 3.25%, rgba(242, 242, 242, .12) 0%, rgba(242, 242, 242, .00) 100%), #000;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .25) inset, 0 11px 11px 0 rgba(0, 5, 38, .45);
    }


    .prize_pool .item
    {
        position: relative;

        height: 230px;

        border-radius: 14px;
    }


    .prize_pool .item.best:before
    {
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        content: '';
        pointer-events: none;

        background: url(@/assets/prize_pool_sticker_border.png) 0 0/100% 100% no-repeat;
    }


    .prize_pool .item .sticker
    {
        font-size: 18px;
        font-weight: 500;

        position: absolute;
        z-index: 3;
        top: 5px;
        right: 0;
        left: 0;

        width: 112px;
        height: 28px;
        margin: 0 auto;

        text-align: center;
        pointer-events: none;

        background: url(@/assets/bg_prize_pool_sticker.svg) 0 0/100% 100% no-repeat;
        text-shadow: 0 1px 0 #aa8000, 0 2px 2.5px #ab8000;
    }


    .prize_pool .item .thumb
    {
        position: relative;
        z-index: 1;

        display: block;

        width: 100%;
        height: 190px;
        max-height: calc(100% - 20px);

        border-radius: 14px 14px 0 0;

        object-fit: cover;
    }


    .prize_pool .item .info
    {
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;

        overflow: hidden;

        width: 100%;
        padding: 20px 12px 10px;

        border-radius: 0 0 14px 14px;
    }


    .prize_pool .item .info:before
    {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 71px;
        max-height: 100%;

        content: '';

        background: linear-gradient(180deg, rgba(0, 0, 0, .00) 0%, #000 41.81%);
    }


    .prize_pool .item .info:after
    {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 0;

        display: block;

        width: 100%;
        height: calc(100% - 71px);

        content: '';

        background: #000;
    }


    .prize_pool .item .collection
    {
        font-size: 12px;
        font-weight: 500;

        margin-bottom: 6px;

        text-decoration: underline;

        text-decoration-thickness: 1px;
    }


    .prize_pool .item .collection a
    {
        text-decoration: none;

        color: currentColor;

        text-decoration-thickness: 1px;
    }


    .prize_pool .item .name
    {
        font-size: 16px;
        font-weight: 500;

        text-transform: capitalize;
    }



    .prize_pool .bulbs
    {
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 85px;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: calc(100% - 228px);
        margin: 0 auto;

        pointer-events: none;
    }


    .prize_pool .bulbs .bulb
    {
        position: relative;

        width: 37px;
        height: 23px;

        background: url(@/assets/prize_pool_bottom_bulb.svg) 0 0/100% 100% no-repeat;
    }


    .prize_pool .bulbs .bulb:before
    {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;

        display: block;

        width: 85px;
        height: 85px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        opacity: 0;
        border-radius: 50%;
        background: radial-gradient(ellipse at center,  rgba(255,255,169,.3) 0%,rgba(255,244,152,0) 60%,rgba(255,255,169,0) 100%);
    }


    .prize_pool .bulbs .bulb:nth-child(odd):before
    {
        animation: blink 1s infinite steps(1, end);
    }

    .prize_pool .bulbs .bulb:nth-child(even):before
    {
        animation: blink 1s infinite steps(1, end) reverse;
    }



    @media print, (max-width: 1439px)
    {
        .prize_pool .data
        {
            padding: 196px 64px 120px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .prize_pool
        {
            margin-bottom: 32px;
        }


        .prize_pool .data
        {
            height: 728px;
            padding: 180px 0 106px;
        }


        .prize_pool .title
        {
            font-size: 28px;

            width: 489px;
            height: 100px;
            padding-bottom: 0;
        }


        .prize_pool .title span:last-child
        {
            margin-top: 0;

            text-shadow: 0 6px 4px #5f2b00;

            -webkit-text-stroke: 6px #5f2b00;
        }


        .prize_pool .title_bulbs
        {
            top: 38px;

            width: 510px;
            height: 140px;
        }


        .prize_pool .row
        {
            margin-bottom: -32px;
            margin-left: -40px;
        }


        .prize_pool .row > *
        {
            max-width: calc(20% - 40px);
            margin-bottom: 32px;
            margin-left: 40px;
        }


        .prize_pool .item
        {
            height: 204px;

            border-radius: 12px;
        }


        .prize_pool .item .thumb
        {
            border-radius: 12px 12px 0 0;
        }


        .prize_pool .item .info
        {
            border-radius: 0 0 12px 12px;
        }


        .prize_pool .bulbs
        {
            bottom: 74px;

            width: calc(100% - 24px);
        }
    }



    @media print, (max-width: 1023px)
    {
        .prize_pool .data
        {
            height: 728px;
            padding: 180px 0 106px;
        }


        .prize_pool .title
        {
            font-size: 24px;

            width: 391px;
            height: 80px;
        }


        .prize_pool .title_bulbs
        {
            top: 28px;

            transform: scale(.8);
        }


        .prize_pool .data
        {
            height: 664px;
            padding: 160px 0 96px;
        }


        .prize_pool .row
        {
            margin-bottom: -24px;
            margin-left: -40px;
        }


        .prize_pool .row > *
        {
            max-width: calc(33.333% - 40px);
            margin-bottom: 24px;
            margin-left: 40px;
        }


        .prize_pool .item
        {
            height: 190px;
        }


        .prize_pool .bulbs
        {
            bottom: 68px;

            width: calc(100% - 24px);
        }


        .prize_pool .bulbs :nth-last-child(1),
        .prize_pool .bulbs :nth-last-child(2)
        {
            display: none;
        }


        .prize_pool .bulbs .bulb
        {
            width: 32px;
            height: 20px;
        }


        .prize_pool .bulbs .bulb:before
        {
            width: 76px;
            height: 76px;
        }
    }



    @media (max-width: 767px)
    {
        .prize_pool
        {
            margin-bottom: 68px;
        }


        .prize_pool .data
        {
            width: 355px;
            max-width: 100%;
            height: 760px;
            margin: 0 auto;
            padding: 132px 40px 32px;
        }


        .prize_pool .title
        {
            font-size: 20px;

            top: 32px;

            width: 337px;
            height: 68px;
        }


        .prize_pool .title_bulbs
        {
            top: -4px;
            right: auto;
            left: 50%;

            transform: translateX(-50%) scale(.68);
        }


        .prize_pool .data:before
        {
            top: auto;
            bottom: 0;

            width: 355px;
            height: 669px;

            background: url(@/assets/bg_mob_prize_pool_data.png) 50% 100% / 100% 100% no-repeat;
        }


        .prize_pool .row
        {
            margin-bottom: -12px;
            margin-left: -12px;
        }

        .prize_pool .row > *
        {
            width: calc(50% - 12px);
            max-width: calc(50% - 12px);
            margin-bottom: 12px;
            margin-left: 12px;
        }


        .prize_pool .item
        {
            height: 140px;
        }


        .prize_pool .item .info
        {
            padding: 20px 8px 8px;
        }


        .prize_pool .item .collection
        {
            font-size: 10px;

            margin-bottom: 4px;
        }


        .prize_pool .item .name
        {
            font-size: 12px;
        }


        .prize_pool .bulbs
        {
            bottom: 12px;

            width: calc(100% - 64px);
        }


        .prize_pool .bulbs :nth-last-child(3),
        .prize_pool .bulbs :nth-last-child(4),
        .prize_pool .bulbs :nth-last-child(5)
        {
            display: none;
        }


        .prize_pool .bulbs .bulb
        {
            width: 24px;
            height: 15px;
        }


        .prize_pool .bulbs .bulb:before
        {
            width: 60px;
            height: 60px;
        }
    }
</style>
