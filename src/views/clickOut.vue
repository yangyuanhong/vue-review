<!--
 * @Title:
 * @Description:
 * @Author: yuanhong.yang
 * @Date: 2022-02-21 11:41:15
 * @LastEditors: yuanhong.yang
 * @LastEditTime: 2022-02-21 17:36:11
-->
<template>
  <div class="clickOut">
    <div v-show="flag" v-clickoutside="handleClose" />
    <el-button @click="pageGo">401</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Clickoutside from '../directive/clickoutside'
export default {
  name: 'ClickOut',
  components: {},
  directives: {
    Clickoutside
  },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    handleClose() {
      this.flag = false
    },
    pageGo() {
      this.$router.push('/401')
    }
  }
}
</script>
