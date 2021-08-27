import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home/Home'
import Search from '../views/Search/Search'
import Order from '../views/Order/Order'
import Profile from '../views/Profile/Profile'
import Login from "@/views/Login/Login";
import TestMedia3 from '@/views/Test/TestMedia3'
import TestMedia2 from '@/views/Test/TestMedia2'
import TestMedia1 from '@/views/Test/TestMedia1'
import TestFlex1 from "@/views/Test/TestFlex1";
import TestFlex2 from "@/views/Test/TestFlex2";
import TestFlex3 from "@/views/Test/TestFlex3";
import TestFlexDemo1 from "@/views/Test/TestFlexDemo1";
import TestFlexDemo2 from "@/views/Test/TestFlexDemo2";
import TestFlexDemo3 from "@/views/Test/TestFlexDemo3";
import TestFlexDemo4 from "@/views/Test/TestFlexDemo4";
import TestFlexDemo41 from "@/views/Test/TestFlexDemo41";
import TestFlexDemo42 from "@/views/Test/TestFlexDemo42";
import TestFlexDemoLayout1 from "@/views/Test/TestFlexDemoLayout1";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/order',
        component: Order,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/media1',
        component: TestMedia1,
    },
    {
        path: '/media2',
        component: TestMedia2,
    },
    {
        path: '/media3',
        component: TestMedia3,
    },
    {
        path: '/flex1',
        component: TestFlex1,
    }, {
        path: '/flex2',
        component: TestFlex2,
    }, {
        path: '/flex3',
        component: TestFlex3,
    },
    {
        path: '/demo1',
        component: TestFlexDemo1,
    },
    {
        path: '/demo2',
        component: TestFlexDemo2,
    },
    {
        path: '/demo3',
        component: TestFlexDemo3,
    },
    {
        path: '/demo4',
        component: TestFlexDemo4,
    },
    {
        path: '/demo41',
        component: TestFlexDemo41,
    },
    {
        path: '/demo42',
        component: TestFlexDemo42,
    },
    {
        path: '/layout1',
        component: TestFlexDemoLayout1,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
