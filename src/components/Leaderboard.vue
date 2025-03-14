<template>
    <!-- Leaderboard -->
    <section class="leaderboard" id="leaderboard">
        <div class="cont">
            <!-- Title -->
            <div class="title">
                <span>Leaderboard</span>
            </div>

            <div class="data">
                <!-- Tabs -->
                <div class="tabs">
                    <!-- Tabs button -->
                    <button class="btn" @click.prevent="activeTab = 1" :class="{ active: activeTab === 1 }">Last Round Winners</button>

                    <!-- Tabs button -->
                    <button class="btn" @click.prevent="activeTab = 2" :class="{ active: activeTab === 2 }">Top Stakers</button>
                </div>


                <div class="tab_content last_winners" v-if="activeTab === 1">
                    <!-- Loader -->
                    <TheLoader v-if="loading" />

                    <!-- Winners -->
                    <div class="list" v-else-if="store.lastWinners.length">
                        <!-- Winner -->
                        <div class="item" v-for="(winner, index) in store.lastWinners" :key="winner.id">
                            <div class="number"></div>

                            <div class="address">{{ winner.initial_delegator.address.slice(0, 5) + '...' + winner.initial_delegator.address.slice(-6) }}</div>

                            <div class="staked">Staked: <span>{{ winner.initial_delegator.amount }} {{ store.currentNetwork.symbol }}</span></div>

                            <div class="tickets">
                                <!-- <span>{{ winner.tickets }}</span> -->

                                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8632 9.885C22.6992 9.31661 22.7677 8.70635 23.0536 8.18846C23.3396 7.67058 23.8195 7.28749 24.3879 7.12348L23.1511 2.83725C22.9871 2.26886 22.604 1.7889 22.0861 1.50296C21.5683 1.21703 20.958 1.14853 20.3896 1.31254L3.24468 6.25977C2.67629 6.42378 2.19633 6.80687 1.91039 7.32475C1.62445 7.84264 1.55596 8.4529 1.71997 9.02129L2.95677 13.3075C3.52516 13.1435 4.13543 13.212 4.65331 13.4979C5.1712 13.7839 5.55428 14.2638 5.71829 14.8322C5.88231 15.4006 5.81381 16.0109 5.52787 16.5288C5.24193 17.0467 4.76197 17.4297 4.19358 17.5938L5.43039 21.88C5.5944 22.4484 5.97749 22.9283 6.49537 23.2143C7.01326 23.5002 7.62352 23.5687 8.19191 23.4047L25.3368 18.4575C25.9052 18.2935 26.3852 17.9104 26.6711 17.3925C26.9571 16.8746 27.0256 16.2643 26.8616 15.6959L25.6247 11.4097C25.0564 11.5737 24.4461 11.5052 23.9282 11.2193C23.4103 10.9333 23.0272 10.4534 22.8632 9.885ZM9.90703 16.6108C10.2236 17.0069 10.793 17.271 11.4247 17.4153C12.2586 17.6057 13.2277 17.5943 13.9425 17.388L17.6606 16.3152C18.3754 16.1089 19.2016 15.6023 19.8058 14.9969C20.2636 14.5382 20.6047 14.0114 20.6616 13.5075L17.3836 14.4593C16.3792 14.7491 15.7038 15.5808 15.6859 16.4509C15.2072 15.7241 14.1926 15.3801 13.1882 15.6699L9.90703 16.6108ZM10.7399 15.0419C10.0864 14.8222 9.48849 14.4592 9.13944 13.9507L12.421 13.0111C13.4254 12.7213 14.4824 13.2123 15.0187 14.1387C14.979 13.069 15.612 12.0904 16.6164 11.8005L19.894 10.8474C19.8696 11.4637 19.557 12.0894 19.121 12.6235C18.5454 13.3284 17.7371 13.8969 17.0223 14.1031L13.3042 15.176C12.5894 15.3823 11.6025 15.3318 10.7399 15.0419ZM8.98678 13.4216C9.01124 12.8053 9.32382 12.1796 9.75985 11.6455C10.3354 10.9406 11.1437 10.3721 11.8585 10.1658L15.5766 9.09299C16.2914 8.88673 17.2783 8.93716 18.1409 9.22712C18.7944 9.4468 19.3923 9.80976 19.7414 10.3183L16.4598 11.2578C15.4554 11.5476 14.3984 11.0567 13.8621 10.1303C13.9018 11.2 13.2688 12.1786 12.2644 12.4684L8.98678 13.4216ZM9.06676 9.24356C8.60898 9.70226 8.26787 10.2291 8.21095 10.7329L11.489 9.78112C12.4933 9.49131 13.1687 8.65963 13.1867 7.78955C13.6653 8.51634 14.68 8.86033 15.6844 8.57052L18.9655 7.62964C18.6489 7.23357 18.0796 6.96948 17.4478 6.82517C16.6139 6.6347 15.6449 6.64616 14.93 6.85242L11.212 7.92528C10.4972 8.13153 9.67101 8.6381 9.06676 9.24356Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Coming soon -->
                    <div class="coming_soon" v-else>
                        <span>Coming soon</span>
                    </div>
                </div>


                <div class="tab_content top_stakers" v-if="activeTab === 2">
                    <!-- Loader -->
                    <TheLoader v-if="loading" />

                    <!-- Top stakers -->
                    <div class="list" v-else-if="store.topStakers.length">
                        <!-- Top staker -->
                        <div class="item" v-for="(staker, index) in store.topStakers" :key="index">
                            <div class="number"></div>

                            <div class="address">{{ staker.address.slice(0, 5) + '...' + staker.address.slice(-6) }}</div>

                            <div class="staked">Staked: <span>{{ staker.stake_diff }} {{ store.currentNetwork.symbol }}</span></div>

                            <div class="tickets">
                                <span>{{ staker.tickets }}</span>

                                <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8632 9.885C22.6992 9.31661 22.7677 8.70635 23.0536 8.18846C23.3396 7.67058 23.8195 7.28749 24.3879 7.12348L23.1511 2.83725C22.9871 2.26886 22.604 1.7889 22.0861 1.50296C21.5683 1.21703 20.958 1.14853 20.3896 1.31254L3.24468 6.25977C2.67629 6.42378 2.19633 6.80687 1.91039 7.32475C1.62445 7.84264 1.55596 8.4529 1.71997 9.02129L2.95677 13.3075C3.52516 13.1435 4.13543 13.212 4.65331 13.4979C5.1712 13.7839 5.55428 14.2638 5.71829 14.8322C5.88231 15.4006 5.81381 16.0109 5.52787 16.5288C5.24193 17.0467 4.76197 17.4297 4.19358 17.5938L5.43039 21.88C5.5944 22.4484 5.97749 22.9283 6.49537 23.2143C7.01326 23.5002 7.62352 23.5687 8.19191 23.4047L25.3368 18.4575C25.9052 18.2935 26.3852 17.9104 26.6711 17.3925C26.9571 16.8746 27.0256 16.2643 26.8616 15.6959L25.6247 11.4097C25.0564 11.5737 24.4461 11.5052 23.9282 11.2193C23.4103 10.9333 23.0272 10.4534 22.8632 9.885ZM9.90703 16.6108C10.2236 17.0069 10.793 17.271 11.4247 17.4153C12.2586 17.6057 13.2277 17.5943 13.9425 17.388L17.6606 16.3152C18.3754 16.1089 19.2016 15.6023 19.8058 14.9969C20.2636 14.5382 20.6047 14.0114 20.6616 13.5075L17.3836 14.4593C16.3792 14.7491 15.7038 15.5808 15.6859 16.4509C15.2072 15.7241 14.1926 15.3801 13.1882 15.6699L9.90703 16.6108ZM10.7399 15.0419C10.0864 14.8222 9.48849 14.4592 9.13944 13.9507L12.421 13.0111C13.4254 12.7213 14.4824 13.2123 15.0187 14.1387C14.979 13.069 15.612 12.0904 16.6164 11.8005L19.894 10.8474C19.8696 11.4637 19.557 12.0894 19.121 12.6235C18.5454 13.3284 17.7371 13.8969 17.0223 14.1031L13.3042 15.176C12.5894 15.3823 11.6025 15.3318 10.7399 15.0419ZM8.98678 13.4216C9.01124 12.8053 9.32382 12.1796 9.75985 11.6455C10.3354 10.9406 11.1437 10.3721 11.8585 10.1658L15.5766 9.09299C16.2914 8.88673 17.2783 8.93716 18.1409 9.22712C18.7944 9.4468 19.3923 9.80976 19.7414 10.3183L16.4598 11.2578C15.4554 11.5476 14.3984 11.0567 13.8621 10.1303C13.9018 11.2 13.2688 12.1786 12.2644 12.4684L8.98678 13.4216ZM9.06676 9.24356C8.60898 9.70226 8.26787 10.2291 8.21095 10.7329L11.489 9.78112C12.4933 9.49131 13.1687 8.65963 13.1867 7.78955C13.6653 8.51634 14.68 8.86033 15.6844 8.57052L18.9655 7.62964C18.6489 7.23357 18.0796 6.96948 17.4478 6.82517C16.6139 6.6347 15.6449 6.64616 14.93 6.85242L11.212 7.92528C10.4972 8.13153 9.67101 8.6381 9.06676 9.24356Z" fill="currentColor"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Coming soon -->
                    <div class="coming_soon" v-else>
                        <span>Coming soon</span>
                    </div>
                </div>
            </div>
        </div>

        <img src="@/assets/bg_leaderboard_bottom1.svg" alt="" class="bg_bottom">

        <img src="@/assets/bg_leaderboard_bottom2.svg" alt="" class="bg_bottom2">
    </section>
</template>


<script setup>
    import { ref, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'

    // Components
    import TheLoader from '@/components/Loader.vue'


    const store = useGlobalStore(),
        activeTab = ref(1),
        loading = ref(false)


    onBeforeMount(async () => {
        try {
            await Promise.all([
                // Get last winners
                store.getLastWinners(),

                // Get top stakers
                store.getTopStakers()
            ])
        } catch (error) {
            console.error('Leaberboard.vue:', error)

            // Hide loading
            loading.value = false
        }
    })
</script>


<style scoped>
    .leaderboard
    {
        position: relative;

        margin-bottom: 80px;
        padding: 24px 0 55px;
    }


    .leaderboard .title
    {
        font-size: 35px;
        font-weight: 500;

        position: relative;
        z-index: 5;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        height: 173px;
        margin-bottom: -36px;

        text-align: center;
    }


    .leaderboard .title:before
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 50%;

        display: block;

        width: 823px;
        height: 173px;

        content: '';
        transform: translateX(-50%);
        pointer-events: none;

        background: url(@/assets/bg_leaderboard_title.svg) 0 0/100% 100% no-repeat;
    }


    .leaderboard .title span
    {
        position: relative;
        z-index: 3;
    }


    .leaderboard .data
    {
        position: relative;
        z-index: 2;

        width: 1180px;
        max-width: 100%;
        height: 530px;
        margin: 0 auto;
        padding: 46px 57px 66px;

        border-radius: 42px;
        background: url(@/assets/bg_leaderboard_data.svg) 50%/100% 100% no-repeat, linear-gradient(183deg, #d31200 -33.31%, #420600 131.84%);
    }


    .leaderboard .tabs
    {
        display: flex;
        align-content: stretch;
        align-items: stretch;
        flex-wrap: wrap;
        justify-content: center;
    }


    .leaderboard .tabs .btn
    {
        font-size: 32px;
        font-weight: 900;

        position: relative;
        z-index: 1;

        width: 400px;
        max-width: 50%;
        height: 55px;

        border-radius: 12px 12px 0 0;
        background: linear-gradient(180deg, #fa1d00 0%, #bc1202 98.79%);
        box-shadow: inset 4px -4px 6px rgba(0, 0, 0, .30);
    }


    .leaderboard .tabs .btn.active
    {
        z-index: 2;

        background: #5d0601;
        box-shadow: none;
    }


    .leaderboard .tab_content
    {
        position: relative;

        min-height: 360px;
        padding: 30px;

        border-radius: 30px;
        background: linear-gradient(180deg, #5d0600 0%, #8e0b00 100%);
    }


    .leaderboard .list
    {
        display: flex;
        overflow: auto;
        flex-direction: column;

        width: calc(100% + 24px);
        height: 316px;
        margin: -8px -12px;
        padding: 8px 14px;

        counter-reset: number;

        overscroll-behavior-y: contain;
        gap: 12px;
    }


    .leaderboard .list::-webkit-scrollbar
    {
        display: none;

        width: 0;
        height: 0;

        background-color: none;
    }


    .leaderboard .list::-webkit-scrollbar-thumb
    {
        background-color: none;
    }


    .leaderboard .item
    {
        font-size: 20px;

        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 9px 20px;

        border-radius: 10px;
        background: rgba(0, 0, 0, .70);
        box-shadow: 0 2px 4.5px 0 rgba(255, 255, 255, .15), 0 -2px 4.5px 0 rgba(38, 0, 0, .45);
    }


    .leaderboard .top_stakers .item:nth-child(1):before,
    .leaderboard .top_stakers .item:nth-child(2):before,
    .leaderboard .top_stakers .item:nth-child(3):before
    {
        position: absolute;
        z-index: 3;
        top: 0;
        left: 50%;

        display: block;

        width: 1023px;
        height: 44px;

        content: '';
        transform: translateX(-50%);
        pointer-events: none;
    }


    .leaderboard .top_stakers .item:nth-child(1):before
    {
        background: url(@/assets/bg_top_stakers_place1.svg) 0 0/100% 100% no-repeat;
    }

    .leaderboard .top_stakers .item:nth-child(2):before
    {
        width: 1027px;

        background: url(@/assets/bg_top_stakers_place2.svg) 0 0/100% 100% no-repeat;
    }

    .leaderboard .top_stakers .item:nth-child(3):before
    {
        height: 47px;

        background: url(@/assets/bg_top_stakers_place3.svg) 0 0/100% 100% no-repeat;
    }


    .leaderboard .item .number
    {
        font-weight: 500;

        width: 24px;
        margin-right: 4px;
    }


    .leaderboard .item .number:before
    {
        content: counter(number) '.';
        counter-increment: number;
    }


    .leaderboard .item .address
    {
        font-weight: 500;

        width: 140px;
        max-width: 100%;
    }


    .leaderboard .item .staked
    {
        font-weight: 300;

        width: 200px;
        max-width: 100%;
        margin: 0 auto;
    }


    .leaderboard .item .staked span
    {
        font-weight: 500;

        margin-left: 2px;
    }


    .leaderboard .item .tickets
    {
        font-weight: 900;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-end;

        min-width: 100px;

        text-align: right;

        gap: 6px;
    }


    .leaderboard .item .tickets svg
    {
        display: block;

        width: 28px;
        height: 25px;
    }


    .leaderboard .coming_soon
    {
        font-size: 48px;
        font-weight: 900;

        position: absolute;
        top: 120px;
        right: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 458px;
        height: 118px;
        margin: 0 auto;

        transform: rotate(-3.512deg);
        text-align: center;
        text-transform: uppercase;

        background: url(@/assets/bg_coming_soon.svg) 0 0/100% 100% no-repeat;

        filter: drop-shadow(0px 8px 22.7px rgba(60, 0, 0, .50));
    }


    .leaderboard .coming_soon:before
    {
        position: absolute;
        right: 0;
        bottom: 100%;
        left: 0;

        display: block;

        width: 433px;
        height: 173px;
        margin: 0 auto;
        margin-bottom: -28px;

        content: '';
        transform: rotate(3.512deg);
        pointer-events: none;

        background: url(@/assets/bg_coming_soon_before.svg) 0 0/100% 100% no-repeat;
    }



    .leaderboard .bg_bottom
    {
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 50%;

        display: block;

        width: 655px;
        height: 78px;

        transform: translateX(-50%);
        pointer-events: none;
    }


    .leaderboard .bg_bottom2
    {
        position: absolute;
        z-index: 3;
        bottom: 0;
        left: 50%;

        display: block;

        width: 565px;
        height: 91px;

        transform: translateX(-50%);
        pointer-events: none;
    }



    @media print, (max-width: 1439px)
    {
        .leaderboard .tabs .btn
        {
            font-size: 30px;

            width: 360px;
            height: 52px;
        }


        .leaderboard .coming_soon
        {
            font-size: 40px;

            top: 90px;

            width: 388px;
            height: 100px;
        }


        .leaderboard .coming_soon:before
        {
            width: 330px;
            height: 132px;
            margin-bottom: -22px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .leaderboard .title
        {
            font-size: 32px;

            height: 160px;
            margin-bottom: -34px;
        }


        .leaderboard .title:before
        {
            width: 761px;
            height: 160px;
        }


        .leaderboard .data
        {
            width: 980px;
            height: 504px;
            padding: 44px 48px 48px;

            border-radius: 40px;
        }


        .leaderboard .tabs .btn
        {
            font-size: 28px;

            width: 332px;
        }


        .leaderboard .coming_soon
        {
            font-size: 36px;

            top: 82px;

            width: 341px;
            height: 88px;
        }


        .leaderboard .coming_soon:before
        {
            width: 300px;
            height: 120px;
            margin-bottom: -20px;
        }


        .leaderboard .item
        {
            font-size: 18px;
        }


        .leaderboard .item .staked
        {
            width: 180px;
        }


        .leaderboard .top_stakers .item:nth-child(1):before,
        .leaderboard .top_stakers .item:nth-child(2):before,
        .leaderboard .top_stakers .item:nth-child(3):before
        {
            width: calc(100% + 20px);
            height: 43px;
        }

        .leaderboard .top_stakers .item:nth-child(3):before
        {
            height: 47px;
        }


        .leaderboard .bg_bottom
        {
            bottom: 9px;

            width: 503px;
            height: 60px;
        }

        .leaderboard .bg_bottom2
        {
            bottom: 9px;

            width: 500px;
            height: 80px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .leaderboard
        {
            padding: 0 0 40px;
        }


        .leaderboard .title
        {
            font-size: 28px;

            height: 124px;
            margin-bottom: -28px;
        }


        .leaderboard .title:before
        {
            width: 594px;
            height: 124px;
        }


        .leaderboard .data
        {
            width: 728px;
            height: 440px;
            padding: 44px 40px 44px;

            border-radius: 32px;
        }


        .leaderboard .tabs .btn
        {
            font-size: 24px;

            width: 280px;
            height: 48px;
        }


        .leaderboard .coming_soon
        {
            font-size: 30px;

            top: 70px;

            width: 310px;
            height: 80px;
        }


        .leaderboard .coming_soon:before
        {
            width: 250px;
            height: 100px;
            margin-bottom: -16px;
        }


        .leaderboard .tab_content
        {
            min-height: 296px;
            padding: 24px;

            border-radius: 24px;
        }


        .leaderboard .list
        {
            height: 252px;
            padding: 8px 12px;

            gap: 8px;
        }


        .leaderboard .item
        {
            font-size: 18px;
        }


        .leaderboard .item .staked
        {
            width: 168px;
        }


        .leaderboard .top_stakers .item:nth-child(1):before,
        .leaderboard .top_stakers .item:nth-child(2):before,
        .leaderboard .top_stakers .item:nth-child(3):before
        {
            width: calc(100% + 20px);
            height: 43px;
        }

        .leaderboard .top_stakers .item:nth-child(3):before
        {
            height: 47px;
        }


        .leaderboard .bg_bottom
        {
            bottom: 12px;

            width: 471px;
            height: 56px;
        }

        .leaderboard .bg_bottom2
        {
            bottom: -2px;

            width: 450px;
            height: 72px;
        }
    }



    @media print, (max-width: 767px)
    {
        .leaderboard
        {
            margin-bottom: 60px;
        }


        .leaderboard .title
        {
            font-size: 24px;

            height: 100px;
            margin-bottom: -22px;
        }


        .leaderboard .title:before
        {
            width: 479px;
            height: 100px;
        }


        .leaderboard .data
        {
            width: 440px;
            height: 379px;
            padding: 32px 28px 36px;

            border-radius: 24px;
            background: linear-gradient(183deg, #d31200 -33.31%, #420600 131.84%);
        }


        .leaderboard .data:before
        {
            position: absolute;
            z-index: 1;
            top: -4px;
            left: -4px;

            display: block;

            width: calc(100% + 8px);
            height: calc(100% + 8px);

            content: '';
            pointer-events: none;

            background: url(@/assets/bg_mob_leaderboard_data.svg) 50% / 100% 100% no-repeat;
        }


        .leaderboard .tabs .btn
        {
            font-size: 18px;

            width: 50%;
            height: 44px;
        }


        .leaderboard .coming_soon
        {
            font-size: 24px;

            top: 55px;

            width: 248px;
            height: 64px;
        }


        .leaderboard .coming_soon:before
        {
            width: 200px;
            height: 80px;
            margin-bottom: -13px;
        }


        .leaderboard .tab_content
        {
            min-height: 276px;
            padding: 20px;

            border-radius: 0 0 20px 20px;
        }


        .leaderboard .list
        {
            height: 252px;
        }


        .leaderboard .item
        {
            font-size: 16px;

            padding: 8px 16px;
        }


        .leaderboard .top_stakers .item:nth-child(1):before,
        .leaderboard .top_stakers .item:nth-child(2):before,
        .leaderboard .top_stakers .item:nth-child(3):before
        {
            width: calc(100% + 8px);
            height: 37px;
        }

        .leaderboard .top_stakers .item:nth-child(3):before
        {
            height: 40px;
        }


        .leaderboard .item .address
        {
            width: auto;
        }


        .leaderboard .item .staked
        {
            display: none;
        }


        .leaderboard .item .tickets
        {
            margin-left: auto;
        }


        .leaderboard .item .tickets svg
        {
            width: 24px;
            height: 21px;
        }


        .leaderboard .bg_bottom
        {
            bottom: 9px;

            width: 336px;
            height: 40px;
        }

        .leaderboard .bg_bottom2
        {
            bottom: -2px;

            width: 375px;
            height: 60px;
        }
    }



    @media print, (max-width: 479px)
    {
        .leaderboard
        {
            padding: 0 0 24px;
        }


        .leaderboard .title
        {
            font-size: 20px;

            height: 80px;
            margin-bottom: -22px;
        }


        .leaderboard .title:before
        {
            width: 383px;
            height: 80px;
        }


        .leaderboard .data
        {
            width: 346px;
            height: 298px;
            padding: 28px 20px;

            border-radius: 20px;
        }


        .leaderboard .tabs .btn
        {
            font-size: 14px;

            height: 36px;
        }


        .leaderboard .coming_soon
        {
            font-size: 20px;

            top: 40px;

            width: 217px;
            height: 56px;
        }


        .leaderboard .coming_soon:before
        {
            width: 160px;
            height: 64px;
            margin-bottom: -10px;
        }


        .leaderboard .tab_content
        {
            min-height: 216px;
            padding: 16px;

            border-radius: 0 0 12px 12px;
        }


        .leaderboard .list
        {
            height: 200px;
            padding: 4px 8px;

            gap: 4px;
        }


        .leaderboard .item
        {
            font-size: 14px;

            padding: 4px 12px;

            border-radius: 4px;
        }


        .leaderboard .top_stakers .item:nth-child(1):before,
        .leaderboard .top_stakers .item:nth-child(2):before,
        .leaderboard .top_stakers .item:nth-child(3):before
        {
            width: calc(100% + 6px);
            height: 26px;
        }

        .leaderboard .top_stakers .item:nth-child(3):before
        {
            height: 28px;
        }


        .leaderboard .item .number
        {
            width: 16px;
        }


        .leaderboard .item .tickets svg
        {
            width: 20px;
            height: 18px;
        }


        .leaderboard .bg_bottom
        {
            bottom: -1px;

            width: 288px;
            height: 32px;
        }

        .leaderboard .bg_bottom2
        {
            bottom: -11px;

            width: 300px;
            height: 48px;
        }
    }
</style>
