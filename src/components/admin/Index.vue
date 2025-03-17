<template>
    <section class="data">
        <section class="top" :class="{ congratulation: isCongratulation }">
            <!-- Drum -->
            <div class="drum">
                <div class="slots">
                    <div class="slot" ref="slot">
                        <div v-for="(address, index) in participants" :key="index" class="option">
                            <span>{{ address }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Start button -->
            <button class="start_btn" @click.prevent="start()" :class="{ disabled: currentIndex === winners.length || isPlaying }">START</button>

            <!-- Bulbs -->
            <div class="bulb bulb1"><span></span></div>
            <div class="bulb bulb2"><span></span></div>
            <div class="bulb bulb3"><span></span></div>
            <div class="bulb bulb4"><span></span></div>
            <div class="bulb bulb5"><span></span></div>
            <div class="bulb bulb6"><span></span></div>
            <div class="bulb bulb7"><span></span></div>
            <div class="bulb bulb8"><span></span></div>
            <div class="bulb bulb9"><span></span></div>
            <div class="bulb bulb10"><span></span></div>
            <div class="bulb bulb11"><span></span></div>
            <div class="bulb bulb12"><span></span></div>
            <div class="bulb bulb13"><span></span></div>
            <div class="bulb bulb14"><span></span></div>
            <div class="bulb bulb15"><span></span></div>
            <div class="bulb bulb16"><span></span></div>
            <div class="bulb bulb17"><span></span></div>
            <div class="bulb bulb18"><span></span></div>
            <div class="bulb bulb19"><span></span></div>
            <div class="bulb bulb20"><span></span></div>
            <div class="bulb bulb21"><span></span></div>
            <div class="bulb bulb22"><span></span></div>
            <div class="bulb bulb23"><span></span></div>
            <div class="bulb bulb24"><span></span></div>
            <div class="bulb bulb25"><span></span></div>
            <div class="bulb bulb26"><span></span></div>
            <div class="bulb bulb27"><span></span></div>
            <div class="bulb bulb28"><span></span></div>
            <div class="bulb bulb29"><span></span></div>
            <div class="bulb bulb30"><span></span></div>
            <div class="bulb bulb31"><span></span></div>
            <div class="bulb bulb32"><span></span></div>
            <div class="bulb bulb33"><span></span></div>
            <div class="bulb bulb34"><span></span></div>
            <div class="bulb bulb35"><span></span></div>
            <div class="bulb bulb36"><span></span></div>
        </section>

        <section class="bottom">
            <!-- Screen -->
            <div class="screen">
                <!-- Start message -->
                <div class="start_message" v-if="!isStarting">
                    <!-- Start message - Title -->
                    <div class="title">BROTTERY</div>

                    <!-- Start message - Description -->
                    <div class="desc">Press start</div>
                </div>

                <!-- List of winners -->
                <div class="list" v-else>
                    <!-- Winner -->
                    <div v-for="(winner, index) in winners.slice(0, currentIndex)" :key="index">
                        <span v-if="!isPlaying || index < currentIndex - 1">{{ winner }}</span>
                    </div>
                </div>
            </div>
        </section>


        <section class="fireworks" v-show="isCongratulation">
            <div class="before"></div>
            <div class="after"></div>
        </section>
    </section>
</template>


<script setup>
    import { ref, reactive, onMounted } from 'vue'
	import { useGlobalStore } from '@/store'
    import startConfetti from '@/utils/confetti.js'


    const store = useGlobalStore(),
        isStarting = ref(false),
        isPlaying = ref(false),
        isCongratulation = ref(false),
        currentIndex = ref(null),
        confetti = ref(null),
        participants = ref([]),
        winners = ref([
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs',
            'shdbsdjcsjdkcnksjdncshdbsdjcsjdkcnksjdncfsvs'
        ]),
        slot = ref(null),
        slotStartedAt = ref(null),
        slotOptions = reactive({}),
        slotNext = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function(cb) { window.setTimeout(cb, 1000/60) }


    onMounted(async () => {
        // Confetti
        confetti.value = startConfetti()

        // Get lottery participant
        participants.value = await store.getLotteryParticipants()
    })


    function start() {
        // Start status
        isStarting.value = true

        // Get next winner
        getNextWinner()
    }


    function spin() {
        // Slot options
        slotOptions.value = {
            finalPos: 47 * 77,
            startOffset: 9000 + Math.random() * 500,
            height: participants.value.length * 77,
            duration: 9000,
            isFinished: false
        }

        // Slot animate
        slotNext(slotAanimate)
    }


    // Slot animate
    function slotAanimate(timestamp) {
        if (slotStartedAt.value == null) {
            slotStartedAt.value = timestamp
        }

        const timeDiff = timestamp - slotStartedAt.value

        if (slotOptions.value.isFinished) {
        	return
        }

        const timeRemaining = Math.max(slotOptions.value.duration - timeDiff, 0),
            power = 2,
            offset = ( Math.pow(timeRemaining, power) / Math.pow(slotOptions.value.duration, power) ) * slotOptions.value.startOffset,
            pos = -1 * Math.floor((offset + slotOptions.value.finalPos) % slotOptions.value.height)

        // Translate Y
        slot.value.style.transform = "translateY(" + pos + "px)"

        // Finished status
        if (timeDiff > slotOptions.value.duration) {
        	slotOptions.value.isFinished = true
        }

        if (slotOptions.value.isFinished) {
            // Reset
            slotOptions.value = null
            slotStartedAt.value = null
        } else {
            // Slot animate
            slotNext(slotAanimate)
        }
    }


    // Get next winner
    function getNextWinner() {
        // Play status
        isPlaying.value = true

        // Update current index
        currentIndex.value === null
            ? currentIndex.value = 1
            : currentIndex.value++


            spin()


        setTimeout(() => {
            // Play status
            isPlaying.value = false

            // Congratulation status
            isCongratulation.value = true

            // Confetti
            confetti.value.addConfetti()
            setTimeout(() => confetti.value.addConfetti(), 1500)

            // Congratulation status
            setTimeout(() => isCongratulation.value = false, 3000)
        }, 3000)
    }
</script>


<style scoped>
.data
{
    position: relative;

    flex: 1 0 auto;

    padding-top: 44px;
}



.top
{
    position: relative;
    z-index: 5;

    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 1114px;
    max-width: 100%;
    height: 243px;
    margin: 0 auto -12px;
    padding: 0 32px;

    background: url(@/assets/bg_admin_data_top.svg) 0 0/100% 100% no-repeat;
}



.drum
{
    font-family: var(--font_family3);
    font-size: 38px;

    display: flex;
    overflow: hidden;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 892px;
    height: 141px;
    padding: 12px 68px 10px;

    text-transform: uppercase;

    color: #000;
    background: url(@/assets/bg_admin_drum.svg) 0 0/100% 100% no-repeat;

    filter: drop-shadow(0px 15px 8px rgba(0, 0, 0, .25));
}


.slots
{
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 117px;
    padding: 20px;
}


.slot
{
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
}


.slot > *
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    height: 77px;

    text-align: center;
}



.start_btn
{
    font-size: 26px;
    font-weight: 900;

    width: 146px;
    height: 140px;
    margin-left: auto;

    transition: opacity .2s linear;
    text-transform: uppercase;

    background: url(@/assets/bg_admin_start_btn.svg) 0 0/100% 100% no-repeat;
}


.start_btn.disabled
{
    pointer-events: none;

    opacity: .5;
}



.bottom
{
    position: relative;
    z-index: 3;

    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 1052px;
    max-width: 100%;
    height: 467px;
    margin: 0 auto;

    background: url(@/assets/bg_admin_data_bottom.svg) 0 0/100% 100% no-repeat;
}


.screen
{
    display: flex;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    width: 701px;
    max-width: 100%;
    height: 359px;
    margin: 0 auto;
    padding: 16px 16px 17px;

    background: url(@/assets/bg_admin_data_screen.svg) 0 0/100% 100% no-repeat;
}


.screen .title
{
    font-family: var(--font_family2);
    font-size: 70px;
    font-weight: 700;
    line-height: 40px;

    width: 100%;

    text-align: center;
    text-transform: uppercase;

    color: #ffdc2c;
}


.screen .desc
{
    font-family: var(--font_family2);
    font-size: 40px;

    width: 100%;
    margin-top: 15px;

    text-align: center;
    letter-spacing: 14.6px;
    text-transform: uppercase;
}



.list
{
    font-family: var(--font_family2);
    font-size: 18px;

    display: flex;
    overflow: auto;
    flex-direction: column;

    width: 100%;
    height: 326px;
    padding: 16px 12px;

    counter-reset: number;
    white-space: nowrap;
    text-transform: uppercase;

    color: #ffdc2c;

    gap: 6px;
    overscroll-behavior-y: contain;
}


.list > *
{
    position: relative;

    min-height: 23px;
    padding-left: 34px;
}


.list > *:before
{
    position: absolute;
    top: 0;
    left: 0;

    content: counter(number) '.';
    counter-increment: number;
}



.bulb
{
    position: absolute;

    display: block;

    width: 42px;
    height: 42px;

    pointer-events: none;

    background: url(@/assets/main_data_bulb.svg) 0 0/100% 100% no-repeat;
}


.bulb:before
{
    position: absolute;
    z-index: 2;
    top: -4px;
    left: 0;

    display: block;

    width: 100%;
    height: 100%;

    content: '';

    opacity: 0;
    border-radius: 50%;
    background: radial-gradient(50% 49.99% at 50.04% 49.96%, #fff8ab 0%, rgba(238, 255, 154, .80) 8.79%, rgba(243, 255, 109, .70) 24.72%, rgba(228, 237, 53, .50) 45.98%, rgba(163, 174, 16, .30) 71.79%, rgba(163, 174, 16, .00) 100%);
}


.bulb1
{
    top: -26px;
    left: 2.702%;
}

.bulb2
{
    top: -26px;
    left: 9.189%;
}

.bulb3
{
    top: -26px;
    left: 15.675%;
}

.bulb4
{
    top: -26px;
    left: 22.162%;
}

.bulb5
{
    top: -26px;
    left: 28.648%;
}

.bulb6
{
    top: -26px;
    left: 35.135%;
}

.bulb7
{
    top: -26px;
    left: 41.621%;
}

.bulb8
{
    top: -26px;
    left: 48.108%;
}

.bulb9
{
    top: -26px;
    left: 54.594%;
}

.bulb10
{
    top: -26px;
    left: 61.081%;
}

.bulb11
{
    top: -26px;
    left: 67.567%;
}

.bulb12
{
    top: -26px;
    left: 74.054%;
}

.bulb13
{
    top: -26px;
    left: 80.54%;
}

.bulb14
{
    top: -26px;
    left: 87.027%;
}

.bulb15
{
    top: -26px;
    left: 93.513%;
}

.bulb16
{
    top: 11.297%;
    right: -26px;

    transform: rotate(90deg);
}

.bulb17
{
    top: 41.422%;
    right: -26px;

    transform: rotate(90deg);
}

.bulb18
{
    top: 71.548%;
    right: -26px;

    transform: rotate(90deg);
}

.bulb19
{
    right: 2.702%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb20
{
    right: 9.189%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb21
{
    right: 15.675%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb22
{
    right: 22.162%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb23
{
    right: 28.648%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb24
{
    right: 35.135%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb25
{
    right: 41.621%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb26
{
    right: 48.108%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb27
{
    right: 54.594%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb28
{
    right: 61.081%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb29
{
    right: 67.567%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb30
{
    right: 74.054%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb31
{
    right: 80.54%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb32
{
    right: 87.027%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb33
{
    right: 93.513%;
    bottom: -26px;

    transform: rotate(180deg);
}

.bulb34
{
    bottom: 11.297%;
    left: -26px;

    transform: rotate(-90deg);
}

.bulb35
{
    bottom: 41.422%;
    left: -26px;

    transform: rotate(-90deg);
}

.bulb36
{
    bottom: 71.548%;
    left: -26px;

    transform: rotate(-90deg);
}


.bulb:nth-child(odd):before
{
    animation: blink 1s infinite steps(1, end);
}

.bulb:nth-child(even):before
{
    animation: blink 1s infinite steps(1, end) reverse;
}


.congratulation .bulb:nth-child(odd):before,
.congratulation .bulb:nth-child(even):before
{
    top: -12px;
    left: -25%;

    width: 150%;
    height: 150%;
}


.congratulation .bulb:nth-child(odd):before,
.congratulation .bulb:nth-child(even):before
{
    animation: blink 1s infinite;
}



.fireworks
{
    position: absolute;
    z-index: 7;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    pointer-events: none;
}


.fireworks > .before,
.fireworks > .after
{
    position: absolute;

    width: 5px;
    height: 5px;

    -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
       -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
        -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
         -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
            animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;

    border-radius: 50%;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
}

.fireworks > .after
{
    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
       -moz-animation-duration: 1.25s, 1.25s, 6.25s;
        -ms-animation-duration: 1.25s, 1.25s, 6.25s;
         -o-animation-duration: 1.25s, 1.25s, 6.25s;
            animation-duration: 1.25s, 1.25s, 6.25s;
    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
       -moz-animation-delay: 1.25s, 1.25s, 1.25s;
        -ms-animation-delay: 1.25s, 1.25s, 1.25s;
         -o-animation-delay: 1.25s, 1.25s, 1.25s;
            animation-delay: 1.25s, 1.25s, 1.25s;
}

@-webkit-keyframes bang
{
    to
    {
        box-shadow: 32px -27.6666666667px #5100ff, -177px -106.6666666667px #00ff6f, 24px -167.6666666667px #f0a, 26px -107.6666666667px #00ff9d, -184px -388.6666666667px #0048ff, 178px -300.6666666667px #d0ff00, 139px 71.3333333333px #8f0, -4px -112.6666666667px #0d00ff, -244px 29.3333333333px #ff00b3, 24px -70.6666666667px #ff4800, 43px -168.6666666667px #9f0, -98px -170.6666666667px #00fff2, 154px -6.6666666667px #ffa200, 237px -384.6666666667px #1500ff, 247px -29.6666666667px #ff0040, -98px -270.6666666667px #ff4d00, -180px -335.6666666667px #f0c, -85px -384.6666666667px #1eff00, -73px -107.6666666667px #ff5900, 148px -376.6666666667px #f90, 189px -235.6666666667px #006fff, -1px -208.6666666667px #ff2600, -94px -244.6666666667px #eaff00, -104px -136.6666666667px #ff6a00, 210px -72.6666666667px #9100ff, 73px -406.6666666667px #ff7b00, -128px -341.6666666667px #0040ff, -135px -367.6666666667px #00ff95, 185px -310.6666666667px #0f4, 168px -139.6666666667px #0f2, 199px -375.6666666667px #f0a, -33px -229.6666666667px #6a00ff, -243px -279.6666666667px #00ffe6, -239px -386.6666666667px #009dff, 44px -252.6666666667px #00ff04, -155px -267.6666666667px #0f7, -12px -294.6666666667px #00b7ff, -149px -51.6666666667px #ff00b3, -194px -297.6666666667px #00ff8c, 122px -290.6666666667px #f0d, -151px -414.6666666667px #fffb00, 127px -282.6666666667px #f200ff, 135px -272.6666666667px #00ff6a, 233px -241.6666666667px #0fc, -179px -249.6666666667px #c8ff00, -53px -352.6666666667px #00ff62, -157px -124.6666666667px #01f, -156px 64.3333333333px #4f0, -211px -281.6666666667px #00b3ff, 50px -207.6666666667px #6fff00, -17px -338.6666666667px #002bff;
    }
}
@-moz-keyframes bang
{
    to
    {
        box-shadow: 32px -27.6666666667px #5100ff, -177px -106.6666666667px #00ff6f, 24px -167.6666666667px #f0a, 26px -107.6666666667px #00ff9d, -184px -388.6666666667px #0048ff, 178px -300.6666666667px #d0ff00, 139px 71.3333333333px #8f0, -4px -112.6666666667px #0d00ff, -244px 29.3333333333px #ff00b3, 24px -70.6666666667px #ff4800, 43px -168.6666666667px #9f0, -98px -170.6666666667px #00fff2, 154px -6.6666666667px #ffa200, 237px -384.6666666667px #1500ff, 247px -29.6666666667px #ff0040, -98px -270.6666666667px #ff4d00, -180px -335.6666666667px #f0c, -85px -384.6666666667px #1eff00, -73px -107.6666666667px #ff5900, 148px -376.6666666667px #f90, 189px -235.6666666667px #006fff, -1px -208.6666666667px #ff2600, -94px -244.6666666667px #eaff00, -104px -136.6666666667px #ff6a00, 210px -72.6666666667px #9100ff, 73px -406.6666666667px #ff7b00, -128px -341.6666666667px #0040ff, -135px -367.6666666667px #00ff95, 185px -310.6666666667px #0f4, 168px -139.6666666667px #0f2, 199px -375.6666666667px #f0a, -33px -229.6666666667px #6a00ff, -243px -279.6666666667px #00ffe6, -239px -386.6666666667px #009dff, 44px -252.6666666667px #00ff04, -155px -267.6666666667px #0f7, -12px -294.6666666667px #00b7ff, -149px -51.6666666667px #ff00b3, -194px -297.6666666667px #00ff8c, 122px -290.6666666667px #f0d, -151px -414.6666666667px #fffb00, 127px -282.6666666667px #f200ff, 135px -272.6666666667px #00ff6a, 233px -241.6666666667px #0fc, -179px -249.6666666667px #c8ff00, -53px -352.6666666667px #00ff62, -157px -124.6666666667px #01f, -156px 64.3333333333px #4f0, -211px -281.6666666667px #00b3ff, 50px -207.6666666667px #6fff00, -17px -338.6666666667px #002bff;
    }
}
@-o-keyframes bang
{
    to
    {
        box-shadow: 32px -27.6666666667px #5100ff, -177px -106.6666666667px #00ff6f, 24px -167.6666666667px #f0a, 26px -107.6666666667px #00ff9d, -184px -388.6666666667px #0048ff, 178px -300.6666666667px #d0ff00, 139px 71.3333333333px #8f0, -4px -112.6666666667px #0d00ff, -244px 29.3333333333px #ff00b3, 24px -70.6666666667px #ff4800, 43px -168.6666666667px #9f0, -98px -170.6666666667px #00fff2, 154px -6.6666666667px #ffa200, 237px -384.6666666667px #1500ff, 247px -29.6666666667px #ff0040, -98px -270.6666666667px #ff4d00, -180px -335.6666666667px #f0c, -85px -384.6666666667px #1eff00, -73px -107.6666666667px #ff5900, 148px -376.6666666667px #f90, 189px -235.6666666667px #006fff, -1px -208.6666666667px #ff2600, -94px -244.6666666667px #eaff00, -104px -136.6666666667px #ff6a00, 210px -72.6666666667px #9100ff, 73px -406.6666666667px #ff7b00, -128px -341.6666666667px #0040ff, -135px -367.6666666667px #00ff95, 185px -310.6666666667px #0f4, 168px -139.6666666667px #0f2, 199px -375.6666666667px #f0a, -33px -229.6666666667px #6a00ff, -243px -279.6666666667px #00ffe6, -239px -386.6666666667px #009dff, 44px -252.6666666667px #00ff04, -155px -267.6666666667px #0f7, -12px -294.6666666667px #00b7ff, -149px -51.6666666667px #ff00b3, -194px -297.6666666667px #00ff8c, 122px -290.6666666667px #f0d, -151px -414.6666666667px #fffb00, 127px -282.6666666667px #f200ff, 135px -272.6666666667px #00ff6a, 233px -241.6666666667px #0fc, -179px -249.6666666667px #c8ff00, -53px -352.6666666667px #00ff62, -157px -124.6666666667px #01f, -156px 64.3333333333px #4f0, -211px -281.6666666667px #00b3ff, 50px -207.6666666667px #6fff00, -17px -338.6666666667px #002bff;
    }
}
@-ms-keyframes bang
{
    to
    {
        box-shadow: 32px -27.6666666667px #5100ff, -177px -106.6666666667px #00ff6f, 24px -167.6666666667px #f0a, 26px -107.6666666667px #00ff9d, -184px -388.6666666667px #0048ff, 178px -300.6666666667px #d0ff00, 139px 71.3333333333px #8f0, -4px -112.6666666667px #0d00ff, -244px 29.3333333333px #ff00b3, 24px -70.6666666667px #ff4800, 43px -168.6666666667px #9f0, -98px -170.6666666667px #00fff2, 154px -6.6666666667px #ffa200, 237px -384.6666666667px #1500ff, 247px -29.6666666667px #ff0040, -98px -270.6666666667px #ff4d00, -180px -335.6666666667px #f0c, -85px -384.6666666667px #1eff00, -73px -107.6666666667px #ff5900, 148px -376.6666666667px #f90, 189px -235.6666666667px #006fff, -1px -208.6666666667px #ff2600, -94px -244.6666666667px #eaff00, -104px -136.6666666667px #ff6a00, 210px -72.6666666667px #9100ff, 73px -406.6666666667px #ff7b00, -128px -341.6666666667px #0040ff, -135px -367.6666666667px #00ff95, 185px -310.6666666667px #0f4, 168px -139.6666666667px #0f2, 199px -375.6666666667px #f0a, -33px -229.6666666667px #6a00ff, -243px -279.6666666667px #00ffe6, -239px -386.6666666667px #009dff, 44px -252.6666666667px #00ff04, -155px -267.6666666667px #0f7, -12px -294.6666666667px #00b7ff, -149px -51.6666666667px #ff00b3, -194px -297.6666666667px #00ff8c, 122px -290.6666666667px #f0d, -151px -414.6666666667px #fffb00, 127px -282.6666666667px #f200ff, 135px -272.6666666667px #00ff6a, 233px -241.6666666667px #0fc, -179px -249.6666666667px #c8ff00, -53px -352.6666666667px #00ff62, -157px -124.6666666667px #01f, -156px 64.3333333333px #4f0, -211px -281.6666666667px #00b3ff, 50px -207.6666666667px #6fff00, -17px -338.6666666667px #002bff;
    }
}
@keyframes bang
{
    to
    {
        box-shadow: 32px -27.6666666667px #5100ff, -177px -106.6666666667px #00ff6f, 24px -167.6666666667px #f0a, 26px -107.6666666667px #00ff9d, -184px -388.6666666667px #0048ff, 178px -300.6666666667px #d0ff00, 139px 71.3333333333px #8f0, -4px -112.6666666667px #0d00ff, -244px 29.3333333333px #ff00b3, 24px -70.6666666667px #ff4800, 43px -168.6666666667px #9f0, -98px -170.6666666667px #00fff2, 154px -6.6666666667px #ffa200, 237px -384.6666666667px #1500ff, 247px -29.6666666667px #ff0040, -98px -270.6666666667px #ff4d00, -180px -335.6666666667px #f0c, -85px -384.6666666667px #1eff00, -73px -107.6666666667px #ff5900, 148px -376.6666666667px #f90, 189px -235.6666666667px #006fff, -1px -208.6666666667px #ff2600, -94px -244.6666666667px #eaff00, -104px -136.6666666667px #ff6a00, 210px -72.6666666667px #9100ff, 73px -406.6666666667px #ff7b00, -128px -341.6666666667px #0040ff, -135px -367.6666666667px #00ff95, 185px -310.6666666667px #0f4, 168px -139.6666666667px #0f2, 199px -375.6666666667px #f0a, -33px -229.6666666667px #6a00ff, -243px -279.6666666667px #00ffe6, -239px -386.6666666667px #009dff, 44px -252.6666666667px #00ff04, -155px -267.6666666667px #0f7, -12px -294.6666666667px #00b7ff, -149px -51.6666666667px #ff00b3, -194px -297.6666666667px #00ff8c, 122px -290.6666666667px #f0d, -151px -414.6666666667px #fffb00, 127px -282.6666666667px #f200ff, 135px -272.6666666667px #00ff6a, 233px -241.6666666667px #0fc, -179px -249.6666666667px #c8ff00, -53px -352.6666666667px #00ff62, -157px -124.6666666667px #01f, -156px 64.3333333333px #4f0, -211px -281.6666666667px #00b3ff, 50px -207.6666666667px #6fff00, -17px -338.6666666667px #002bff;
    }
}
@-webkit-keyframes gravity
{
    to
    {
        -webkit-transform: translateY(200px);
           -moz-transform: translateY(200px);
            -ms-transform: translateY(200px);
             -o-transform: translateY(200px);
                transform: translateY(200px);

        opacity: 0;
    }
}
@-moz-keyframes gravity
{
    to
    {
        -webkit-transform: translateY(200px);
           -moz-transform: translateY(200px);
            -ms-transform: translateY(200px);
             -o-transform: translateY(200px);
                transform: translateY(200px);

        opacity: 0;
    }
}
@-o-keyframes gravity
{
    to
    {
        -webkit-transform: translateY(200px);
           -moz-transform: translateY(200px);
            -ms-transform: translateY(200px);
             -o-transform: translateY(200px);
                transform: translateY(200px);

        opacity: 0;
    }
}
@-ms-keyframes gravity
{
    to
    {
        -webkit-transform: translateY(200px);
           -moz-transform: translateY(200px);
            -ms-transform: translateY(200px);
             -o-transform: translateY(200px);
                transform: translateY(200px);

        opacity: 0;
    }
}
@keyframes gravity
{
    to
    {
        -webkit-transform: translateY(200px);
           -moz-transform: translateY(200px);
            -ms-transform: translateY(200px);
             -o-transform: translateY(200px);
                transform: translateY(200px);

        opacity: 0;
    }
}
@-webkit-keyframes position
{
    0%,
    19.9%
    {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9%
    {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9%
    {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9%
    {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9%
    {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@-moz-keyframes position
{
    0%,
    19.9%
    {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9%
    {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9%
    {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9%
    {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9%
    {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@-o-keyframes position
{
    0%,
    19.9%
    {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9%
    {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9%
    {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9%
    {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9%
    {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@-ms-keyframes position
{
    0%,
    19.9%
    {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9%
    {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9%
    {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9%
    {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9%
    {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@keyframes position
{
    0%,
    19.9%
    {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9%
    {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9%
    {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9%
    {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9%
    {
        margin-top: 30%;
        margin-left: 80%;
    }
}



































</style>