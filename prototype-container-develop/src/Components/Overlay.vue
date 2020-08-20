<template>
    <div>
        <div class="attention-circle bounce" v-if="showAttention" />
        <div class="overlay slide" v-if="!showAttention && !showSiderail">
            <button class="cta-button" ref="cta"></button>
        </div>
        <side-rail v-if="showSiderail" />
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import SideRail from '@/Components/SideRail.vue'

@Component({
    name: 'Overlay',
    components: { SideRail },
    data () {
        return {
            showAttention: true,
            showSiderail: false
        }
    },
    created () {
        setTimeout(() => {
            this.showAttention = false
            setTimeout(() => {
                this.focusCTA()
            }, 1000)
        }, 3000)
    },
    mounted () {
        document.addEventListener('keyup', this.keyup)
    }
})
export default class Overlay extends Vue {
    focusCTA () {
        this.$refs.cta.focus()
    }

    keyup (event) {
        switch (event.key) {
            case 'Enter': {
                const videoEl = document.getElementById('video')
                if (videoEl) {
                    videoEl.width = '960'
                    videoEl.height = '540'
                    videoEl.style.position = 'absolute'
                    videoEl.style.top = '90px'
                    videoEl.style.left = '320px'
                }
                this.showSiderail = true
                break
            }
        }
    }
}
</script>

<style lang="scss">
.attention-circle {
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: url('https://proto-resource.s3.us-east-2.amazonaws.com/utility/attention-circle.png') top center no-repeat;
    height: 61px;
    width: 61px;
    transform-origin: center;
    opacity: 0;
    z-index: 10;
}

.attention-circle.bounce {
    animation-name: bounceIn;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    opacity: 1;
}

@keyframes bounceIn {
   0% {
      opacity: 0;
      transform: scale(.3);
   }

   50% {
      opacity: 1;
      transform: scale(1.05);
   }

   70% {
      transform: scale(.9);
   }

   100% {
      transform: scale(1);
   }
}

.overlay {
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: url('../Assets/overlay.png') top center no-repeat;
    background-size: contain;
    height: 257px;
    width: 382px;
}

.overlay.slide {
    animation-name: fadeInLeft;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    opacity: 1;
}

@keyframes fadeInLeft {
   0% {
       opacity: 0;
       transform: translateX(-382px);
   }

   100% {
       opacity: 1;
       transform: translateX(0px);
   }
}

h2 {
    color: white;
}

button.cta-button {
    position: absolute;
    bottom: 0px;
    outline: none !important;
    border: none;
    right: 50px;
    height: 60px;
    width: 168px;
    background: url('../Assets/cta-normal.png') top center no-repeat;
    background-size: contain;
}

button.cta-button:focus {
    position: absolute;
    bottom: 0px;
    outline: none !important;
    border: none;
    right: 50px;
    height: 60px;
    width: 168px;
    background: url('../Assets/cta-focus.png') top center no-repeat;
    background-size: contain;
}
</style>
