<template>
  <div>
    <h1>樱花金融后台管理系统</h1>
    <el-menu
      router
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      default-active='/index'
    >
    <menus :menu="item" v-for="(item,index) in menuData " :key='index'></menus>
    </el-menu>
  </div>
</template>

<script>
import {get} from '../utils/http.js'
import Menus from './Menus.vue'
export default {
    data(){
        return {
            menuData:[]
        }
    },
    created(){
        get('/menu').then((res)=>{
            this.menuData = res.data
        })
    },
    components:{
        Menus
    }
};
</script>

<style lang="less" scoped>
h1{text-align: center;}
.el-menu {
  border-right: none;
}
</style>