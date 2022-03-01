/*
 * @Title: token操作
 * @Description: token的存取
 * @Author: yuanhong.yang
 * @Date: 2022-02-23 15:15:05
 * @LastEditors: yuanhong.yang
 * @LastEditTime: 2022-02-23 15:20:19
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
