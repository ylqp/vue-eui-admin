import store from '@/store'
import router from '@/router'
// console.log(store)
store.dispatch('permission/generateRoutes', '').then(() => {
  console.log('初始化菜单')
})

