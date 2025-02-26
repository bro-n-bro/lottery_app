<template>
    <section class="prize_pool" id="prize_pool">
        <div class="cont">
            <div class="data">
                <div class="title">
                    <span>Prize Pool of this week</span>
                    <span>Prize Pool of this week</span>
                </div>

                <div class="row" v-if="store.prizePool.length">
                    <div class="item_wrap" v-for="(item, index) in store.prizePool" :key="index">
                        <div class="item" :class="{ best: item.best_offer }">
                            <div class="sticker" v-if="item.best_offer">Best offer</div>

                            <div class="thumb">
                                <img :src="item.image" :alt="item.name" loading="lazy">
                            </div>

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
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount } from 'vue'
	import { useGlobalStore } from '@/store'


    const store = useGlobalStore()


    onBeforeMount(async () => {
        try {
            // Load prize poll
            await store.loadPrizePool()
        } catch (error) {
            console.error('PrizePool.vue:', error)
        }
    })
</script>


<style scoped>
    .prize_pool
    {
        position: relative;

        margin-bottom: 40px;
    }


    .prize_pool:before
    {
        position: absolute;
        z-index: 9;
        top: -28px;
        left: 50%;

        display: block;

        width: 705px;
        height: 284px;

        content: '';
        transform: translateX(-50%);
        pointer-events: none;

        background: url('@/assets/bg_prize_pool_title_lights.svg') 0 0/100% 100% no-repeat;

        mix-blend-mode: screen;
    }


    .prize_pool .data
    {
        position: relative;

        height: 819px;
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

        width: 1987px;
        height: 100%;

        content: '';
        transform: translateX(-50%);
        pointer-events: none;

        background: url('@/assets/bg_prize_pool_data.svg') 50% 100%/100% 100% no-repeat;
    }


    .prize_pool .data:after
    {
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 58px;
        left: 0;

        display: block;

        width: 1284px;
        height: 89px;
        margin: 0 auto;

        content: '';
        pointer-events: none;

        background: url('@/assets/bg_prize_pool_data_light.svg') 0 0/100% 100% no-repeat;

        mix-blend-mode: screen;
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

        background: url('@/assets/bg_prize_pool_title.svg') 0 0/100% 100% no-repeat;
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
        display: flex;
        flex-direction: column;

        padding: 1px;

        border-radius: 24px;
        background: linear-gradient(to bottom,  #646464 0%,#060606 100%);
        box-shadow: 0 11px 11px 0 rgba(0, 5, 38, .45);
    }


    .prize_pool .item
    {
        position: relative;

        flex: 1 0 auto;

        padding: 19px 19px 13px;

        border-radius: 23px;
        background: #060606;
    }


    .prize_pool .item.best:before
    {
        position: absolute;
        z-index: 3;
        top: -1px;
        left: -1px;

        display: block;

        width: calc(100% + 2px);
        height: calc(100% + 2px);

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

        margin-bottom: 12px;
        padding-bottom: 100%;

        border-radius: 12px;
    }


    .prize_pool .item .thumb img
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        border-radius: inherit;

        object-fit: cover;
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
</style>
