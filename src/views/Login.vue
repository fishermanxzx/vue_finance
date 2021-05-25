<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 class="title">樱花金融后台管理系统</h2>
      </div>
      <el-form ref="loginForm" :model="form" label-width="100px" :rules="rules">
        <el-form-item label="用户名称:" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password" type="password" @keyup.native.enter="login"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { post } from "../utils/http.js";
import { setToken } from "../utils/auth.js";
export default {
  data() {
    var validatePassUsername = (rule, value, callback) => {
      const reg = /^\w{4,8}$/;
      if (reg.test(value)) {
        callback();
      } else {
        callback(new Error("必须是4到8位数字字母组合"));
      }
    };
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { validator: validatePassUsername, trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 8,
            message: "密码长度必须在3到8个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          post("/login", this.form).then((res) => {
            setToken(res.token)
            sessionStorage.setItem('nickname',res.nickname)
            this.$router.push('/')
          }).catch((error)=>{
            console.log(error)
          });
        } else {
          this.$message({ message: "用户名称或者密码格式不对",type:'error',duration:2000 });
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  width: 500px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .title {
    text-align: center;
    color: #ee51c7;
  }
}
.el-button {
  width: 45%;
}
</style>