<template>
  <div class="modal">
    <modal-content-component />
    <button class="modal-close-button" @click="close" ref="close"></button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ModalContentComponent from '@/Components/ModalContentComponent.vue'
@Component({
    components: { ModalContentComponent }
})
export default class ModalComponent extends Vue {
    $refs!: { close: HTMLElement }

    mounted () {
        this.focusClose()
    }

    close () {
        this.$emit('close')
    }

    focusClose () {
        this.$refs.close.focus()
    }
}
</script>

<style lang="scss">
$top-color: black;
$bottom-color: grey;

.modal {
    top: 0;
    left: 0;
    z-index: 2;
    position: absolute;
    background: linear-gradient($top-color, $bottom-color);
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
}

.modal::-webkit-scrollbar {
    display: none;
}

button.modal-close-button {
    position: absolute;
    top: 570px;
    outline: none !important;
    border: none;
    right: 140px;
    height: 44px;
    width: 44px;
    background: url('../Assets/close-normal.png') top center no-repeat;
}

button.modal-close-button:focus {
    background: url('../Assets/close-focus.png') top center no-repeat;
}
</style>
