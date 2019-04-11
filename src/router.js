const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index0.vue'], resolve)
    },
    {
        path:'/reportGenerate',
        meta:{
          title:'报表生成页面'
        },
        component:(resolve) => require(['./views/report-generate.vue'],resolve)
    },
    {
        path:'/reportList',
        meta:{
          title:'报表查看页面'
        },
        component:(resolve) => require(['./views/report-list.vue'],resolve)
    },
    {
        path:'/appTest',
        meta:{
            title:'测试组件之间的传值'
        },
        component:(resolve) => require(['./views/theSameComponent/appTest.vue'],resolve)
    }
];
export default routers;