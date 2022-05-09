const routes = [
    {
        name: 'Main',
        path: '/inicial',
        component: () => import('@/pages/BasePrincipal.vue'),
        children: [
            {
                name: 'Inicial',
                path: '/inicial',
                component: () => import('@/pages/TemplateInicial.vue'),
            },
            {
                name: 'Finalizar',
                path: '/finalizar',
                component: () => import('@/pages/TemplateFinalizar.vue')
            }
        ]
    },
    {
        name: 'root',
        path: '/',
        redirect: '/inicial'
    }
]

export default routes;