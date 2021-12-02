import store from '@/store'

console.log(store)
store.dispatch('permission/generateRoutes', '').then(() => {
  console.log('初始化菜单')
})

