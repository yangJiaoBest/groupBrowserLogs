// 取到需要权限判断的路由表
import router from './router/index'

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    next();
  } else {
    // 用户没登录，跳转到登录页面
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router