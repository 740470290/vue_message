<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view :arr="arr" @func="show" />
    </transition>
    <p>{{dataFromSon}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'left',
      isIndex: true,
      arr: ['小米', '华为', '苹果'],
      dataFromSon: null
    }
  },
  methods: {
    show (data) {
      this.dataFromSon = data
    },
    alert () {
      alert(123)
    }
  }
  // created () {
  //   if (sessionStorage.getItem('isLogin') === 'true') {
  //     this.$store.dispatch('setUser', true)
  //     this.$store.dispatch('setName', sessionStorage.getItem('name'))
  //   } else {
  //     this.$router.push('/login')
  //   }
  // }
  // watch: {
  //   '$route.path': function (newVal, oldVal) {
  //     const list = ['/home', '/member', '/shopcar', '/search']
  //     console.log(newVal + '----' + oldVal)
  //     if (list.indexOf(newVal) === -1) {
  //       this.isIndex = false
  //     } else {
  //       this.isIndex = true
  //     }
  //     if (newVal.includes(oldVal)) {
  //       this.transitionName = 'left'
  //     } else if (list.indexOf(newVal) > list.indexOf(oldVal) && list.indexOf(oldVal) !== -1) {
  //       this.transitionName = 'left'
  //     } else {
  //       this.transitionName = 'right'
  //     }
  //   }
  // }
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 20px;
  padding-bottom: 50px;
  overflow: hidden;
}
.left-enter{
  opacity: 0;
  transform: translateX(100%);
  /*overflow: hidden;*/
}
.left-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  width: 90%;
  position: absolute;
}
.right-enter{
  opacity: 0;
  transform: translateX(-100%);
}
.right-leave-to{
  opacity: 0;
  transform: translateX(100%);
  width: 90%;
  position: absolute;
}
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active{
  transition: all .4s ease;
}
.el-textarea__inner {
  resize: none;
  width: 700px;
  margin: 22px 0;
  height: 160px;
}
  .el-input{
    width: 325px;
    display: block;
    margin: 7px 0;
  }
</style>
