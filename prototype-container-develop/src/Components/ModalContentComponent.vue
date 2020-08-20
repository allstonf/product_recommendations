<template>
    <div class="promos-terms-modal">
        <div class="top-image" />
        <div class="banner">TERMS &amp; CONDITIONS</div>
        <div class="content">
            <div class="content-row">
                <div class="content-row-element">
                    <h3>2020 MVP Patrick Mahomes Boost</h3>
                    <p>Bet on 'Patrick Mahomes to win 2020 NFL MVP', boosted to +500!</p>
                    <p>Quick Terms:<br />
                    - Following Opt-In, you'll be issued one single-use Odds Boost for ‘Patrick Mahomes to win 2020 NFL MVP’<br />
                    - Original Price: +400. Boosted Price: +500<br />
                    - You must select the boost in your betslip BEFORE placing the bet<br />
                    - Boosted odds bet must be placed on an individual bet slip<br />
                    - Max Bet: $25<br />
                    - One qualifying bet per user<br />
                    - Boost expires 12 AM ET on 09/10/2020<br />
                    - Excludes live bets, parlays, free bets, cash out bets, voided bets, and odds boosts<br />
                    - Must be in CO, PA, IN, IA, NJ, or WV<br /></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class ModalContentComponent extends Vue {}
</script>

<style lang="scss">
.top-image {
    background: url('../Assets/DraftKings-no-brainer.png') top center no-repeat;
    background-size: contain;
    height: 145px;
    width: 100%;
}
.banner {
    width: 100%;
    padding: 10px 0;
    background-color: #323232;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #ffffff;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #323232;
    width: 100%;
    cursor: default;
    word-break: break-word;
}
.content-row {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    max-height: 1080px;
    overflow-y: scroll;
    overflow: auto;
}
.content-row-element {
    width: 90%;
    text-align: left;
    font-family: "Open Sans", sans-serif;
    font-weight: 200;
    border-radius: 15px;
    font-size: 14px;
    color: #ffffff;
    white-space: pre-line;
}
</style>
