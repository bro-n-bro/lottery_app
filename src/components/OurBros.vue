<template>
    <section class="our_bros" id="our_bros">
        <div class="data">
            <div class="cont">
                <div class="title">Our Bros</div>

                <div class="row">
                    <a href="https://www.stargaze.zone/m/stamps/tokens" target="_blank" rel="noopener nofollow" class="item">
                        <div>
                            <div class="thumb">
                                <img src="@/assets/our_bros/Stamps by Expedition NFT.png" alt="">
                            </div>

                            <div class="name">Expedition</div>
                        </div>
                    </a>

                    <a href="https://www.stargaze.zone/m/cosmonibblecollection" target="_blank" rel="noopener nofollow" class="item">
                        <div>
                            <div class="thumb">
                                <img src="@/assets/our_bros/CosmosNibble.png" alt="">
                            </div>

                            <div class="name">CosmosNibble</div>
                        </div>
                    </a>

                    <a href="https://www.stargaze.zone/m/stars1peea6sz2qh34w5c9x8dmde89ykkaxwgt7e9kg7dnh2hvd2mtptcqswa9xq/tokens" target="_blank" rel="noopener nofollow" class="item">
                        <div>
                            <div class="thumb">
                                <img src="@/assets/our_bros/Red Planet DAO.png" alt="">
                            </div>

                            <div class="name">Red Planet</div>
                        </div>
                    </a>

                    <a href="https://www.stargaze.zone/m/stars12c9nrpkqrfmdvrx4ex8d6qfs8rwrnclsk5jtk4r6u4gy9mjl97js626dtp/tokens" target="_blank" rel="noopener nofollow" class="item">
                        <div>
                            <div class="thumb">
                                <img src="@/assets/our_bros/CryptoGopniks.png" alt="">
                            </div>

                            <div class="name">Crypto Gopniks</div>
                        </div>
                    </a>

                    <a href="https://www.stargaze.zone/m/stars19fv7az3mdpl3kpz22dqwfrp8n8tm82de0efyzmnrrvpf8qysuscsv26mal/tokens" target="_blank" rel="noopener nofollow" class="item">
                        <div>
                            <div class="thumb">
                                <img src="@/assets/our_bros/Sin Garden.png" alt="">
                            </div>

                            <div class="name">Sin<br> Garden</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    .our_bros
    {
        padding: 68px 0 120px;
    }


    .our_bros .data
    {
        position: relative;

        padding: 100px 0 64px;

        background: radial-gradient(130.87% 125.45% at 50% -4.62%, rgba(165, 120, 255, .40) 0%, rgba(165, 120, 255, .00) 100%), #400080;
    }


    .our_bros .data:before,
    .our_bros .data:after
    {
        position: absolute;
        z-index: 1;
        top: -6px;
        left: 0;

        display: block;

        width: 100%;
        height: 34px;

        content: '';
        pointer-events: none;

        background: url(@/assets/bg_our_bros_line.svg) 0 0/auto 34px repeat-x;
    }


    .our_bros .data:after
    {
        top: auto;
        bottom: -6px;

        transform: scale(1, -1);
    }


    .our_bros .title
    {
        font-size: 40px;
        font-weight: 500;

        position: absolute;
        z-index: 3;
        top: -52px;
        right: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 434px;
        height: 102px;
        margin: 0 auto;

        text-align: center;

        background: url(@/assets/bg_our_bros_title.svg) 0 0/100% 100% no-repeat;
    }


    .our_bros .row
    {
        display: block;
        overflow: auto;

        width: calc(100% + 48px);
        margin: -29px -24px;
        padding: 29px 24px;

        text-align: center;
        white-space: nowrap;

        scroll-padding: 0 24px;
        scroll-snap-type: x mandatory;
        scrollbar-color: transparent transparent !important;
        scrollbar-width: thin !important;
    }


    .our_bros .row::-webkit-scrollbar
    {
        display: none !important;

        width: 0 !important;
        height: 0 !important;

        background-color: transparent !important;
    }


    .our_bros .row::-webkit-scrollbar-thumb
    {
        background-color: transparent !important;
    }


    .our_bros .row > * + *
    {
        margin-left: 64px;
    }


    .our_bros .item
    {
        position: relative;

        display: inline-block;

        text-align: center;
        vertical-align: top;
        white-space: normal;
        text-decoration: none;

        color: currentColor;

        scroll-snap-align: start;
    }


    .our_bros .item:before
    {
        position: absolute;
        z-index: 1;
        top: -29px;
        right: 0;
        left: 0;

        display: block;

        margin: 0 auto;

        content: '';
        pointer-events: none;

        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }


    .our_bros .item > div
    {
        position: relative;
        z-index: 3;

        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
    }


    .our_bros .item .thumb img
    {
        display: block;

        max-width: 100%;
        margin: 0 auto;
    }


    .our_bros .item .name
    {
        font-size: 23.775px;
        font-weight: 600;

        text-transform: uppercase;
    }


    .our_bros .item:nth-child(1) > div
    {
        width: 213px;
        height: 243px;
        padding: 26px;

        transition: transform .5s ease-in-out;

        background-image: url(@/assets/bg_our_bros_item1.svg);
    }

    .our_bros .item:nth-child(1):before
    {
        width: 145px;
        height: 149px;

        background-image: url(@/assets/bg_our_bros_item1_before.svg);
    }

    .our_bros .item:nth-child(1) .thumb
    {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .our_bros .item:nth-child(1) .thumb img
    {
        width: 131px;
        height: 131px;
    }


    .our_bros .item:nth-child(2) > div
    {
        width: 193px;
        height: 235px;
        padding: 13px;

        background-image: url(@/assets/bg_our_bros_item2.svg);
    }

    .our_bros .item:nth-child(2):before
    {
        width: 108px;
        height: 110px;

        background-image: url(@/assets/bg_our_bros_item2_before.svg);
    }

    .our_bros .item:nth-child(2) .thumb
    {
        margin-top: 14px;
        margin-bottom: 14px;
    }

    .our_bros .item:nth-child(2) .thumb img
    {
        width: 139px;
        height: 139px;
    }

    .our_bros .item:nth-child(2) .name
    {
        font-size: 19.812px;
    }


    .our_bros .item:nth-child(3) > div
    {
        width: 193px;
        height: 194px;
        padding: 21px;

        background-image: url(@/assets/bg_our_bros_item3.svg);
    }

    .our_bros .item:nth-child(3):before
    {
        width: 108px;
        height: 110px;

        background-image: url(@/assets/bg_our_bros_item3_before.svg);
    }

    .our_bros .item:nth-child(3) .thumb
    {
        margin-top: 7px;
        margin-bottom: 4px;
    }

    .our_bros .item:nth-child(3) .thumb img
    {
        width: 112px;
        height: 104px;
    }


    .our_bros .item:nth-child(4) > div
    {
        width: 188px;
        height: 252px;
        padding: 19px;

        background-image: url(@/assets/bg_our_bros_item4.svg);
    }

    .our_bros .item:nth-child(4):before
    {
        width: 108px;
        height: 110px;

        background-image: url(@/assets/bg_our_bros_item3_before.svg);
    }

    .our_bros .item:nth-child(4) .thumb
    {
        margin-top: 7px;
        margin-bottom: -7px;
    }

    .our_bros .item:nth-child(4) .thumb img
    {
        width: 143px;
        height: 143px;
    }


    .our_bros .item:nth-child(5) > div
    {
        width: 184px;
        height: 250px;
        padding: 21px 21px 20px;

        background-image: url(@/assets/bg_our_bros_item5.svg);
    }

    .our_bros .item:nth-child(5):before
    {
        width: 108px;
        height: 110px;

        background-image: url(@/assets/bg_our_bros_item3_before.svg);
    }

    .our_bros .item:nth-child(5) .thumb
    {
        margin-top: 16px;
        margin-bottom: 4px;
    }

    .our_bros .item:nth-child(5) .thumb img
    {
        width: 119px;
        height: 119px;
    }


    .our_bros .item:hover > div
    {
        animation: tiltBounce .5s ease-in-out forwards;
    }

    .our_bros .item:not(:hover) > div
    {
        animation: tiltReturn .2s ease-in-out;
    }


    @keyframes tiltBounce
    {
        0%
        {
            transform: rotate(0deg);
        }
        75%
        {
            transform: rotate(6deg);
        }
        100%
        {
            transform: rotate(5deg);
        }
    }

    @keyframes tiltReturn
    {
        0%
        {
            transform: rotate(5deg);
        }
        100%
        {
            transform: rotate(0deg);
        }
    }



    @media print, (max-width: 1279px)
    {
        .our_bros
        {
            padding: 60px 0 100px;
        }


        .our_bros .title
        {
            font-size: 32px;

            top: -43px;

            width: 358px;
            height: 84px;
        }


        .our_bros .row > * + *
        {
            margin-left: 48px;
        }


        .our_bros .data
        {
            padding-top: 92px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .our_bros .item .name
        {
            font-size: 18px;
        }


        .our_bros .item:nth-child(1) > div
        {
            width: 188px;
            height: 217px;
            padding: 24px;
        }

        .our_bros .item:nth-child(1) .thumb
        {
            margin-top: 8px;
            margin-bottom: 8px;
        }

        .our_bros .item:nth-child(1) .thumb img
        {
            width: 116px;
            height: 116px;
        }


        .our_bros .item:nth-child(2) > div
        {
            width: 168px;
            height: 205px;
            padding: 12px;
        }

        .our_bros .item:nth-child(2) .thumb
        {
            margin-top: 13px;
            margin-bottom: 13px;
        }

        .our_bros .item:nth-child(2) .thumb img
        {
            width: 120px;
            height: 120px;
        }

        .our_bros .item:nth-child(2) .name
        {
            font-size: 17px;
        }


        .our_bros .item:nth-child(3) > div
        {
            width: 168px;
            height: 169px;
            padding: 19px;
        }

        .our_bros .item:nth-child(3) .thumb
        {
            margin-top: 5px;
        }

        .our_bros .item:nth-child(3) .thumb img
        {
            width: 98px;
            height: 91px;
        }


        .our_bros .item:nth-child(4) > div
        {
            width: 168px;
            height: 226px;
            padding: 18px 17px 17px;
        }

        .our_bros .item:nth-child(4) .thumb
        {
            margin-top: 5px;
            margin-bottom: -5px;
        }

        .our_bros .item:nth-child(4) .thumb img
        {
            width: 124px;
            height: 124px;
        }


        .our_bros .item:nth-child(5) > div
        {
            width: 168px;
            height: 228px;
            padding: 20px 20px 19px 19px;
        }

        .our_bros .item:nth-child(5) .thumb
        {
            margin-top: 14px;
            margin-bottom: 12px;
        }

        .our_bros .item:nth-child(5) .thumb img
        {
            width: 104px;
            height: 104px;
        }
    }



    @media (max-width: 767px)
    {
        .our_bros
        {
            padding: 48px 0 80px;
        }


        .our_bros .title
        {
            font-size: 28px;

            top: -34px;

            width: 292px;
            height: 68px;
        }


        .our_bros .row > * + *
        {
            margin-left: 36px;
        }


        .our_bros .data
        {
            padding-top: 80px;
        }


        .our_bros .row
        {
            margin: -15px -24px;
            padding: 15px 24px;
        }


        .our_bros .item:before
        {
            top: -15px;
        }


        .our_bros .item .name
        {
            font-size: 12px;
        }


        .our_bros .item:nth-child(1):before
        {
            width: 73px;
            height: 75px;
        }

        .our_bros .item:nth-child(1) > div
        {
            width: 108px;
            height: 124px;
            padding: 13px;
        }

        .our_bros .item:nth-child(1) .thumb
        {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .our_bros .item:nth-child(1) .thumb img
        {
            width: 66px;
            height: 66px;
        }


        .our_bros .item:nth-child(2):before
        {
            width: 55px;
            height: 56px;
        }

        .our_bros .item:nth-child(2) > div
        {
            width: 97px;
            height: 115px;
            padding: 7px;
        }

        .our_bros .item:nth-child(2) .thumb
        {
            margin-top: 7px;
            margin-bottom: 6px;
        }

        .our_bros .item:nth-child(2) .thumb img
        {
            width: 70px;
            height: 70px;
        }

        .our_bros .item:nth-child(2) .name
        {
            font-size: 10px;
        }


        .our_bros .item:nth-child(3):before
        {
            width: 55px;
            height: 56px;
        }

        .our_bros .item:nth-child(3) > div
        {
            width: 98px;
            height: 98px;
            padding: 11px;
        }

        .our_bros .item:nth-child(3) .thumb
        {
            margin-top: 3px;
            margin-bottom: 3px;
        }

        .our_bros .item:nth-child(3) .thumb img
        {
            width: 57px;
            height: 52px;
        }


        .our_bros .item:nth-child(4):before
        {
            width: 55px;
            height: 56px;
        }

        .our_bros .item:nth-child(4) > div
        {
            width: 95px;
            height: 127px;
            padding: 10px;
        }

        .our_bros .item:nth-child(4) .thumb
        {
            margin-top: 0;
            margin-bottom: -4px;
        }

        .our_bros .item:nth-child(4) .thumb img
        {
            width: 72px;
            height: 72px;
        }


        .our_bros .item:nth-child(5):before
        {
            width: 55px;
            height: 56px;
        }

        .our_bros .item:nth-child(5) > div
        {
            width: 93px;
            height: 127px;
            padding: 11px 11px 10px 11px;
        }

        .our_bros .item:nth-child(5) .thumb
        {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .our_bros .item:nth-child(5) .thumb img
        {
            width: 60px;
            height: 60px;
        }
    }



    @media (max-width: 479px)
    {
        .our_bros
        {
            padding: 40px 0 68px;
        }


        .our_bros .title
        {
            font-size: 24px;

            top: -26px;

            width: 223px;
            height: 52px;
        }


        .our_bros .data
        {
            padding-top: 64px;
            padding-bottom: 44px;
        }


        .our_bros .data:before,
        .our_bros .data:after
        {
            top: -5px;

            height: 28px;

            background-size: auto 28px;
        }

        .our_bros .data:after
        {
            top: auto;
            bottom: -5px;
        }


        .our_bros .row > * + *
        {
            margin-left: 28px;
        }
    }
</style>
