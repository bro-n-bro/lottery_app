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

                <!-- Toggle -->
                <div class="langs">
                    <button class="btn" :class="{ active: lang === 'en' }" @click.prevent="lang = 'en'">EN</button>

                    <div class="toggle">
                        <div class="en_area area" :class="{ active: lang === 'en' }" @click.prevent="lang = 'en'"></div>
                        <div class="ru_area area" :class="{ active: lang === 'ru' }" @click.prevent="lang = 'ru'"></div>

                        <div class="circle"></div>
                    </div>

                    <button class="btn" :class="{ active: lang === 'ru' }" @click.prevent="lang = 'ru'">RU</button>
                </div>

                <!-- EN rules -->
                <div class="scroll" v-if="lang === 'en'">
                    <div class="rules_text">
                        <div v-html="marked(store.markdownENRules)"></div>
                    </div>
                </div>

                <!-- RU rules -->
                <div class="scroll" v-if="lang === 'ru'">
                    <div class="rules_text">
                        <div v-html="marked(store.markdownRURules)"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Modal overlay -->
    <div class="modal_overlay" :class="{ closing: isClosing }" @click.prevent="closeHandler()"></div>
</template>


<script setup>
    import { ref, inject, onBeforeMount } from 'vue'
    import { useGlobalStore } from '@/store'
    import { marked } from 'marked'


    const store = useGlobalStore(),
        emitter = inject('emitter'),
        isClosing = ref(false),
        lang = ref('en')


    onBeforeMount(async () => {
        try {
            // Get rules content
            await store.getRulesContent()
        } catch (error) {
            console.error('RulesModal.vue:', error)
        }
    })


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



    .langs
    {
        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;

        margin-bottom: 28px;
        padding-top: 16px;

        text-transform: uppercase;
    }


    .langs .btn
    {
        transition: opacity .2s linear;

        opacity: .4;
    }

    .langs .btn.active
    {
        opacity: 1;
    }


    .langs .toggle
    {
        position: relative;

        display: flex;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 64px;
        margin: 0 12px;

        transition: background .2s linear;

        border: 1px solid #5e24fd;
        border-radius: 20px;
        background: #12006d;
    }

    .langs .toggle.active
    {
        background: #950fff;
    }


    .langs .toggle .area
    {
        width: 50%;
        height: 28px;

        cursor: pointer;
    }


    .langs .toggle .circle
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: 20px;
        height: 20px;
        margin: auto 0;

        transition: transform .2s linear;

        border-radius: 50%;
        background: #fff;
    }

    .langs .toggle .en_area.active ~ .circle
    {
        transform: translateX(4px);
    }

    .langs .toggle .ru_area.active ~ .circle
    {
        transform: translateX(40px);
    }



    .scroll
    {
        overflow: auto;

        height: 340px;
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


        .langs
        {
            font-size: 14px;

            margin-bottom: 24px;
            padding-top: 8px;
        }


        .langs .toggle
        {
            width: 56px;
            margin: 0 8px;
        }


        .langs .toggle .area
        {
            height: 24px;
        }


        .langs .toggle .circle
        {
            width: 18px;
            height: 18px;
        }


        .langs .toggle .ru_area.active ~ .circle
        {
            transform: translateX(32px);
        }


        .scroll
        {
            height: 318px;
        }
    }



    @media (max-width: 479px)
    {
        .data
        {
            height: 448px;
            padding: 40px 20px 20px;
        }


        .scroll
        {
            height: 330px;
        }
    }
</style>


<style>
    .rules_text
    {
        font-size: 18px;
    }


    .rules_text h1
    {
        font-size: 36px;
        font-weight: 700;

        margin-bottom: 24px;
    }


    .rules_text h2
    {
        font-size: 24px;
        font-weight: 600;

        margin-top: 24px;
    }


    .rules_text ul
    {
        padding-left: 16px;
    }


    .rules_text ul li
    {
        position: relative;

        display: block;
        overflow: hidden;

        padding-left: 16px;

        list-style-type: none;
    }


    .rules_text ul li:before
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


    .rules_text a
    {
        color: currentColor;

        text-decoration-thickness: 1px;
    }


    .rules_text hr
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
        .rules_text
        {
            font-size: 16px;
        }


        .rules_text h1
        {
            font-size: 32px;
        }


        .rules_text h2
        {
            font-size: 22px;
        }
    }



    @media (max-width: 767px)
    {
        .rules_text
        {
            font-size: 15px;
        }


        .rules_text h1
        {
            font-size: 26px;
        }


        .rules_text h2
        {
            font-size: 20px;
        }
    }



    @media (max-width: 479px)
    {
        .rules_text h1
        {
            font-size: 24px;
        }
    }
</style>