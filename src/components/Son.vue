<template>
    <ul class='listNode'>
            <li v-for="item in list" :key="item" @click="show(item)">{{item}}</li>
          </ul>
</template>
<script>
export default {
  name: 'Son',
  props: ['list'],
  methods: {
    show (i) {
      this.$emit('func', i)
    }
  }
}
</script>
<style scoped>
  .listNode {
    list-style: none;
    padding: 0;
    margin: 10px auto;
    width: 300px;
  }
  .listNode li {
    padding-left: 20px;
    color: #555;
    line-height: 30px;
    cursor: pointer;
  }
  .listNode li:hover {
    background: #BDBCBC;
  }
</style>
