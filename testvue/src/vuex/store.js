import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0,
  count1: 0
};

const mutations = {
  add(state, n) {
    state.count += n;
    state.count1 += 1;
  },
  reduce(state) {
    //step1 needed
    state.count -= 1;
    state.count1 -= 1;
  }
};

const actions = {
  reduce: ({ commit }) => commit("reduce"),
  addAction(context) {
    //这里对reduce 进行了一次操作，会额外引发getters操作+100
    setTimeout(() => {
      context.commit("reduce");
    }, 3000);
    console.log("我比reduce提前执行");
    context.commit("add", 1);
  },
  reduceAction({ commit }) {
    commit("reduce");
  }
};
const getters = {
  //对count的属性进行操作，只要count有任何变化，结果都会+100
  count: function(state) {
    return (state.count += 50);
  },
};
const moduleA = {
  state,
  mutations,
  getters,
  actions
};
const store = new Vuex.Store({
  //不用moduleA的话，就用下面这行
  //state,  mutations,  actions,  getters
  //用moduleA的话，就是
  modules: { a: moduleA } //也就是count.vue中的$store.state.a.count
});
export default store;
