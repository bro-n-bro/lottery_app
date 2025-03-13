<template>
    <!-- Rules modal -->
    <section class="modal" :class="{ closing: isClosing }">
        <div class="modal_content">
            <div class="data">
                <!-- Close button -->
                <button class="close_btn" @click.prevent="closeHandler()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7992 1.41416C19.0181 0.633107 17.7518 0.633107 16.9707 1.41416L12.0209 6.36396L7.07125 1.41427C6.29021 0.633226 5.02388 0.633226 4.24283 1.41427L1.4144 4.2427C0.633351 5.02375 0.633351 6.29008 1.4144 7.07113L6.36409 12.0208L1.4144 16.9705C0.633351 17.7516 0.633351 19.0179 1.4144 19.7989L4.24283 22.6274C5.02388 23.4084 6.29021 23.4084 7.07125 22.6274L12.0209 17.6777L16.9707 22.6275C17.7518 23.4085 19.0181 23.4085 19.7992 22.6275L22.6276 19.799C23.4087 19.018 23.4087 17.7517 22.6276 16.9706L17.6778 12.0208L22.6276 7.07101C23.4087 6.28996 23.4087 5.02363 22.6276 4.24258L19.7992 1.41416Z" fill="currentColor"/>
                    </svg>
                </button>

                <!-- Modal title -->
                <div class="modal_title">
                    <span>Rules</span>
                    <span>Rules</span>
                </div>

                <!-- Modal data -->
                <div class="scroll">
                    <div class="text">
                        <div class="title">Lottery Rules for Bro_n_Bro Delegators</div>

                        <h2>1. General Provisions</h2>

                        <p>
                            1.1. These rules define the procedure for conducting a lottery among new delegators of the <b>Bro_n_Bro</b> validator in the <b>Cosmos Hub</b> network.<br>
                            1.2. Participation in the lottery is <b>free</b>, but requires <b>registration confirmation</b> (see section 3.3).
                        </p>

                        <h2>2. Duration</h2>

                        <p>
                            2.1. The lottery starts on <b>March 10, 2025</b>.<br>
                            2.2. <b>The first draw will occur on March 19, 2025,</b> and subsequent draws will be held <b>weekly on Wednesdays.</b><br>
                            2.3. <b>A baseline snapshot will be taken on March 10, 2025.</b>
                        </p>

                        <h2>3. Participation Conditions</h2>

                        <p>
                            3.1. Only <b>delegations</b> to the <b>Bro_n_Bro</b> validator and <b>redelegations from other validators to the Bro_n_Bro</b> validator made after the date from section 2.3 qualify for the lottery.<br>
                            3.2. Every <b>10 ATOM</b> delegated equals <b>1 ticket</b> (one entry into the lottery pool). The larger the delegation, the higher the chances of winning.<br>
                            3.3. <b>To participate in the lottery, users must register by signing a message</b> with their Cosmos address to confirm their participation.<br>
                            3.4. <b>The final number of tickets for each participant is determined before the draw.</b>
                        </p>

                        <h2>4. Referral Program</h2>

                        <p>
                            4.1. Each participant receives a <b>unique referral code</b> that can be shared with friends.<br>
                            4.2. If a new user <b>delegates at least 10 ATOM</b> using a referral code:<br>

                            <ul>
                                <li>The <b>referrer receives 1 extra ticket</b> for every <b>10 ATOM delegated by their invited friends.</b></li>
                                <li>The <b>invited friend receives 1 bonus ticket</b> (in addition to their delegation-based tickets).</li>
                            </ul>

                            4.3. If the invited friend <b>undelegates</b>, the referrer <b>loses tickets earned from them proportionaly.</b><br>
                            4.4. If the invited friend <b>redelegates back,</b> the referrer’s tickets <b>will be restored.</b><br>
                            4.5. <b>There is no limit to the number of referrals</b> a participant can invite.<br>
                            4.6. <b>A user can be invited only once.</b>
                        </p>

                        <h2>5. Draw Mechanism</h2>

                        <p>
                            5.1. <b>Ticket quantity for each participant is calculated based</b> on <b>their current delegation or the difference between their current delegation and their delegation at the March 10 snapshot.</b> Data is updated <b>approximately every hour</b> on the webapp.<br>
                            5.2. <b>The first draw will occur on March 19, 2025,</b> with subsequent draws occurring weekly on Wednesdays.<br>
                            5.3. <b>Winners will be selected randomly,</b> using a special <a href="https://github.com/bro-n-bro/lottery_back" target="_blank" rel="noopener nofollow">algorithm</a>.<br>
                            5.4. <b>The draw will be streamed live</b> for transparency.<br>
                            5.5. The random selection algorithm is <b>open and published on <a href="https://github.com/bro-n-bro/lottery_back" target="_blank" rel="noopener nofollow">GitHub</a></b>.<br>
                            5.6. Each participant <b>can win only one prize in each draw.</b>
                        </p>

                        <h2>6. Prizes</h2>

                        <p>
                            6.1. Every winner receives a <b>prize</b>, which will be announced before each draw.<br>
                            6.2. <b>The winner must provide an address to receive the prize in the specified network.</b><br>
                            6.3. <b>The winner’s address will be verified via a signature from their Cosmos address.</b>
                        </p>

                        <h2>7. Additional Information</h2>

                        <p>
                            7.1. A <b>lightweight web application</b> will be available for users to track their lottery entries and referral rewards.<br>
                            7.2. The <b>Bro_n_Bro team reserves the right to modify the rules,</b> if necessary, to improve the lottery system, with prior participant notification.<br>
                            7.3. Any detected <b>fraud or rule violations</b> may result in disqualification.<br>
                            7.4. All lottery results are <b>final and non-disputable.</b>
                        </p>

                        <hr>

                        <p><b>Stay tuned for updates and announcements on our <a href="https://t.me/bro_n_bro_community/5009" target="_blank" rel="noopener nofollow">official channels</a>!</b></p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject } from 'vue'


    const emitter = inject('emitter'),
        isClosing = ref(false)


    // Close modal
    function closeHandler() {
        // Closing animation
        isClosing.value = true

        setTimeout(() => {
            // Event "hide_rules_modal"
            emitter.emit('hide_rules_modal')
        }, 200)
    }
</script>


<style scoped>
    .data
    {
        height: 502px;
    }


    .data:before
    {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        content: '';
        pointer-events: none;

        background: url(@/assets/bg_rules_modal.svg) 0 0/100% 100% no-repeat;
    }


    .scroll
    {
        overflow: auto;

        height: 400px;
        padding-right: 12px;

        overscroll-behavior-y: contain;
    }


    .scroll::-webkit-scrollbar
    {
        width: 5px;
        height: 5px;

        border-radius: 3px;
        background-color: transparent;
    }


    .scroll::-webkit-scrollbar-thumb
    {
        border-radius: 3px;
        background-color: rgba(255,255,255,.4);
    }


    .text
    {
        font-size: 18px;
    }


    .text .title
    {
        font-size: 36px;
        font-weight: 700;

        margin-bottom: 24px;
    }


    .text h2
    {
        font-size: 24px;
        font-weight: 600;
    }


    .text > * + h2
    {
        margin-top: 24px;
    }


    .text ul
    {
        padding-left: 16px;
    }


    .text ul li
    {
        position: relative;

        display: block;
        overflow: hidden;

        padding-left: 16px;

        list-style-type: none;
    }


    .text ul li:before
    {
        position: absolute;
        top: 9px;
        left: 0;

        display: block;

        width: 4px;
        height: 4px;

        content: '';

        border-radius: 50%;
        background: rgba(255,255,255,.75);
    }


    .text a
    {
        color: currentColor;

        text-decoration-thickness: 1px;
    }


    .text hr
    {
        display: block;

        width: 100%;
        height: 1px;
        margin: 20px 0;

        border: none;
        background: #fff;
    }



    @media print, (max-width: 1279px)
    {
        .text
        {
            font-size: 16px;
        }


        .text .title
        {
            font-size: 32px;
        }


        .text h2
        {
            font-size: 22px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .data
        {
            padding: 44px 36px 36px;
        }
    }



    @media (max-width: 767px)
    {
        .data
        {
            width: 392px;
            height: 448px;
            padding: 44px 28px 28px;
        }


        .data:before
        {
            background: url(@/assets/bg_delegate_modal.svg) 0 0/100% 100% no-repeat;
        }


        .scroll
        {
            height: 376px;
        }


        .text
        {
            font-size: 15px;
        }


        .text .title
        {
            font-size: 26px;
        }


        .text h2
        {
            font-size: 20px;
        }
    }



    @media (max-width: 479px)
    {
        .data
        {
            height: 448px;
            padding: 44px 24px 24px;
        }


        .text .title
        {
            font-size: 24px;
        }
    }
</style>