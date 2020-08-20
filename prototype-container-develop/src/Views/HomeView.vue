<template>
    <div class="home">
        <video id="video" width="1280" height="720" src="https://vizio-interactive-services.s3-us-west-2.amazonaws.com/Rainy+day_+Cindy%27s+Friday+forecast.mp4" autoplay frameborder="0" ref="video"></video>
        <side-rail v-if="showSiderail" />
        <overlay v-if="showOverlay" />
    </div>
</template>

<script>
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import SideRail from '@/Components/SideRail.vue'
import Overlay from '@/Components/Overlay.vue'

@Component({
    components: { SideRail, Overlay },
    data () {
        return {
            showSiderail: false,
            showOverlay: false
        }
    },
    created () {
        if (this.$route && this.$route.params.channelId === '1') {
            setTimeout(() => {
                this.$refs.video.width = '960'
                this.$refs.video.height = '540'
                this.$refs.video.style.position = 'absolute'
                this.$refs.video.style.top = '90px'
                this.$refs.video.style.left = '320px'
                this.showSiderail = true
                setTimeout(() => {
                    this.close()
                }, 55000)
            }, 10000)
        } else {
            setTimeout(() => {
                this.showOverlay = true
                setTimeout(() => {
                    this.close()
                }, 55000)
            }, 10000)
        }
    }
})
export default class HomeView extends Vue {
    name = 'HomeView'

    close () {
        if (this.$route.params.channelId === '1') {
            this.showSiderail = false
            this.$refs.video.width = '1280'
            this.$refs.video.height = '720'
            this.$refs.video.style.position = ''
            this.$refs.video.style.top = '0px'
            this.$refs.video.style.left = '0px'
        }
    }
}
</script>

<style scoped>
.home {
    height: 1080px;
    width: 1920px;
    overflow: hidden;
}

@media only screen and (max-width: 1280px) {
    .home {
        width: 1280px;
        height: 720px;
    }
}
</style>
