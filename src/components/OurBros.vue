<template>
    <section class="our_bros" id="our_bros">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <div class="title">Our Bros</div>

                    <div class="row">
                        <a href="https://www.stargaze.zone/m/cosmonibblecollection" target="_blank" rel="noopener nofollow" class="item">
                            <div class="thumb">
                                <img src="@/assets/our_bros/CosmosNibble.png" alt="" loading="lazy">
                            </div>

                            <div class="name">CosmosNibble</div>
                        </a>

                        <a href="https://www.stargaze.zone/m/stars12c9nrpkqrfmdvrx4ex8d6qfs8rwrnclsk5jtk4r6u4gy9mjl97js626dtp/tokens" target="_blank" rel="noopener nofollow" class="item">
                            <div class="thumb">
                                <img src="@/assets/our_bros/CryptoGopniks.png" alt="" loading="lazy">
                            </div>

                            <div class="name">CryptoGopniks</div>
                        </a>

                        <a href="https://www.stargaze.zone/m/stars1peea6sz2qh34w5c9x8dmde89ykkaxwgt7e9kg7dnh2hvd2mtptcqswa9xq/tokens" target="_blank" rel="noopener nofollow" class="item">
                            <div class="thumb">
                                <img src="@/assets/our_bros/Red Planet DAO.png" alt="" loading="lazy">
                            </div>

                            <div class="name">Red Planet DAO</div>
                        </a>

                        <a href="https://www.stargaze.zone/m/stars19fv7az3mdpl3kpz22dqwfrp8n8tm82de0efyzmnrrvpf8qysuscsv26mal/tokens" target="_blank" rel="noopener nofollow" class="item">
                            <div class="thumb">
                                <img src="@/assets/our_bros/Sin Garden.png" alt="" loading="lazy">
                            </div>

                            <div class="name">Sin Garden</div>
                        </a>

                        <a href="https://www.stargaze.zone/m/stamps/tokens" target="_blank" rel="noopener nofollow" class="item">
                            <div class="thumb">
                                <img src="@/assets/our_bros/Stamps by Expedition NFT.png" alt="" loading="lazy">
                            </div>

                            <div class="name">Stamps by Expedition NFT</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style scoped>
    .our_bros
    {
        padding: 20px 0 84px;
    }


    .our_bros .data_wrap
    {
        position: relative;

        padding: 1px;

        border-radius: 20px;
        background: linear-gradient(to bottom,  #7b1dd8 0%,#3d0376 100%);
    }


    .our_bros .data_wrap:before
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


    .our_bros .data
    {
        position: relative;
        z-index: 2;

        overflow: hidden;

        padding: 19px 19px 29px;

        border-radius: 19px;
        background: radial-gradient(123.39% 123.39% at 50% 0%, rgba(165, 120, 255, .40) 0%, rgba(165, 120, 255, .00) 100%), #400080;
    }


    .our_bros .title
    {
        font-size: var(--font_size_title);
        font-weight: 500;

        margin-bottom: 40px;

        text-align: center;
    }


    .our_bros .row
    {
        align-content: stretch;
        align-items: stretch;
        justify-content: center;

        margin-bottom: -32px;
        margin-left: -32px;
    }


    .our_bros .row > *
    {
        width: calc(16.666% - 32px);
        margin-bottom: 32px;
        margin-left: 32px;
    }


    .our_bros .item_wrap
    {
        padding: 1px;

        border-radius: 24px;
        background: linear-gradient(to bottom,  #646464 0%,#060606 100%);
        box-shadow: 0 11px 11px 0 rgba(0, 5, 38, .45);
    }


    .our_bros .item
    {
        display: block;

        padding: 19px;

        transition: box-shadow .2s linear;
        text-decoration: none;

        color: currentColor;
        border-radius: 23px;
        background: #060606;
    }


    .our_bros .item .thumb
    {
        position: relative;

        margin-bottom: 14px;
        padding-bottom: 100%;

        border-radius: 12px;
        /* background: #333; */
    }


    .our_bros .item .thumb img
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


    .our_bros .item .name
    {
        font-weight: 500;

        text-transform: capitalize;
    }


    .our_bros .item:hover
    {
        box-shadow: 0 11px 11px 0 rgba(0, 5, 38, .45);
    }
</style>
