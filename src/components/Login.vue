<template>
  <div>
    <el-page-header title="注册" @back="goBack" content="登录">
    </el-page-header>
      <div class="a">
        <div class="box">
          <el-input type="text" v-model="name" placeholder="请输入用户名"></el-input>
          <el-input autocomplete v-model="pwd" show-password placeholder="请输入密码"></el-input>
          <el-button type="primary" @click="submit" class="submit">提交</el-button>
      </div>
      </div>
  </div>
</template>

<script>
import ajax from '../lib/ajax'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      name: 'admin',
      pwd: ''
    }
  },
  methods: {
    goBack () {
      this.$router.push('/regis')
    },
    submit: function () {
      if (this.name === '' || this.pwd === '') {
        this.$message({
          message: '用户名或密码不能为空!',
          type: 'warning'
        })
        return
      }
      ajax.post('/login', {name: this.name, pwd: this.pwd}, (data) => {
        if (data.status === 0) {
          this.$message({
            message: '用户名错误!',
            type: 'warning'
          })
        } else if (data.status === 1) {
          this.$message({
            message: '密码错误!',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '登录成功!即将跳转首页',
            type: 'success'
          })
          this.$store.dispatch('setUser', true)
          this.$store.dispatch('setName', this.name)
          sessionStorage.setItem('isLogin', 'true')
          sessionStorage.setItem('name', this.name)
          this.$router.push('/home')
        }
      })
    },
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ])
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
