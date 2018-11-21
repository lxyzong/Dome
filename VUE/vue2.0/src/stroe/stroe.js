import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {}
const mutations = {}
//编译之前进行重构
const getters = {}
//actions 异步修改状态
const actions = {}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})