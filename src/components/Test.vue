<template>
    <div>
      <div id='temp01'>
      <div class='demo1'>
        <div class='search clearFix'>
          <div class='clearFix s_box'>
            <input type="text" class='keyWord'
                   @focus="focus"
                   v-model="msg"
                   @keydown.f2="blur"
                   v-focus
                   v-color="'blue'"
                   v-font="800"
            >
            <input type="button" value='GO' class='go' @click="blur">
          </div>
          <Son v-show="flag" :list="list" @func="show"></Son>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import Son from './Son'
export default {
  name: 'Test',
  components: {
    Son
  },
  data () {
    return {
      flag: false,
      list: ['HTML5+CSS3', 'JavaScript', 'Angular.js', 'Vue.js', 'React.js', 'Node.js', 'React-Native'],
      msg: ''
    }
  },
  methods: {
    focus () {
      this.flag = true
    },
    blur () {
      this.flag = false
    },
    show (data) {
      this.msg = data
    }
  },
  directives: {
    'font': {
      bind: function (el, binding) {
        el.style.fontWeight = binding.value
      }
    }
  }
}
</script>

<style scoped>
  .demo1 {
    margin-left:200px;
  }
  .clearFix:before,
  .clearFix:after {
    display: table;
    content: '';
  }
  .clearFix:after {
    clear: both;
  }
  .search {
    width: 320px;
    max-height: 300px;
    border-radius: 20px;
    background: #ddd;
  }
  .s_box {
    width: 300px;
    margin: 10px auto;
  }
  .keyWord {
    width: 230px;
    height: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    font-size: 18px;
    padding-left: 10px;
  }
  .go {
    border-radius: 15px;
    outline: none;
    width: 50px;
    height: 30px;
    border: none;
    background: #e4393c;
  }
  .style_a {
    background: #999;
    cursor: pointer;
  }
</style>
