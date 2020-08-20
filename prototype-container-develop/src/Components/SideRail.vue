<template>
    <div class="siderail slide">
        <modal-component :class="['modal', active ? 'active' : null]" v-if="showModal" @close="closeModal" />
        <button class="info-button" @click="openModal" ref="info"></button>
        <button class="close-button" @click="close" ref="close"></button>
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import ModalComponent from '@/Components/ModalComponent.vue'

@Component({
    components: { ModalComponent },
    name: 'SideRail'
})
export default class SideRail extends Vue {
    showModal = false
    active = false

    mounted () {
        document.addEventListener('keyup', this.keyup)
        this.focusInfo()
    }

    openModal () {
        this.showModal = true
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const t = this
        setTimeout(function () {
            t.active = true
        }, 100)

        this.$gtag.event('openModal', {
            eventCategory: 'modal',
            eventLabel: 'openModal'
        })
    }

    close () {
        parent.window.close()

        this.$gtag.event('close', {
            eventCategory: 'close',
            eventLabel: 'close'
        })
    }

    closeModal () {
        this.$refs.info.focus()
        this.active = false
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const t = this
        setTimeout(function () {
            t.showModal = false
        }, 500)

        this.$gtag.event('closeModal', {
            eventCategory: 'modal',
            eventLabel: 'closeModal'
        })
    }

    focusInfo () {
        this.$refs.info.focus()
    }

    keyup (event) {
        switch (event.key) {
            case 'Enter':
                break
            case 'ArrowRight':
                this.$refs.close.focus()
                break
            case 'ArrowLeft':
                this.$refs.info.focus()
                break
        }
    }
}
</script>

<style lang="scss">
button.info-button {
    position: absolute;
    outline: none !important;
    border: none;
    top: 10px;
    right: 70px;
    height: 44px;
    width: 44px;
    background: url('../Assets/info-normal.png') top center no-repeat;
}

button.info-button:focus {
    background: url('../Assets/info-focus.png') top center no-repeat;
}

.modal {
    transform: translateX(-320px);
    transition: 0.5s ease;
    transition-delay: 0;
    z-index: 2;
}

.active {
    transform: translateX(0);
}

.siderail {
    background: url('../Assets/productsidebar4.png') top center no-repeat;
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute;
    overflow: hidden;
    background-size: 100% 100%;
    z-index: 1;
    height: 1080px;
    width: 480px;
    // width: 25%;
    // height: 100%;
}

.siderail.slide {
    animation-name: fadeInLeft;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    opacity: 1;
}

@keyframes fadeInLeft {
   0% {
       opacity: 0;
       transform: translateX(-480px);
   }

   100% {
       opacity: 1;
       transform: translateX(0px);
   }
}

h2 {
    color: white;
}

@media only screen and (max-width: 1280px) {
    .siderail {
        width: 320px;
        height: 720px;
    }
}

button.close-button {
    position: absolute;
    top: 10px;
    outline: none !important;
    border: none;
    right: 20px;
    height: 44px;
    width: 44px;
    background: url('../Assets/close-normal.png') top center no-repeat;
}

button.close-button:focus {
    background: url('../Assets/close-focus.png') top center no-repeat;
}

</style>
