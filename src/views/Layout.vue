<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <nav-left></nav-left>
      </el-aside>
      <el-container>
        <el-header>
          <headers></headers>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavLeft from "../components/NavLeft.vue";
import Headers from "../components/Headers.vue";
export default {
  components: {
    NavLeft,
    Headers,
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #fff;
  color: #333;
  text-align: right;
  line-height: 60px;
}

.el-aside {
  background-color:#001529;
  color: #333;
  line-height: 100px;
  color: #fff;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-container{
  height: 100%;
}
</style>