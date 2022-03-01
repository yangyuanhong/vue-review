/*
 * @Title: 接口汇总
 * @Description: 用户登录，退出，个人数据获取等接口
 * @Author: yuanhong.yang
 * @Date: 2022-02-23 15:08:24
 * @LastEditors: yuanhong.yang
 * @LastEditTime: 2022-02-23 15:14:37
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'vue-element-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'vue-element-admin/user/logout',
    method: 'post'
  })
}
