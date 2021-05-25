<template>
  <div>
    <el-row>
      <el-col :span="20">
        <p>
          今天是你在阿里的第<span class="day">{{ days }}</span
          >天
        </p>
      </el-col>
      <el-col :span="4">
        <el-dropdown trigger="click" @command="logout">
          <span class="el-dropdown-link">
            欢迎您，{{ nickname
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="personal">个人中心</el-dropdown-item>
            <el-dropdown-item command="changePassWord"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { get } from "../utils/http.js";
export default {
  data() {
    return {
      time: "",
    };
  },
  computed: {
    nickname() {
      return sessionStorage.getItem("nickname");
    },
    days() {
      let target = new Date(this.time);
      let now = new Date();
      return Math.floor((now - target) / 1000 / 60 / 60 / 24);
    },
  },
  created() {
    get("/in").then((res) => {
      this.time = res.time;
    });
  },
  methods: {
    logout(name) {
      console.log(name);
      if (name == "logout") {
        sessionStorage.clear();
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.day {
  color: #40a9ff;
  font-size: 24px;
  vertical-align: bottom;
}
</style>