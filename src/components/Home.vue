<template>
  <div class="hello">
    <h1>{{name}},欢迎你</h1>
    <el-button @click="exit">退出登录</el-button>
    <div class="box">
    <el-input class="msg" type="textarea" v-model="msg"></el-input>
    <el-button type="primary" @click="submit">发表留言</el-button>
      <el-table
      :data="list"
      stripe
      style="width: 700px;">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="msg"
        label="留言"
        width="180">
      </el-table-column>
      <el-table-column
        prop="msgDate"
        label="留言日期">
      </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          v-if="scope.row.name === name"
          @click.native.prevent="deleteRow(scope.$index, list)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
    </el-table>
      </div>
  </div>
</template>

<script>
import ajax from '../lib/ajax'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      list: [],
      msg: ''
    }
  },
  created () {
    this.name = this.$store.state.userName
    ajax.get('/msg', (data) => {
      this.list = data.msgs
      this.$nextTick(function () {
        console.log(document.querySelectorAll('.el-table__row'))
      })
    })
  },
  // mounted () {
  //   console.log(document.querySelectorAll('.el-table__row'))
  //   this.$nextTick(function () {
  //     console.log(document.querySelectorAll('.el-table__row'))
  //   })
  //   setTimeout(function () {
  //     console.log(document.querySelectorAll('.el-table__row'))
  //   }, 1000)
  // },
  methods: {
    exit: function () {
      this.$message({
        message: '已退出!',
        type: 'success'
      })
      this.$store.dispatch('setUser', false)
      sessionStorage.setItem('isLogin', 'false')
      this.$router.push('/login')
    },
    deleteRow (index, rows) {
      ajax.get('/delMsg/' + rows[index]._id, (res) => {
        res.status === 1 && this.$message({
          message: '删除成功!',
          type: 'success'
        })
      })
      rows.splice(index, 1)
    },
    submit: function () {
      if (this.msg) {
        this.$message({
          message: '留言成功!',
          type: 'success'
        })
        ajax.post('/msg', {name: this.name, msg: this.msg}, (data) => {
          this.list.unshift(data)
          this.msg = ''
        })
      } else {
        this.$message({
          message: '留言不能为空!',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
  .box{
    width: 700px;
    margin: 0 auto;
  }
</style>
