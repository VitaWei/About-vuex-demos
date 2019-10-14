// 使用常量，将改变state原始数据的方法，可以使用常量替代 Mutation 事件类型，在需要多人协作的大型项目中，这会很有帮助。可以让代码合作者对整个 app 包含的 mutation 一目了然
export const ADD_CART = 'ADD_CART'
export const REDUCE_CART = 'REDUCE_CART'
