const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        //component: (resolve) => require(['./views/index0.vue'], resolve)
        component: (resolve) => require(['./views/create-report.vue'], resolve)
        /*component: (resolve) => require(['./views/index.vue'], resolve)*/
    }
];
export default routers;