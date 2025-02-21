<template>
    <button class="invite_btn" :style="{ transform: `translateY(${offsetY}px)` }"
        @mousedown="startDrag"
        @touchstart="startDrag"
        @mousemove="onDrag"
        @touchmove="onDrag"
        @mouseup="stopDrag"
        @touchend="stopDrag"
        @click.prevent="openModal()"
    >
        <svg width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.674375 26.776V21.848H16.3224V26.776H0.674375ZM5.98638 16.056H11.0424V32.504H5.98638V16.056Z" fill="white"/>
            <path d="M61.7792 35.6667L52.0833 29.4375L42.3875 35.6667L45.3125 24.5083L36.4021 17.25L47.9125 16.5458L52.0833 5.875L56.2542 16.5458L67.7646 17.25L58.8542 24.5083M73.75 22.6667C73.75 21.2301 74.3207 19.8523 75.3365 18.8365C76.3523 17.8207 77.7301 17.25 79.1667 17.25V6.41667C79.1667 4.98008 78.596 3.60233 77.5802 2.5865C76.5643 1.57068 75.1866 1 73.75 1H30.4167C28.9801 1 27.6023 1.57068 26.5865 2.5865C25.5707 3.60233 25 4.98008 25 6.41667V17.25C26.4366 17.25 27.8143 17.8207 28.8302 18.8365C29.846 19.8523 30.4167 21.2301 30.4167 22.6667C30.4167 24.1033 29.846 25.481 28.8302 26.4968C27.8143 27.5126 26.4366 28.0833 25 28.0833V38.9167C25 40.3533 25.5707 41.731 26.5865 42.7468C27.6023 43.7626 28.9801 44.3333 30.4167 44.3333H73.75C75.1866 44.3333 76.5643 43.7626 77.5802 42.7468C78.596 41.731 79.1667 40.3533 79.1667 38.9167V28.0833C77.7301 28.0833 76.3523 27.5126 75.3365 26.4968C74.3207 25.481 73.75 24.1033 73.75 22.6667Z" fill="currentColor"/>
        </svg>

        <span>Invite<br> Friend</span>
    </button>
</template>


<script setup>
    import { ref, inject, onUnmounted } from 'vue'


    const emitter = inject('emitter'),
        offsetY = ref(0),
        startPosition = ref(0),
        isDragging = ref(false),
        threshold = 100


    onUnmounted(() => {
        stopDrag()
    })


    // Start drag
    function startDrag(e) {
        e.preventDefault()

        isDragging.value = true

        startPosition.value = e.touches ? e.touches[0].clientY : e.clientY

        window.addEventListener('mousemove', onDrag)
        window.addEventListener('touchmove', onDrag)
        window.addEventListener('mouseup', stopDrag)
        window.addEventListener('touchend', stopDrag)
    }


    // Stop drag
    function stopDrag() {
        if (offsetY.value < threshold) {
            // Reset position
            resetPosition()
        }

        isDragging.value = false

        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('touchmove', onDrag)
        window.removeEventListener('mouseup', stopDrag)
        window.removeEventListener('touchend', stopDrag)
    }


    // On drag
    function onDrag(e) {
        if (!isDragging.value) return

        let clientY = e.touches ? e.touches[0].clientY : e.clientY

        offsetY.value = clientY - startPosition.value

        if (offsetY.value >= threshold) {
            // Open modal
            openModal()

            // Reset position
            resetPosition()
        }
    }


    // Reset position
    function resetPosition() {
        offsetY.value = 0
    }


    // Open modal
    function openModal() {
        // Event "show_referral_modal"
        emitter.emit('show_referral_modal')
    }
</script>


<style scoped>
    .invite_btn
    {
        font-size: 32px;
        font-weight: 900;
        line-height: 100%;

        position: absolute;
        z-index: 3;
        top: 220px;
        left: 50%;

        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;

        width: 160px;
        height: 210px;
        margin-left: -700px;

        transition: transform .1s linear;
        text-align: center;
        text-transform: capitalize;

        background: url('@/assets/bg_invite_btn.svg') 0 0/100% 100% no-repeat;

        gap: 15px;
    }


    .invite_btn:before
    {
        position: absolute;
        z-index: 2;
        right: 8px;
        bottom: calc(100% - 4px);

        width: 164px;
        height: 321px;

        content: '';
        pointer-events: none;

        background: url('@/assets/invite_btn_before.svg') 0 0/100% 100% no-repeat;
    }


    .invite_btn svg
    {
        display: block;

        width: 80px;
        height: 46px;
    }
</style>