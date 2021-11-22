import { createWebHistory, createRouter } from "vue-router";


const routes = [{
        path: "blog/list",
        name: "BlogList",
        component: () =>
            import ("./components/BlogList.vue")
    },
    {
        path: "blog/list/1",
        name: "BlogDetail1",
        component: () =>
            import ("./components/Blog Detail/judul1.vue")

    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;