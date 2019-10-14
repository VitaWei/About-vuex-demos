// 对state数据派生出一些状态，需要知道商品的个数
const getters = {
  goods_obj: state => state.goods,
  goods_length: state => state.goods.length
}
export default getters
