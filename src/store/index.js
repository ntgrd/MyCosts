import Vue from 'vue'
import Vuex from 'vuex'
import {Pages, countPages} from '../pages.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        category: [],
        countPages: 0,
        downloadedPages: []
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
            console.log('setPaymentsListData',state.paymentsList)
        },
        addDataToPaymentList(state, payload) {
            console.log('addDataToPaymentList',state.paymentsList)
            state.paymentsList = [...payload, ...state.paymentsList]
            console.log('addDataToPaymentList',state.paymentsList)
            console.log('addDataToPaymentList',payload)
        },
        addCategory(state, payload){
            state.category = payload
        },
        addCountPages(state, payload){
            state.countPages = payload
        },
        addDownloadedPages(state, payload){
            state.downloadedPages.push(payload)
        }
        // editPaymentList(state, payload) {
        //     Vue.set(state.paymentsList, 0, payload)
        // }
    },
    getters: {
        getPaymentList: state => state.paymentsList,
        getFullPaymentValue:state => {
            return state.paymentsList.reduce((res, cur)=> res + cur.value, 0)
        },
        getCategoryFull: state => {
            return state.paymentsList.map(i=>i.category)
        },
        getCategoryList: state => {
            return state.category
        },  
        getCountPages: state => {
            return state.countPages
        } 
    },
    actions: {
        //  someAction({commit}, res){
        //     commit('setPaymentsListData', res)
        // },
        fetchCategoryList({commit}) {
            return new Promise ((resolve)=> {
                setTimeout(()=> {
                    resolve (['Food', 'Transport', 'Education', 'Sport', 'Other'])
                }, 1000)
            })
            .then(res => commit('addCategory', res));
        },
        fetchData(context, page=1) {
            if (context.state.downloadedPages.includes(page)){
            console.log('fetchData_if', context.state.downloadedPages)
                return 0}
            else 
                return new Promise((resolve)=> {
                    setTimeout(()=> {
                    if (page === 1) context.commit('addCountPages', countPages);
                    const items = Pages['page' + page].map(el => {return {...{page}, ...el}})
                    console.log('fetchData', items)
                   resolve({items, page}) 
                }, 2000)
            })
            .then (res=> {
                context.commit('addDataToPaymentList', res.items);
                context.commit('addDownloadedPages', res.page);
        })
    },
  }
})
