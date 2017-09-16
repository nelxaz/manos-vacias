import Vue from 'vue'
import Router from 'vue-router'
// Components imports
// Importa el componente navegador para mostrarlo en todas las rutas
import Navegador from '../components/Navegador'

Vue.use(Router)

// const VistaClientes = resolve => {
//   require.ensure(['../components/clientes/VistaCliente.vue'], () => {
//     resolve(require('../components/clientes/VistaCliente.vue'))
//   }, 'user')
// }
// const VistaCompra = resolve => {
//   require.ensure(['../components/compras/VistaCompra.vue'], () => {
//     resolve(require('../components/compras/VistaCompra.vue'))
//   }, 'user')
// }
// const VistaAgregarCompra = resolve => {
//   require.ensure(['../components/compras/AgregarCompra.vue'], () => {
//     resolve(require('../components/compras/AgregarCompra.vue'))
//   }, 'user')
// }
// const VistaInventario = resolve => {
//   require.ensure(['../components/inventario/VistaInventario.vue'], () => {
//     resolve(require('../components/inventario/VistaInventario.vue'))
//   }, 'user')
// }
// const VistaReporte = resolve => {
//   require.ensure(['../components/reportes/VistaReporte.vue'], () => {
//     resolve(require('../components/reportes/VistaReporte.vue'))
//   }, 'user')
// }
// const VistaVenta = resolve => {
//   require.ensure(['../components/ventas/VistaVenta.vue'], () => {
//     resolve(require('../components/ventas/VistaVenta.vue'))
//   }, 'user')
// }
// const Banco = resolve => {
//   require.ensure(['../components/banco/Banco.vue'], () => {
//     resolve(require('../components/banco/Banco.vue'))
//   }, 'user')
// }
// TODO: Arreglar las rutas para que coincidan con la navegacion
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'header',
      components: {
        Navegador
      }
    },
  //   {
  //     path: '/clientes',
  //     name: 'clientes',
  //     components: {
  //       default: VistaClientes
  //     }
  //   },
  //   {
  //     path: '/compras',
  //     name: 'compras',
  //     components: {
  //       default: VistaCompra
  //     }
  //   },
  //   {
  //     path: '/compras/agregar',
  //     name: 'agregarCompra',
  //     components: {
  //       default: VistaAgregarCompra
  //     }
  //   },
  //   {
  //     path: '/inventario',
  //     name: 'inventario',
  //     components: {
  //       default: VistaInventario
  //     }
  //   },
  //   {
  //     path: '/reportes',
  //     name: 'reportes',
  //     components: {
  //       default: VistaReporte
  //     }
  //   },
  //   {
  //     path: '/ventas',
  //     name: 'ventas',
  //     components: {
  //       default: VistaVenta
  //     }
  //   },
  //   {
  //     path: '/banco',
  //     name: 'banco',
  //     components: {
  //       default: Banco
  //     }
  //   },
    {path: '*', redirect: '/'}
  ]
})
