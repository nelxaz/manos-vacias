import Vue from 'vue'
import Router from 'vue-router'
// Components imports

Vue.use(Router)

const GrillaNinos = resolve => {
  require.ensure(['../components/index/GrillaNinos.vue'], () => {
    resolve(require('../components/index/GrillaNinos.vue'))
  })
}

// TODO: Arreglar las rutas para que coincidan con la navegacion
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: GrillaNinos
      }
    },

    {path: '*', redirect: '/'}
  ]
})
