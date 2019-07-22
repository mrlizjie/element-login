<template>
  <div>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="login-box" size="medium">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
        </el-form-item>
      </el-form>
  </div>

</template>

<script>
    export default {
        name: "Login",
      data(){
          return{
            form:{
              username: '',
              password: ''
            },
            rules:{
              username:[
                { required: true, message: '请输入账号', trigger: 'blur'}
              ],
              password:[
                { required: true, message: '请输入密码', trigger: 'blur'}
              ]
            }
          }
      },
      /*beforeRouteEnter: (to, from, next) => {
        console.log("准备进入首页");
        // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
        next(vm => {
          vm.getData();
        });
      },*/
      methods:{
          onSubmit(form){

            var formData = JSON.stringify(this.form)

            this.$refs[form].validate((valid) => {
              if (valid) {
                // let self = this;
                this.axios({
                  method: 'post',
                  url:'api/login',
                  data: formData

                }).then((repos) => {

                  alert("repos: "+repos.data)
                  var result = repos.data;

                  if (result == 'true' || result == true){

                    this.$router.push('/main');  //this.$router.push() 这个地方的this并不指向vue实例
                  } else {
                    alert("登录失败！")
                  }
                })

              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
      }
    }
</script>

<style lang="scss" scoped>

  .login-box{
    width: 400px;
    margin: 280px auto;
    padding: 80px;
    border: #DCDFE6 1px solid;
    border-radius: 20px;
  }

</style>
