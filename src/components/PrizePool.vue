<template>
    <section class="prize_pool" id="prize_pool">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <div class="title">Prize Pool of this week</div>

                    <div class="row">
                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
                        </div>

                        <div class="item">
                            <div class="thumb">

                            </div>

                            <div class="collection">Mad Scientists</div>

                            <div class="name">Mad Scientist #3519</div>
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
    .prize_pool
    {
        padding: 20px 0 84px;
    }


    .prize_pool .data_wrap
    {
        position: relative;

        padding: 1px;

        border-radius: 20px;
        background: linear-gradient(to bottom,  #2342b5 0%,#041142 100%);
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

        border: 1px solid #2849c7;
        border-radius: 19px;
        background: radial-gradient(106.93% 106.93% at 50% 0%, rgba(69, 140, 255, .40) 0%, rgba(69, 140, 255, .00) 100%), #051348;
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

        margin-bottom: -30px;
        margin-left: -40px;
    }


    .prize_pool .row > *
    {
        width: calc(25% - 40px);
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
        padding: 19px;

        border-radius: 23px;
        background: #060606;
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


    .prize_pool .item .name
    {
        font-weight: 500;

        text-transform: capitalize;
    }
</style>
