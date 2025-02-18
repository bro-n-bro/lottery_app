<template>
    <section class="prize_pool" id="prize_pool">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <div class="title">Prize Pool of this week</div>

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
        </div>
    </section>
</template>


<script setup>
    import { onBeforeMount } from 'vue'
	import { useGlobalStore } from '@/store'


    const store = useGlobalStore()


    onBeforeMount(async () => {
        // Load prize poll
        await store.loadPrizePool()
    })
</script>


<style scoped>
    .prize_pool
    {
        padding: 20px 0 84px;
    }


    .prize_pool .data_wrap
    {
        position: relative;

        padding: 1px;

        border-radius: 20px;
        background: linear-gradient(to bottom,  #7b1dd8 0%,#3d0376 100%);
    }


    .prize_pool .data_wrap:before
    {
        position: absolute;
        z-index: 1;
        right: 0;
        bottom: -29px;
        left: 0;

        display: block;

        width: 1299px;
        max-width: 100%;
        height: 146px;
        margin: 0 auto;

        content: '';
        pointer-events: none;

        border-radius: 30px;
        background: #000;

                filter: blur(41px);
        -webkit-filter: blur(41px);
    }


    .prize_pool .data
    {
        position: relative;
        z-index: 2;

        overflow: hidden;

        padding: 19px 19px 29px;

        border-radius: 19px;
        background: radial-gradient(123.39% 123.39% at 50% 0%, rgba(165, 120, 255, .40) 0%, rgba(165, 120, 255, .00) 100%), #400080;
    }


    .prize_pool .title
    {
        font-size: var(--font_size_title);
        font-weight: 500;

        margin-bottom: 40px;

        text-align: center;
    }


    .prize_pool .row
    {
        align-content: stretch;
        align-items: stretch;
        justify-content: center;

        margin-bottom: -30px;
        margin-left: -40px;
    }


    .prize_pool .row > *
    {
        width: calc(20% - 40px);
        margin-bottom: 30px;
        margin-left: 40px;
    }


    .prize_pool .item_wrap
    {
        padding: 1px;

        border-radius: 24px;
        background: linear-gradient(to bottom,  #646464 0%,#060606 100%);
        box-shadow: 0 11px 11px 0 rgba(0, 5, 38, .45);
    }


    .prize_pool .item
    {
        position: relative;

        padding: 19px;

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

        margin-bottom: 14px;
        padding-bottom: 100%;

        border-radius: 12px;
        background: #333;
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
        font-weight: 500;

        text-transform: capitalize;
    }
</style>
