import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tapbar/home.vue'
import member from '@/components/tapbar/member.vue'
import search from '@/components/tapbar/search.vue'
import shop from '@/components/tapbar/shop.vue'
import newList from '@/components/new/newList.vue'
import newInfo from '@/components/new/newInfo.vue'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'mui-active',
    routes: [{
            path: '/home',
            name: 'home',
            component: home
        }, {
            path: '/member',
            name: 'member',
            component: member
        }, {
            path: '/search',
            name: 'search',
            component: search
        }, {
            path: '/shop',
            name: 'shop',
            component: shop
        },
        {
            path: '/new/newList',
            name: 'newList',
            component: newList
        },
        {

            path: '/new/newInfo/:id',
            name: 'newInfo',
            component: newInfo
        }
    ]
})