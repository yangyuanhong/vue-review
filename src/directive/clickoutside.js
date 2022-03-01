/*
 * @Title:
 * @Description: 自定义指令
 * @Author: yuanhong.yang
 * @Date: 2022-02-21 17:29:44
 * @LastEditors: yuanhong.yang
 * @LastEditTime: 2022-02-21 17:35:34
 */
const clickoutsideContext = '@@clickoutsideContext'

export default {
  bind(el, binding, vnode) {
    console.log(el)
    const documentHandler = (e) => {
      if (vnode.context && el !== e.target && !el.contains(e.target)) {
        vnode.context[el[clickoutsideContext].methodName]()
      }
    }
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      arg: binding.arg || 'click'
    }
    document.addEventListener(el[clickoutsideContext].arg, documentHandler, false)
  },
  update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression
  },
  unbind(el) {
    document.removeEventListener(el[clickoutsideContext].arg, el[clickoutsideContext].documentHandler)
  },
  install(Vue) {
    Vue.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    })
  }
}
