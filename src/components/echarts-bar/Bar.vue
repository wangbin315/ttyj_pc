<template>
  <div id="main" ref="barchart" style="width: 600px;height:400px;">

	</div>
</template>

<script>
let echarts = require('echarts');

export default {
  components: {
   
  },
  props: {
   
  },
  data () {
    return {
     
    }
	},
	methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
			// let myChart = echarts.init(document.getElementById('main'));
			let barchart = this.$refs.barchart;
			if(!barchart){
				return
			}
      let myChart = echarts.init(barchart)
      // 绘制图表
      myChart.setOption({
          title: {
              
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    }
  },
	mounted() {
    this.init()
  },
  created () {
		this.init()
  },
  watch: {
    
  }
}
</script>

<style>

</style>
