<template>
  <div class="logincontainer">
    
    <el-form :model="loginFrom" ref="loginFrom" 
    :inline="false" size="normal" class="logiForm" 
    :rules="rules">
      <div class="loginTitle">系统登录</div>
      
      <el-form-item prop="username">
        <el-input v-model="loginFrom.username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="loginFrom.password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item prop="code">
        <!-- gutter 沟的宽度  -->
        <el-row :gutter="20">

          <el-col :span="16" :offset="0">
            <el-input v-model="loginFrom.code" placeholder="请输入验证码"></el-input>
          </el-col>
          <el-col :span="8" :offset="0">
            <el-input v-model="loginFrom.code" placeholder="请输入验证码"></el-input>
          </el-col>
        </el-row>
        
      </el-form-item>

      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="16" :offset="0">
            <el-button type="primary" @click="handlerLogin" style="width:100%;">立即登录</el-button>
          </el-col>
          
          <el-col :span="8" :offset="0">
            <el-button>取消</el-button>
          </el-col>
        </el-row>
        
        
       
      </el-form-item>
    </el-form>
    


  </div>
</template>

<script>
  export default {
    data(){
      return{
        loginFrom:{
          username:"",
          password:"",
          code:'',
        },
        rules:{
          username:[{required:true,trigger:"change",message:"请输入用户名"}],
          password:[{required:true, trigger:"change",message:"请输入密码"}],
          code:[{required:true, trigger:"change",message:"请输入验证码"}]
        }
      }
    },
    methods:{
      handlerLogin(){
        // 表单验证
        this.$refs.loginFrom.validate(valid=>{
        if (valid) {
          this.loading = true
          // 调用登录
          this.$store.dispatch('user/login', this.loginFrom)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false

            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
        })


      }
    }
  }
</script>

<style lang="scss" scoped>
.logincontainer{
  height: 100%;
  display: flex;
  justify-content: center;
  // 左右
  align-items: center;
  .logiForm{
    height:350px;
    width:430px;
    box-shadow: 0 0 25px rgb(146, 145, 145);
    padding: 20px 35px;
    .loginTitle{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }


}
</style>