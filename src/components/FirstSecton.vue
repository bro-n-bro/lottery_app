<template>
    <!-- First section -->
    <section class="first_section" id="first_section">
        <div class="cont">
            <!-- First section - Title -->
            <div class="title">Lottery by Bro_n_Bro</div>

            <!-- First section - Description -->
            <div class="desc">Stake atom and get your chance to win NFT once a week</div>

            <!-- First section - Button -->
            <button class="btn" @click.prevent="connectKeplr()" :class="{ process: store.isKeplrConnecting }">
                Connect your wallet
            </button>

            <!-- First section - Explanation -->
            <div class="exp">Stake with Bro and increase your chances!</div>
        </div>


        <!-- First section - Image left -->
        <div class="image_left">
            <img src="@/assets/first_section_img_left.png" alt="">
        </div>

        <!-- First section - Image right -->
        <div class="image_right">
            <img src="@/assets/first_section_img_right.png" alt="">
        </div>
    </section>
</template>


<script setup>
    import { useGlobalStore } from '@/store'


    const store = useGlobalStore()


    // Connect Keplr
    async function connectKeplr() {
        try {
            // Connect Keplr
            await store.connectKeplr()
        } catch (error) {
            console.error('Error connecting to Keplr:', error)

            // Keplr connecting status
            store.isKeplrConnecting = false
        }
    }
</script>


<style scoped>
    .first_section
    {
        position: relative;
        z-index: 1;

        padding: 84px 0 116px;

        text-align: center;
    }


    .first_section .cont
    {
        position: relative;
        z-index: 3;
    }


    .title
    {
        font-size: var(--font_size_title);
        font-weight: 500;
    }


    .desc
    {
        font-size: 32px;
        font-weight: 500;

        margin-top: 20px;
    }


    .btn
    {
        font-size: 18px;
        font-weight: 700;

        margin-top: 48px;
        padding: 13px 30px 14px;

        border-radius: 33px;
        background: linear-gradient(180deg, #ff59d4 0%, #e47200 100%);
    }


    .btn.process
    {
        pointer-events: none;

        opacity: .5;
    }


    .exp
    {
        font-size: 24px;
        font-weight: 500;

        margin-top: 17px;
    }



    .image_left
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;

        margin-left: -914px;

        transform: translateY(-50%);
        pointer-events: none;
    }


    .image_left:before
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;

        display: block;

        width: 813px;
        height: 811px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        background: url('@/assets/first_section_light.svg') 0 0 /100% 100% no-repeat;
    }


    .image_left img
    {
        position: relative;
        z-index: 2;

        display: block;

        width: 412px;
    }



    .image_right
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 50%;

        margin-right: -914px;

        transform: translateY(-50%);
        pointer-events: none;
    }


    .image_right:before
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;

        display: block;

        width: 813px;
        height: 811px;

        content: '';
        transform: translate(-50%, -50%);
        pointer-events: none;

        background: url('@/assets/first_section_light.svg') 0 0 /100% 100% no-repeat;
    }


    .image_right img
    {
        position: relative;
        z-index: 2;

        display: block;

        width: 353px;
    }



    @media print, (max-width: 1439px)
    {
        .desc
        {
            font-size: 26px;

            margin-top: 16px;
        }


        .exp
        {
            font-size: 20px;

            margin-top: 16px;
        }


        .image_left
        {
            margin-left: -836px;
        }


        .image_right
        {
            margin-right: -780px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .first_section
        {
            padding: 80px 0;
        }


        .desc
        {
            font-size: 22px;
        }


        .exp
        {
            font-size: 18px;
        }


        .image_left
        {
            margin-left: -680px;
        }


        .image_left:before
        {
            width: 720px;
            height: 720px;
        }


        .image_left img
        {
            width: 360px;
        }


        .image_right
        {
            margin-right: -640px;
        }


        .image_right:before
        {
            width: 720px;
            height: 720px;
        }


        .image_right img
        {
            width: 300px;
        }
    }


    @media print, (max-width: 1023px)
    {
        .first_section:before
        {
            position: absolute;
            z-index: 1;
            top: 50%;
            left: 50%;

            display: block;

            width: 813px;
            height: 811px;
            margin-top: 80px;

            content: '';
            transform: translate(-50%, -50%);
            pointer-events: none;

            opacity: .4;
            background: url('@/assets/first_section_light.svg') 0 0 /100% 100% no-repeat;
        }


        .desc
        {
            font-size: 20px;
        }


        .image_left,
        .image_right
        {
            display: none;
        }
    }


    @media (max-width: 767px)
    {
        .first_section
        {
            padding: 60px 0 68px;
        }


        .desc
        {
            font-size: 18px;

            padding: 0 48px;
        }


        .btn
        {
            font-size: var(--font_size);

            margin-top: 40px;
            padding: 13px 32px 14px;
        }


        .exp
        {
            font-size: var(--font_size);
        }
    }



    @media (max-width: 479px)
    {
        .desc
        {
            padding: 0 24px;
        }
    }
</style>
