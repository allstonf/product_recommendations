<template>
    <div>
       <div id='tv'>
         <iframe id='tvFrame' height='720' width='1280' allowfullscreen='' frameborder='0' :src="src"></iframe>
         <button id="run" @click="run">Run First</button>
      </div>
 </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Preview extends Vue {
  name = 'Preview'

  data () {
    return {
      src: ''
    }
  }

  run () {
      this.src = '/1'
  }
}

</script>

<style scoped>
  iframe {
    width: 1280px;
    height: 720px;
    transform-origin: 0% 0%;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 70px;
    padding-top: 77px;
  }
  #tv {
    background: url('https://proto-resource.s3.us-east-2.amazonaws.com/utility/tv.jpg') top center no-repeat;
    width: 1419px;
    height: 950px;
    transform-origin: 0% 0%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }
  #run {
      z-index: 2;
      position: absolute;
      bottom: 0px;
  }
</style>
