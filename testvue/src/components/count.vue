<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{$store.state.a.count}}</h3>
  </div>
</template>

<script>
import store from '../vuex/store'
export default {
  data() {
    return {
      msg: 'Hello my Vuex'
    };
  }
}

</script>
<style lang="scss" scoped>
h3,h2 {
  font-size: 45px;
  color: rgb(226, 30, 40);
}
</style>