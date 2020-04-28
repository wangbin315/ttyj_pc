<template>
  <div class="firstChild">
    <bar></bar>
	</div>
</template>

<script>

import Bar from '@/components/echarts-bar/Bar'


export default {
  name: 'FirstChild',
  components: { Bar },
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    init() {
      
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<!-- <style  src='../assets/css/demo.css'></style> 可以引入自定义样式 --> 
<style  src='../assets/css/common.css'></style> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>


</style>
