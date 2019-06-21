<template>
  <div class="hello">
    <el-page-header title="登录" @back="goBack" content="注册">
    </el-page-header>
      <div class="box">
        <el-input type="text" v-model="name" placeholder="请输入用户名"></el-input>
        <el-input autocomplete v-model="pwd" show-password placeholder="请输入密码"></el-input>
        <el-button type="primary" @click="submit" class="submit">提交</el-button>
      </div>
  </div>
</template>

<script>
import ajax from '../lib/ajax'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      pwd: ''
    }
  },
  created () {
  },
  methods: {
    goBack () {
      this.$router.push('/login')
    },
    submit: function () {
      if (this.name === '' || this.pwd === '') {
        this.$message({
          message: '用户名或密码不能为空!',
          type: 'warning'
        })
        return
      }
      ajax.post('/regis', {name: this.name, pwd: this.pwd}, (data) => {
        if (data.status === 0) {
          this.$message({
            message: '用户名已注册!',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '注册成功!即将跳转首页',
            type: 'success'
          })
          this.$store.dispatch('setUser', true)
          this.$store.dispatch('setName', this.name)
          sessionStorage.setItem('isLogin', 'true')
          sessionStorage.setItem('name', this.name)
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
  .box {
    width: 325px;
    margin: 0 auto;
  }
</style>
