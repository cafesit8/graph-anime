export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/:id',
    name: 'Detail',
    component: () => import('../pages/AnimeDeatils.vue')
  },
  {
    path: '/romance',
    name: 'Romance',
    component: () => import('../pages/Romance.vue')
  },
  {
    path: '/action',
    name: 'Action',
    component: () => import('../pages/Action.vue')
  },
  {
    path: '/horror',
    name: 'Horror',
    component: () => import('../pages/Horror.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue')
  }
]