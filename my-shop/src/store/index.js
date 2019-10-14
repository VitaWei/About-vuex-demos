// 要存放的数据写在state对象中，state则存写在index.js文件中
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import shop from './module/shop'
Vue.use(Vuex)

const state = {
  goods: [
    {
      id: '0',
      name: 'vivo-X20Plus屏幕指纹版',
      hint: '逆光也清晰，照亮你的美',
      price: 3596.00,
      num: 0,
      img: require('../assets/v.jpg')
    },
    {
      id: '1',
      name: '华为mate10Plus',
      hint: '真正的人工智能芯片',
      price: 4999.00,
      num: 0,
      img: require('../assets/v.jpg')
    },
    {
      id: '2',
      name: '华为mate10Plus',
      hint: '真正的人工智能芯片',
      price: 4999.00,
      num: 0,
      img: require('../assets/v.jpg')
    }
  ],
  totalPrice: 0.00,
  totalNum: 0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    shop // shop模块
  }
})
