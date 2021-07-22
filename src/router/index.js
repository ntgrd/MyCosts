import Vue from 'vue'
import Router from 'vue-router'
import AddPaymentForm from '../components/AddPaymentForm.vue'
// import ModalWindow from '../components/ModalWindow.vue'
// import AddCostBtn from '../components/AddCostBtn'

Vue.use(Router)
 
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/add/payment/:id',
            name: '/add/payment/',
            component: AddPaymentForm
        },
    ]
});

export default router
 
