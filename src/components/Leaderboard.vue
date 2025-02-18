<template>
    <section class="leaderboard" id="leaderboard">
        <div class="cont">
            <div class="data_wrap">
                <div class="data">
                    <div class="title">Lederboard</div>

                    <div class="list">
                        <div class="item green">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
                        </div>

                        <div class="item">
                            <div class="number"></div>

                            <div class="address">dcsjd...djcnsk</div>

                            <div class="staked">Staked: <span>1000,0000 ATOM</span></div>

                            <div class="wins"><span>29</span> Wins</div>
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
    .leaderboard
    {
        padding: 20px 0 84px;
    }


    .leaderboard .data_wrap
    {
        position: relative;

        padding: 1px;

        border-radius: 20px;
        background: linear-gradient(to bottom,  #7b1dd8 0%,#3d0376 100%);
    }


    .leaderboard .data_wrap:before
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


    .leaderboard .data
    {
        position: relative;
        z-index: 2;

        overflow: hidden;

        padding: 19px 19px 29px;

        border-radius: 19px;
        background: radial-gradient(123.39% 123.39% at 50% 0%, rgba(165, 120, 255, .40) 0%, rgba(165, 120, 255, .00) 100%), #400080;
    }


    .leaderboard .title
    {
        font-size: var(--font_size_title);
        font-weight: 500;

        margin-bottom: 40px;

        text-align: center;
    }


    .leaderboard .list
    {
        display: flex;
        flex-direction: column;

        counter-reset: number;

        gap: 12px;
    }


    .leaderboard .item
    {
        font-size: 24px;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        padding: 14px 30px;

        border-radius: 20px;
        background: #000;
        box-shadow: 0 2px 4.5px 0 rgba(255, 255, 255, .25), 0 -2px 4.5px 0 rgba(0, 5, 38, .45);
    }


    .leaderboard .item.green
    {
        box-shadow: 0 0 0 2px #47c200, 0 2px 4.5px 0 rgba(255, 255, 255, .25), 0 -2px 4.5px 0 rgba(0, 5, 38, .45);
    }


    .leaderboard .item .number
    {
        font-weight: 500;

        width: 32px;
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
    }


    .leaderboard .item .staked
    {
        font-weight: 300;

        margin: 0 auto;
    }


    .leaderboard .item .staked span
    {
        font-weight: 500;

        margin-left: 2px;
    }


    .leaderboard .item .wins
    {
        font-weight: 300;
    }


    .leaderboard .item .wins span
    {
        font-weight: 800;
    }
</style>
