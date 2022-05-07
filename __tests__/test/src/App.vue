<template>
  <div id="edit"></div>
</template>

<script>
import xsEditor from '../../../lib/index.js'
import { onMounted } from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    onMounted(() => {
      xsEditor(
        document.querySelector('#edit'),
        {
          operable: true,
          watermark: 'sva哈哈哈哈',
          upFileUrl: 'http://124.220.16.124:8099/upload/setFilesNote',
          onChange: (e, vd) => {
            console.log(e, vd);
          }
        }
      )
    })
  }
}
</script>

<style>
@import url('../../../lib/style/common.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  height: 600px;
  background-color: #2c3e50;
}
#edit {
  background-color: #2c3e50;
}
</style>
