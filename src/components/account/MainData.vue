<template>
    <div class="main_data">
        <!-- Title -->
        <div class="title">
            <span>Brottery</span>
            <span>Brottery</span>
        </div>


        <!-- Wheel -->
        <div class="wheel">
            <!-- Wheel image -->
            <img src="@/assets/wheel_of_fortune.png" alt="" loading="lazy">

            <!-- Timer -->
            <vue-countdown  class="timer" :time="dateCalc(store.currentLottery.start_at) - new Date()" v-slot="{ days, hours, minutes, seconds }">
                <span v-if="days">{{ days.toString().padStart(2, '0') }}:</span>
                <span>{{ hours.toString().padStart(2, '0') }}</span> :
                <span>{{ minutes.toString().padStart(2, '0') }}</span> :
                <span>{{ seconds.toString().padStart(2, '0') }}</span>
            </vue-countdown>
        </div>


        <!-- Data -->
        <div class="data_wrap">
            <div class="data">
                <!-- Info -->
                <div class="info" v-if="store.user.delegation_tickets">
                    <div>
                        <div class="label">Staked:</div>

                        <div class="val">{{ store.user.delegation_difference }} {{ store.currentNetwork.symbol }}</div>
                    </div>

                    <div>
                        <div class="label">Tickets:</div>

                        <div class="val">{{ store.user.total_tickets }}</div>
                    </div>

                    <div>
                        <div class="label">Chances:</div>

                        <div class="val">1:{{ (1 / store.user.win_probability).toFixed(2) }}</div>
                    </div>
                </div>

                <!-- Data exp -->
                <div class="exp">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99622 16.5634C4.10377 17.6057 6.20551 18.6596 8.31016 19.7107C8.60917 19.8586 8.90527 20.0137 9.26814 20.1992C9.26379 20.2021 9.25798 20.205 9.25362 20.2065L11.9113 21.5373C12.6486 21.907 13.6211 22.3926 14.7344 22.9493C14.7359 22.9508 14.7373 22.9508 14.7388 22.9508C14.7997 22.9711 14.8563 22.9957 14.9071 23.0204C17.9625 24.5411 21.0208 26.0517 24.0558 27.6116C24.2213 27.6957 24.3868 27.7812 24.5522 27.8667C24.6408 27.9131 24.7293 27.9552 24.8164 27.9929C25.5741 28.3234 26.281 28.3611 27.027 28.1074C27.0285 28.1074 27.0314 28.1059 27.0328 28.1045C27.2128 28.0436 27.3957 27.9639 27.5829 27.8682C30.7805 26.2213 34.0057 24.6266 37.228 23.0305C37.3021 22.9943 37.392 22.9638 37.4849 22.945C37.4907 22.9421 37.4966 22.9392 37.5024 22.9363C37.4864 22.9406 37.469 22.945 37.453 22.9493C38.5663 22.3926 39.5388 21.907 40.2761 21.5373L42.9164 20.2152C42.9033 20.2079 42.8888 20.1992 42.8743 20.192C44.8556 19.2033 46.7846 18.2363 48.7049 17.2795C49.1824 17.0418 49.66 16.804 50.1375 16.5677C51.0302 16.1256 51.5556 15.4253 51.5629 14.4308C51.5701 13.4378 51.0606 12.7231 50.168 12.278C42.5158 8.44936 34.8636 4.61778 27.2114 0.786203C26.4464 0.40348 25.6873 0.40493 24.9195 0.790552C17.2702 4.62213 9.62085 8.4537 1.97009 12.2795C1.07453 12.7274 0.566509 13.4349 0.572315 14.4279C0.576669 15.4239 1.10211 16.1227 1.99622 16.5634Z" fill="currentColor"/>
                        <path d="M1.98431 28.148C4.19636 29.2628 6.41713 30.3632 8.63354 31.4707C8.82369 31.5664 9.00948 31.6722 9.26494 31.8085C9.26494 31.8085 9.26349 31.8085 9.26349 31.81L11.911 33.135C12.6483 33.5047 13.6208 33.9903 14.7341 34.547C14.7065 34.5383 14.679 34.5311 14.6499 34.5238C14.6601 34.5282 14.6688 34.534 14.679 34.5398C14.7675 34.563 14.8546 34.5949 14.9272 34.6296C18.1799 36.2475 21.4342 37.8654 24.6681 39.5224C25.6231 40.0124 26.4897 40.0211 27.4491 39.5311C30.7004 37.8668 33.9721 36.2432 37.2437 34.6195C37.309 34.5876 37.3859 34.5601 37.4672 34.5398C38.5747 33.986 39.5414 33.5032 40.2758 33.135L42.8929 31.8245C42.8856 31.8216 42.8783 31.8187 42.8711 31.8143C43.0859 31.6983 43.2412 31.6114 43.3994 31.5316C45.6333 30.4153 47.8642 29.2962 50.1009 28.1871C50.8049 27.8392 51.3129 27.3362 51.4943 26.5562C51.757 25.4284 51.2694 24.4266 50.1633 23.867C48.6073 23.0798 47.0455 22.3013 45.4867 21.5214L41.3151 23.6104C41.0204 23.7583 40.6866 23.925 40.3223 24.1077C40.315 24.1033 40.3063 24.1004 40.2991 24.0961C40.2903 24.099 40.2816 24.1019 40.2729 24.1048C40.2628 24.1004 40.2541 24.0946 40.2439 24.0903C36.7371 25.8444 31.9109 28.2582 28.6291 29.9022C28.6291 29.9137 27.8642 30.3023 27.1617 30.656C26.4316 30.901 25.6333 30.9749 24.8916 30.6647C21.3253 28.8714 15.5963 25.9749 11.8645 24.1077C11.5002 23.925 11.1664 23.7583 10.8717 23.6104L6.6813 21.5127C5.12967 22.2897 3.57949 23.0653 2.0264 23.8351C1.32243 24.1831 0.815865 24.6861 0.635881 25.4689C0.376066 26.5881 0.868118 27.5855 1.98431 28.148Z" fill="currentColor"/>
                        <path d="M51.5028 37.0536C51.5028 37.0521 51.5014 37.0507 51.5014 37.0492C51.4912 37.0043 51.4796 36.9593 51.4651 36.9144C51.4506 36.8665 51.436 36.8202 51.4186 36.7752C51.4186 36.7752 51.4186 36.7738 51.4172 36.7738C51.1936 36.1692 50.7147 35.7213 50.0528 35.4096C50.0252 35.3965 49.9991 35.3835 49.9729 35.3704C48.4794 34.6151 46.9814 33.8685 45.485 33.1205L45.4792 33.1234L41.3134 35.2095C41.0188 35.3574 40.6849 35.5241 40.3206 35.7068C40.3133 35.7024 40.3046 35.6995 40.2974 35.6952C40.2945 35.6937 40.2901 35.6923 40.2872 35.6894C40.2814 35.6937 40.2756 35.6981 40.2683 35.7024C40.2596 35.6981 40.2509 35.6937 40.2422 35.6894C36.7354 37.4435 31.9093 39.8573 28.6275 41.5013C28.6275 41.5129 27.8625 41.9014 27.16 42.2551C26.4299 42.5001 25.6316 42.574 24.8899 42.2638C21.3251 40.4705 15.5975 37.5754 11.8658 35.7082C11.8672 35.7068 11.8701 35.7068 11.8716 35.7053C11.8716 35.7039 11.8701 35.7039 11.8701 35.7024C11.8672 35.7039 11.8658 35.7053 11.8629 35.7053C11.4985 35.5227 11.1647 35.3559 10.87 35.2081L6.68687 33.1133C6.68687 33.1133 6.68687 33.1133 6.68542 33.1133L6.67962 33.1104C5.12798 33.8874 3.5778 34.663 2.02472 35.4328C1.35994 35.7619 0.875142 36.2316 0.670483 36.9419C0.658871 36.9796 0.645808 37.0144 0.637099 37.0536C0.635648 37.0565 0.635648 37.0608 0.635648 37.0637C0.635648 37.0652 0.635648 37.0652 0.634196 37.0666C0.631293 37.0782 0.629842 37.0912 0.626939 37.1028C0.494854 37.6987 0.571782 38.2423 0.846112 38.7135C1.06383 39.0962 1.40493 39.4267 1.8607 39.6804C1.94053 39.7268 2.02326 39.7732 2.11035 39.8167C4.38628 40.9547 6.66075 42.0927 8.93667 43.2308C9.03537 43.2844 9.14133 43.3424 9.26325 43.4076C9.26325 43.4076 9.2618 43.4076 9.2618 43.4091L11.9093 44.7341C12.6467 45.1038 13.6191 45.5894 14.7324 46.1461C14.7049 46.1374 14.6773 46.1302 14.6482 46.1229C14.6584 46.1273 14.6671 46.1331 14.6773 46.1389C14.7658 46.1621 14.8529 46.194 14.9255 46.2288C15.0271 46.2795 15.1287 46.3302 15.2303 46.381C17.8401 47.6872 20.4498 48.9948 23.0596 50.3039C23.5952 50.5764 24.1322 50.8475 24.6664 51.1215C24.916 51.2505 25.1599 51.3448 25.4023 51.4057C25.9538 51.5564 26.4909 51.5274 27.0468 51.3056C27.1789 51.2563 27.3124 51.1983 27.4489 51.1288C28.4039 50.6402 29.3605 50.156 30.3184 49.6733C30.9455 49.3616 31.574 49.0513 32.1996 48.7367C33.4391 48.1163 34.6772 47.4958 35.9168 46.8768C36.3595 46.6564 36.8008 46.4375 37.2435 46.2172C37.3088 46.1853 37.3857 46.1577 37.467 46.1374C38.5745 45.5836 39.5411 45.1009 40.2756 44.7327L42.8926 43.4221C42.8854 43.4192 42.8781 43.4163 42.8708 43.412C43.016 43.3337 43.1336 43.2684 43.2439 43.2105C45.3703 42.1464 47.4982 41.0823 49.626 40.0211C49.7843 39.9428 49.9425 39.8631 50.1007 39.7848C50.4781 39.5978 50.7974 39.3644 51.0427 39.0686C51.349 38.7091 51.5318 38.2713 51.558 37.7378C51.558 37.7349 51.558 37.732 51.558 37.7291C51.5594 37.6871 51.5623 37.6465 51.5623 37.6044C51.5623 37.6001 51.5623 37.5972 51.5623 37.5928C51.5638 37.4073 51.5449 37.2261 51.5028 37.0536Z" fill="currentColor"/>
                        <path d="M37.5059 34.531C37.4928 34.5339 37.4797 34.5368 37.4667 34.5397C37.4623 34.5426 37.4565 34.5441 37.4521 34.547C37.4696 34.5412 37.4884 34.5354 37.5059 34.531Z" fill="currentColor"/>
                    </svg>

                    <span>Staked<br> 10 ATOM</span>

                    <span>=</span>

                    <span>1</span>

                    <svg class="last" width="71" height="66" viewBox="0 0 71 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M55.2336 23.7688C54.644 22.4588 54.5989 20.9682 55.1082 19.625C55.6176 18.2817 56.6397 17.1958 57.9497 16.6062L53.5032 6.72742C52.9136 5.41742 51.8277 4.39531 50.4844 3.88594C49.1412 3.37657 47.6506 3.42166 46.3406 4.01131L6.8256 21.7974C5.5156 22.387 4.49349 23.4729 3.98412 24.8162C3.47475 26.1594 3.51984 27.65 4.10949 28.96L8.556 38.8387C9.86601 38.2491 11.3566 38.204 12.6998 38.7134C14.0431 39.2227 15.129 40.2449 15.7186 41.5549C16.3083 42.8649 16.3534 44.3554 15.844 45.6987C15.3346 47.042 14.3125 48.1278 13.0025 48.7175L17.449 58.5962C18.0387 59.9062 19.1246 60.9284 20.4678 61.4377C21.8111 61.9471 23.3017 61.902 24.6117 61.3124L64.1266 43.5263C65.4367 42.9366 66.4588 41.8508 66.9681 40.5075C67.4775 39.1642 67.4324 37.6737 66.8428 36.3637L62.3962 26.4849C61.0862 27.0746 59.5957 27.1197 58.2524 26.6103C56.9092 26.1009 55.8233 25.0788 55.2336 23.7688ZM26.3995 44.3906C27.2967 45.2339 28.7561 45.6731 30.3245 45.8028C32.3946 45.9741 34.7202 45.6134 36.3677 44.8719L44.9369 41.0148C46.5844 40.2733 48.3964 38.7716 49.6408 37.1084C50.5836 35.8483 51.2226 34.4647 51.1862 33.2339L43.6332 36.6487C41.3184 37.6906 39.9806 39.9221 40.2366 42.0199C38.8361 40.4372 36.2786 39.9591 33.9638 41.001L26.3995 44.3906ZM27.8623 40.3327C26.2158 40.0293 24.6538 39.3622 23.6399 38.2597L31.2056 34.8732C33.5204 33.8312 36.2303 34.6481 37.838 36.6908C37.3749 34.133 38.5602 31.5628 40.875 30.5209L48.4266 27.1029C48.5797 28.593 48.0433 30.2045 47.1787 31.6383C46.0374 33.5307 44.2896 35.1751 42.6422 35.9167L34.073 39.7737C32.4255 40.5153 30.0357 40.7333 27.8623 40.3327ZM23.091 37.0403C22.938 35.5502 23.4743 33.9387 24.339 32.505C25.4802 30.6125 27.228 28.9681 28.8755 28.2266L37.4447 24.3695C39.0921 23.6279 41.482 23.4099 43.6553 23.8105C45.3019 24.1139 46.8639 24.781 47.8778 25.8835L40.312 29.2701C37.9972 30.312 35.2873 29.4951 33.6797 27.4524C34.1428 30.0103 32.9574 32.5804 30.6426 33.6223L23.091 37.0403ZM21.8472 26.969C20.9044 28.2291 20.2654 29.6127 20.3018 30.8435L27.8548 27.4287C30.1696 26.3868 31.5074 24.1553 31.2514 22.0575C32.652 23.6402 35.2094 24.1183 37.5242 23.0764L45.0885 19.6868C44.1913 18.8435 42.7319 18.4043 41.1636 18.2746C39.0934 18.1033 36.7678 18.464 35.1203 19.2055L26.5511 23.0626C24.9037 23.8041 23.0916 25.3058 21.8472 26.969Z" fill="currentColor"/>
                    </svg>
                </div>

                <!-- Data button -->
                <button class="btn" v-if="!store.user.delegation_tickets" @click.prevent="emitter.emit('show_delegate_modal')">
                    <span>PLAY</span>
                </button>

                <!-- Data button -->
                <button class="btn" v-else @click.prevent="emitter.emit('show_delegate_modal')">
                    <span>GET MORE TIKETS</span>
                </button>
            </div>
        </div>


        <!-- Bulbs -->
        <div class="bulb bulb1"><span></span></div>
        <div class="bulb bulb2"></div>
        <div class="bulb bulb3"></div>
        <div class="bulb bulb4"></div>
        <div class="bulb bulb5"></div>
        <div class="bulb bulb6"></div>
        <div class="bulb bulb7"></div>
        <div class="bulb bulb8"></div>
        <div class="bulb bulb9"></div>
        <div class="bulb bulb10"></div>
        <div class="bulb bulb11"></div>
        <div class="bulb bulb12"></div>
        <div class="bulb bulb13"></div>
        <div class="bulb bulb14"></div>
        <div class="bulb bulb15"></div>
        <div class="bulb bulb16"></div>
        <div class="bulb bulb17"></div>
        <div class="bulb bulb18"></div>
        <div class="bulb bulb19"></div>
        <div class="bulb bulb20"></div>
        <div class="bulb bulb21"></div>
        <div class="bulb bulb22"></div>
        <div class="bulb bulb23"></div>
        <div class="bulb bulb24"></div>
        <div class="bulb bulb25"></div>
    </div>
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/store'
    import { dateCalc } from '@/utils'


    const store = useGlobalStore(),
        emitter = inject('emitter')
</script>


<style scoped>
    .main_data
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 978px;
        max-width: 100%;
        height: 600px;
        margin: 0 auto;
        padding: 73px 69px 65px;

        border-radius: 42px;
        background: url('@/assets/bg_main_data.svg') 50%/100% 100% no-repeat, linear-gradient(180deg, #4a0093 -15.63%, #120041 100%);
    }


    .title
    {
        font-size: 48px;
        font-weight: 900;

        position: absolute;
        z-index: 3;
        top: -36px;
        right: 0;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 380px;
        height: 90px;
        margin: 0 auto;
        padding-bottom: 8px;

        text-align: center;
        text-transform: uppercase;
        pointer-events: none;

        background: url('@/assets/bg_brottery_logo.svg') 0 0/100% 100% no-repeat;
    }


    .title span:first-child
    {
        position: relative;
        z-index: 2;

        display: block;

        background: linear-gradient(168deg, #ffce2b 20.31%, #ffe590 29.2%, #ffce2b 37.73%, #d6a20e 48.05%, #ffce2b 51.25%, #e7a006 59.79%, #fed34a 67.25%, #d79300 78.63%, #d79300 91.44%);
        -webkit-background-clip: text;
                background-clip: text;

        -webkit-text-fill-color: transparent;
    }


    .title span:last-child
    {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;

        display: block;

        margin-top: -4px;

        transform: translate(-50%, -50%);

        color: #5f2b00;
        text-shadow: 0 7px 5px #5f2b00;

        -webkit-text-stroke: 7px #5f2b00;
    }



    .wheel
    {
        position: relative;

        width: 362px;
        max-width: 100%;
    }


    .wheel:before
    {
        position: absolute;
        z-index: 1;
        top: -61px;
        left: 50%;

        display: block;

        width: 511px;
        height: 512px;

        content: '';
        transform: translateX(-50%);

        background: url('@/assets/bg_wheel_of_fortune.svg') 0 0/100% 100% no-repeat;
    }


    .wheel img
    {
        position: relative;
        z-index: 2;

        display: block;

        max-width: 100%;
        margin: 0 auto;
    }


    .wheel .timer
    {
        font-size: 28px;
        font-weight: 500;

        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 4px;
        left: 0;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        width: 262px;
        height: 47px;
        margin: 0 auto;

        text-align: center;

        color: #000;
        background: url('@/assets/bg_timer.svg') 50%/100% 100% no-repeat;
    }



    .data_wrap
    {
        width: 424px;
        max-width: 100%;
        margin-left: auto;
        padding: 3px;

        border-radius: 20px;
        background: linear-gradient(to bottom,  #7559f5 0%,#1c0046 100%);
    }


    .data
    {
        display: flex;
        flex-direction: column;

        min-height: 456px;
        padding: 17px;

        border-radius: 17px;
        background: linear-gradient(180deg, #3a0094 0%, #2b006e 100%);
    }


    .data .info
    {
        font-size: 24px;

        display: flex;
        flex-direction: column;

        gap: 6px;
    }


    .data .info > *
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    .data .info .label
    {
        font-weight: 100;
    }


    .data .info .val
    {
        font-weight: 500;
    }


    .data .exp
    {
        font-size: 32px;
        font-weight: 500;
        line-height: 90%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin-top: auto;

        text-align: center;

        color: #f4bf20;

        gap: 12px;
    }


    .data .exp svg
    {
        display: block;
    }


    .data .exp svg.last
    {
        margin-left: -8px;
    }


    .data .btn
    {
        font-size: 32px;
        font-weight: 900;

        width: 384px;
        height: 88px;
        margin: 0 auto;
        margin-top: auto;

        text-transform: capitalize;

        background: url('@/assets/bg_btn.svg') 50%/100% 100% no-repeat;
    }



    .bulb
    {
        position: absolute;

        display: block;

        width: 17px;
        height: 17px;

        pointer-events: none;

        border-radius: 50%;
        background: radial-gradient(71.12% 71.12% at 49.96% 18.88%, #ffffa9 12.05%, #fffea7 36.43%, #fffca0 45.22%, #fff895 51.48%, #fff384 56.54%, #ffec6e 60.83%, #ffe65d 63.36%, #fee45c 76.91%, #fadc5a 83.81%, #f2cf56 89.21%, #e8bc50 93.83%, #dba448 97.92%, #d39443 100%);
    }


    .bulb:before
    {
        position: absolute;
        z-index: 2;
        bottom: -4px;
        left: 50%;

        display: block;

        width: 23px;
        height: 20px;

        content: '';
        transform: translateX(-50%);

        opacity: .6;
        border-radius: 50%;
        background: radial-gradient(49.99% 50.02% at 50.01% 49.92%, #fff 0%, #f3f3f3 8.79%, #d3d3d3 24.72%, #9f9f9f 45.98%, #575757 71.79%, #000 100%);

        mix-blend-mode: lighten;
    }


    .bulb:after
    {
        position: absolute;
        z-index: 3;
        top: -8px;
        left: 50%;

        display: block;

        width: 36px;
        height: 31px;

        content: '';
        transform: translateX(-50%);

        opacity: .39;
        border-radius: 50%;
        background: radial-gradient(50% 49.99% at 50.04% 49.96%, #ffff69 0%, #f3f364 8.79%, #d3d357 24.72%, #9f9f41 45.98%, #575724 71.79%, #000 100%);

        mix-blend-mode: lighten;
    }


    .bulb span
    {
        position: absolute;
        z-index: 4;
        top: -8px;
        left: 50%;

        display: block;

        width: 36px;
        height: 31px;

        content: '';
        transition: opacity .1s linear;
        transform: translateX(-50%);

        opacity: 0;
        opacity: .5;
        border-radius: 50%;
        background: radial-gradient(50% 49.99% at 50.04% 49.96%, #ffff69 0%, #f3f364 8.79%, #d3d357 24.72%, #9f9f41 45.98%, #575724 71.79%, #000 100%);

        mix-blend-mode: lighten;
    }


    .bulb1
    {
        top: -3px;
        left: 5.01%;
    }

    .bulb2
    {
        top: -3px;
        left: 16.053%;
    }

    .bulb3
    {
        top: -3px;
        left: 27.096%;
    }

    .bulb4
    {
        top: -3px;
        right: 27.096%;
    }

    .bulb5
    {
        top: -3px;
        right: 16.053%;
    }

    .bulb6
    {
        top: -3px;
        right: 5.01%;
    }

    .bulb7
    {
        top: 12.166%;
        right: -3px;
    }

    .bulb8
    {
        top: 30.166%;
        right: -3px;
    }

    .bulb9
    {
        top: 48.166%;
        right: -3px;
    }

    .bulb10
    {
        top: 66.166%;
        right: -3px;
    }

    .bulb11
    {
        top: 84.166%;
        right: -3px;
    }

    .bulb12
    {
        right: 5.01%;
        bottom: -3px;
    }

    .bulb13
    {
        right: 16.053%;
        bottom: -3px;
    }

    .bulb14
    {
        right: 27.096%;
        bottom: -3px;
    }

    .bulb15
    {
        right: 38.139%;
        bottom: -3px;
    }

    .bulb16
    {
        right: 49.182%;
        bottom: -3px;
    }

    .bulb17
    {
        right: 60.224%;
        bottom: -3px;
    }

    .bulb18
    {
        bottom: -3px;
        left: 27.096%;
    }

    .bulb19
    {
        bottom: -3px;
        left: 16.053%;
    }

    .bulb20
    {
        bottom: -3px;
        left: 5.01%;
    }

    .bulb21
    {
        top: 84.166%;
        left: -3px;
    }

    .bulb22
    {
        top: 66.166%;
        left: -3px;
    }

    .bulb23
    {
        top: 48.166%;
        left: -3px;
    }

    .bulb24
    {
        top: 30.166%;
        left: -3px;
    }

    .bulb25
    {
        top: 12.166%;
        left: -3px;
    }


    .bulb.active span
    {
        opacity: 1;
    }
</style>