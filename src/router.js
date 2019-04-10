import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/shared/layout.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    },
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            name: 'Index',
            component: Layout,
            children: [{
                path: '/home',
                component: () =>
                    import ('@/views/home/index'),
                meta: {
                    title: '首页',
                    tabnav: 1,
                    withNotice: true
                }
            }]
        },
        {
            path: '/user',
            component: Layout,
            children: [{
                path: '/',
                name: 'UserCenter',
                component: () =>
                    import ('@/views/user/index'),
                meta: {
                    title: '个人中心',
                    tabnav: 4,
                    withoutHeader: true
                }
            }]
        },
         {
           path: '/cart',
           component: Layout,
           children: [{
             path: '/',
             name: 'ShopCar',
             component: () =>
               import('@/views/ShopCar/index'),
             meta: {
               title: '购物车',
               tabnav: 3,
               withoutHeader: true,
             }
           }]
         },
        {
            path: '/search',
            name: 'Search',
            component: () =>
                import ('@/views/search/index'),
            meta: {
                title: '搜索'
            }
        },
        {
          path: '/item/:id',
          name: 'item',
          component: () =>
            import('@/views/shared/Detail'),
          meta: {
            title: '详情'
          }
        },
         
        {
            path: 'error',
            name: '_50x',
            component: () =>
                import ('@/views/shared/error.vue'),
            meta: {
                title: 'Error',
                detail: '系统异常，请稍后重试'
            }
        },
        {
            path: '*',
            name: '_404',
            component: () =>
                import ('@/views/shared/error.vue'),
            meta: {
                title: 'NOT FOUND',
                detail: '抱歉，你要找的页面不见了'
            }
        }
    ]
})
