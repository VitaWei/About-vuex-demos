<template>
  <div id="app">
    <p class="discribel">This is a app vuex demo to learning~</p>
    <p class="msg">{{msg}}</p>
    <button @click="$store.commit('add',1)">+</button>
    <button @click="reduce">-</button>
    <button @click="addAction">action+</button>
    <button @click="reduceAction">action-</button>
    <p class="tips">this is a getters count value: {{$store.getters.count}}</p>
    <p class="tips">this is a state count value: {{$store.state.a.count1}}</p>
    <countval></countval>
  </div>
</template>

<script>
import countval from './components/count.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex' //use commit

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to my vue.js app'
    }
  },
  components: {
        countval,
    },
   computed:{
        ...mapGetters(['count']),
        ...mapState(['count1'])
    },
    methods: {
        ...mapMutations([
            'add',
            'reduce'
        ]),
        ...mapActions([ 
            'addAction',
            'reduceAction'
        ])
    },
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.discribel {
  font-size: 40px;
  color: #42b983;
}
.msg {
  color: rgb(206, 85, 105);
  font-size: 30px;
}
button {
  width: 100px;
  height: 30px;
  background-color: rgb(54, 121, 247);
  color: #fff;
  font-size: 15px;
  border-radius: 10px;
  outline: none;
}
.tips {
  font-size: 25px;
  color: rgb(162, 65, 252);
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
