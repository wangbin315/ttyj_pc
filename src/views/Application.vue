<template>
  <div class="application">
    <el-container>
      <!-- 导航部分 -->
      <el-header>
        <div class="head-title">
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <h1>综合交通运行监测与预警系统</h1>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light nav-top">
                <el-menu 
                  :default-active="activeIndex" 
                  class="el-menu-demo" 
                  mode="horizontal"
                  text-color="#fff"
                  active-text-color="#fff">
                  <el-menu-item index="1">行业指数宏观分析</el-menu-item>
                  <el-menu-item index="2">行业运行指标精细化监测</el-menu-item>
                  <el-menu-item index="3">监测预警管理</el-menu-item>
                </el-menu>
              </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple head-login-info">当前用户信息</div></el-col>
          </el-row>
        </div>
      </el-header>
      <!-- 侧边栏和右侧主体内容 -->
      <el-container>
        <div class="main">
          <div class="side-bar">
            <el-aside width="220px">
              <el-menu
                :default-active="defaultActive"
                class="el-menu-vertical-demo"
                @select="gotoApplication"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1">
                  <i class="el-icon-document"></i>
                  <span slot="title">菜单一</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-setting"></i>
                  <span slot="title">菜单二</span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>菜单三</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">my first Echarts</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-aside>
          </div>
          <!-- 二级路由入口 -->
          <div class="routerView">
            <el-main><router-view></router-view></el-main>
          </div>
        </div>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>

export default {
  name: 'Application',
  data () {
    return {
      activeIndex: '1',
      defaultActive:'1',
      cur_side_id:'',
    }
  },
  methods: {
    init() {
      this.changeSideBar()
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    changeSideBar(){
      let cur_route = location.href
      if(cur_route.indexOf('firstChild') >= 0){
        this.defaultActive = '3-1'
      }else if(cur_route.indexOf('dh1') >= 0){
        this.defaultActive = '2'
      }else if(cur_route.indexOf('dh2') >= 0){
        this.defaultActive = '2'
      }
    },
    gotoApplication(index,indexPath){
      this.defaultActive = index
      let cur_route = location.href
      switch(index) {
        case '1':
          if(cur_route.indexOf('dh1') >= 0){
            return;
          }else{
            this.$router.replace('/dh1')
          }
        break;
        case '2':
          if(cur_route.indexOf('dh2') >= 0){
            return;
          }else{
            this.$router.replace('/dh2')
          }
        break;
        case '3-1':
          if(cur_route.indexOf('firstChild') >= 0){
            return;
          }else{
            this.$router.replace('/firstChild')
          }
        break;
      }
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      // 路由变化时 保证sidebar当前选中项不变
      this.changeSideBar()
    }
  },
}
</script>

<!-- 可以引入自定义样式 --> 
<style  src='../assets/css/common.css'></style> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head-title {
  background: red;
  height: 70px;
  line-height: 70px;
  background-image: url(../assets/images/bj.png);
  background-repeat: no-repeat;
  background-size: 100% 70px;
  margin: 0;
  padding: 0;
  h1{
    line-height: 70px;
    height: 100%;
    padding-left: 15px;
    color:#FFFFFF;
    font-size: 24px;
    text-align: left;
    font-weight:500;
  }
  .head-login-info{
    line-height: 70px;
    font-size: 24px;
    color: #ffffff;
  }
}
.side-bar .el-menu{text-align: left;}

</style>
