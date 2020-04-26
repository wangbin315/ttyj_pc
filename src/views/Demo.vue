<template>
  <div class="demo">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">我的工作台</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
        </el-menu>
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
      activeIndex2: '1',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
