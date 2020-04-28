<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import $ from 'jquery';
import * as util from '@/assets/js/util.js';
export default {
  name: 'App',
  components:{

  },
  data:function(){
    return{
        
    }
  },
  computed:{

  },
  methods:{
    init (){

    },
    created(){
      this.init()
      //断网
      let t = this
      window.addEventListener("offline", function(e) {
          t.$message({
            showClose: true,
            message: '当前无网络，请检查网络是否连接正常',
            type: 'warning'
          });
      })  
      // //联网
      window.addEventListener("online", function(e) {}) 
    }
  }
}
</script>

<style>
@import './assets/css/reset.css';
@import './assets/css/ele-component.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
