// 初始化数据
const state = {
  // 商品列表
  shop_list: [
    {
      id: 11,
      name: '鱼香肉丝',
      price: 12
    },
    {
      id: 22,
      name: '宫保鸡丁',
      price: 14
    },
    {
      id: 34,
      name: '土豆丝',
      price: 10
    },
    {
      id: 47,
      name: '米饭',
      price: 2
    }
  ],
  added: []
}

// getter 抛出去的数据
const getters = {
  // 商品列表
  shoplist: state => state.shop_list,
  cartProducts: state => {
    return state.added.map(({id, num}) => { // 在actions中只有的id和num的字段
      // 在原始数据数据上面进行刷选，这里通过id来匹配
      let product = state.shop_list.find(n => n.id === id)
      console.info('product', product)
      return {
        ...product,
        num
      }
    })
  },
  // 计算总价
  totalPrice: (state, getters) => { // getter中可以调用getter的方法
    let total = 0
    getters.cartProducts.forEach(n => {
      total += n.price * n.num
    })
    return total
  },
  // 计算总数量
  totalNum: (state, getters) => {
    let total = 0
    getters.cartProducts.forEach(n => {
      total += n.num
    })
    return total
  }
}

// action 异步的操作
const actions = {
  // 添加到购物车操作
  addToCart ({ commit }, product) {
    commit('add', {
      // 传递一个add的方法，携带参数id
      id: product.id
    })
  },
  // 清除购物车
  clearAllCart ({commit}) {
    commit('clearAll')// 分发一个clearAll事件，不带参数进行
  },
  // 删除购物车的指定的商品
  delProduct ({commit}, product) {
    commit('del', product)
  }
}

// mutation
const mutations = {
  // 添加到购物车操作
  add (state, { id }) {
    // 解构id你可以测试id和{id}的区别
    let record = state.added.find(n => n.id === id)
    if (!record) {
      state.added.push({
        id,
        num: 1
      })
    } else {
      record.num++
    }
    console.info(record, state.added, '==========89')
  },
  // 清除购物车 清空购物车的操作，原理就是added的数组置为空数组就可以
  clearAll (state) {
    state.added = []
  },
  // 删除购物车的指定的商品
  del (state, product) {
    console.log(state, product)
    state.added.forEach((n, i) => {
      if (n.id === product.id) {
        console.info(11, n)
        // 找到下标值
        state.added.splice(i, 1)
      }
    })
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
