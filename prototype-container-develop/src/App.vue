<template>
    <div id="app">
       <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
    mounted () {
        this.deviceId()
        this.ipAddress()
        this.channel()
        this.show()
        this.campaign()
        this.adUnit()
    }

    deviceId () {
        const deviceIdValue = this.getDeviceId()
        this.$gtag.customMap({ 'dimension1': 'deviceId' })
        this.$gtag.event('deviceId_dimension', { deviceId: deviceIdValue })
    }

    ipAddress () {
        const ipAddressValue = this.getIpAddress()
        this.$gtag.customMap({ 'dimension2': 'ipAddress' })
        this.$gtag.event('ipAddress_dimension', { ipAddress: ipAddressValue })
    }

    channel () {
        const channelValue = this.getChannel()
        this.$gtag.customMap({ 'dimension3': 'channel' })
        this.$gtag.event('channel_dimension', { channel: channelValue })
    }

    show () {
        const showValue = this.getShow()
        this.$gtag.customMap({ 'dimension4': 'show' })
        this.$gtag.event('show_dimension', { show: showValue })
    }

    campaign () {
        const campaignValue = this.getCampaign()
        this.$gtag.customMap({ 'dimension5': 'campaign' })
        this.$gtag.event('campaign_dimension', { campaign: campaignValue })
    }

    adUnit () {
        const adUnitValue = this.getAdUnit()
        this.$gtag.customMap({ 'dimension6': 'adUnit' })
        this.$gtag.event('adUnit_dimension', { adUnit: adUnitValue })
    }

    getDeviceId () {
        return '1234'
    }

    getIpAddress () {
        return '127.0.0.1'
    }

    getChannel () {
        return '12'
    }

    getShow () {
        return 'Curon'
    }

    getCampaign () {
        return 'DraftKings'
    }

    getAdUnit () {
        return 'SideRail'
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
    padding: 0px;
}

body {
    padding: 0px;
    margin: 0px;
}
</style>
