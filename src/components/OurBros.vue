<template>
    <section class="our_bros" id="our_bros">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <div class="title">Our Bros</div>

                    <div class="row">
                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="name">Who the fuckis this???</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="name">Who the fuckis this???</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="name">Who the fuckis this???</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="name">Who the fuckis this???</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="name">Who the fuckis this???</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="name">Who the fuckis this???</div>
                        </div>
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
        background: linear-gradient(to bottom,  #2342b5 0%,#041142 100%);
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

        border: 1px solid #2849c7;
        border-radius: 19px;
        background: radial-gradient(106.93% 106.93% at 50% 0%, rgba(69, 140, 255, .40) 0%, rgba(69, 140, 255, .00) 100%), #051348;
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
        padding: 19px;

        border-radius: 23px;
        background: #060606;
    }


    .our_bros .item .thumb
    {
        position: relative;

        margin-bottom: 14px;
        padding-bottom: 100%;

        border-radius: 12px;
        background: #333;
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
</style>
