<template>
  <div class="login">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="container">
      <img src="../assets/avatar.jpg" class="avatar" alt="">
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" class="" placeholder="请输入用户名" prefix-icon="el-icon-phone-outline"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" prefix-icon="el-icon-view" @keydown.native.enter="submitForm('ruleForm')"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" :plain="true" @click="submitForm('ruleForm')">登陆</el-button>
    </el-form>
  </div>
</template>
<script>
import {loginPost} from '@/api/index.js'
export default {
  data(){
    return {
      ruleForm:{
        username:'',
        password:''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          loginPost(this.ruleForm).then(res=>{
            if(res.meta.status==200){
              this.$message({
                message: res.meta.msg,
                duration:1000,
                type: 'success'
              });
              setTimeout(()=>{
              localStorage.setItem('mytoken',res.data.token)
              this.$store.commit('setUsername',res.data.username)
              this.$router.push({path:'/'})
              },1000)
              
            } else {
              this.$message({
                message: res.meta.msg,
                duration:1000,
                type: 'error'
              });
            }
          })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
