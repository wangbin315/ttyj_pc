<template>
  <div class="demo">
    <el-container>
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
      <el-container>
        <el-aside width="200px">
          <el-tree :data="data" :props="defaultProps"></el-tree>
        </el-aside>
        <el-main>
          <template>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </el-container>
    
  </div>
</template>

<script>

import $ from 'jquery';
import * as util from '@/assets/js/util.js';

export default {
  name: 'Demo',
  data () {
    return {
      activeIndex: '1',
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          
        }]
      },{
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    init() {
      
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<!-- <style  src='../assets/css/demo.css'></style> 可以引入自定义样式 --> 
<style  src='../assets/css/base.css'></style> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.head-title {
  background: red;
  height: 70px;
  line-height: 70px;
  background-image: url(../assets/images/bj.png);
  background-repeat: no-repeat;
  background-size: 100%;
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

</style>
