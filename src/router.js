import Vue from 'vue'
import VueRouter from 'vue-router'
import Dropzone from './components/Dropzone.vue'
import SimpleUpload from './components/SimpleUpload.vue'
import MultipleUploads from './components/MultipleUploads.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', name: 'Dropzone', component: Dropzone },
        { path: '/single', name: 'SimpleUpload', component: SimpleUpload},
        {path: '/multiple', name: 'MultipleUploads', component: MultipleUploads}
    ]
})