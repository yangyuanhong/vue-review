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
    <div v-clickoutside="handleClose" v-show="flag"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Clickoutside from '../directive/clickoutside'
export default {
  name: 'clickOut',
  components: {},
  data() {
    return {
      flag: true,
    }
  },
  directives: {
    Clickoutside
  },
  methods: {
    handleClose() {
      this.flag = false;
    }
  }
}
</script>
