/**
 *vue-国际化
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangStorage  from './lang'          //原来写的message
import locale from 'element-ui/lib/locale'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  LangStorage
})
//element多语言化
locale.i18n((key, value) => i18n.t(key, value))

export default i18n
