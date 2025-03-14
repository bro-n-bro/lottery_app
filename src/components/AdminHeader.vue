<template>
    <header>
        <div class="cont">
            <!-- Logo -->
            <div class="logo">
                <img src="@/assets/logo.svg" alt="">
            </div>
        </div>
    </header>
</template>


<style scoped>
    header
    {
        position: sticky;
        z-index: 101;
        top: 0;

        border: 1px solid #ae54f2;
        background: linear-gradient(159deg, #6900cf 2.28%, #37006d 91.27%), #32007e;
    }


    .logo
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        height: 70px;
    }


    .logo img
    {
        display: block;

        height: 44px;
    }
</style>