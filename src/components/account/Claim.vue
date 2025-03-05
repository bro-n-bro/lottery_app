<template>
    <div class="claim">
        <img src="@/assets/claim_arrow.png" alt="" class="arrow">

        <button class="btn">Claim</button>
    </div>
</template>


<script setup>

</script>


<style scoped>
    .claim
    {
        position: absolute;
        z-index: 3;
        top: 60px;
        right: 50%;

        width: 209px;
        height: 627px;
        margin-right: -716px;

        background: url('@/assets/bg_claim.svg') 0 0/100% 100% no-repeat;
    }


    .claim:before,
    .claim:after
    {
        position: absolute;
        top: 22%;
        left: -18px;

        display: block;

        width: 28px;
        height: 53px;

        content: '';
        pointer-events: none;

        background: url('@/assets/claim_sep.svg') 0 0/100% 100% no-repeat;
    }

    .claim:after
    {
        top: auto;
        bottom: 21%;
        left: -19px;
    }


    .claim .arrow
    {
        position: absolute;
        z-index: 3;
        top: 32px;
        right: -28px;

        display: block;

        height: 486px;

        pointer-events: none;
    }


    .claim .btn
    {
        font-size: 28px;
        font-weight: 900;

        position: absolute;
        z-index: 2;
        right: 2px;
        bottom: 31px;
        left: 0;

        width: 145px;
        height: 70px;
        margin: 0 auto;

        text-transform: uppercase;

        background: url('@/assets/bg_claim_btn.svg') 0 0/100% 100% no-repeat;
    }
</style>