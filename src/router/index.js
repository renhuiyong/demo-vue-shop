import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home/Home'
import Search from '../views/Search/Search'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Login from "@/views/Login/Login";
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta:{
            showFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
