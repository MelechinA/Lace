import { createRouter, createWebHistory } from 'vue-router'



// import BaseDataMaterial from '@/components/BaseDataMaterial'
import Login from '@/components/Login.vue'
import Registration from '@/components/Registration.vue'

import TableView from '@/views/TableView.vue'
import HomeLView from '@/views/HomeLView.vue'
import Contacts from '@/views/Contacts.vue'
import About from '@/views/About.vue'
import Help from '@/views/Help.vue'
import Rights from '@/views/Rights.vue'
import GeneralDataMaterial from '@/views/GeneralDataMaterial.vue'
import TaxonPage from '@/views/TaxonPage.vue'

import LichensTableView from '@/views/lichens/LichensTableView.vue'
import LichensHomeView from '@/views/lichens/LichensHomeView.vue'
import LichensDataMaterial from '@/views/lichens/LichensDataMaterial.vue'
import LichenGalleryVue from '@/views/lichens/LichenGallery.vue'
import LichensCheckilstMurmanskVue from '@/views/lichens/LichensCheckilstMurmansk.vue'


import FishTableView from '@/views/fish/FishTableView.vue'
import FishHomeView from '@/views/fish/FishHomeView.vue'
import FishDataMaterial from '@/views/fish/FishDataMaterial.vue'
import FishGallery from '@/views/fish/FishGallery.vue'

import CyanoTableView from '@/views/cyano/CyanoTableView.vue'
import CyanoHomeView from '@/views/cyano/CyanoHomeView.vue'
import CyanoDataMaterial from '@/views/cyano/CyanoDataMaterial.vue'
import CyanoGallery from '@/views/cyano/CyanoGallery.vue'

import HepaticsTableView from '@/views/hepatics/HepaticsTableView.vue'
import HepaticsHomeView from '@/views/hepatics/HepaticsHomeView.vue'
import HepaticsDataMaterial from '@/views/hepatics/HepaticsDataMaterial.vue'
import HepaticsGallery from '@/views/hepatics/HepaticsGallery.vue'

import MossTableView from '@/views/moss/MossTableView.vue'
import MossHomeView from '@/views/moss/MossHomeView.vue'
import MossDataMaterial from '@/views/moss/MossDataMaterial.vue'

import VascularTableView from '@/views/vascular/VascularTableView.vue'
import VascularHomeView from '@/views/vascular/VascularHomeView.vue'
import VascularDataMaterial from '@/views/vascular/VascularDataMaterial.vue'

import FungiTableView from '@/views/fungi/FungiTableView.vue'
import FungiHomeView from '@/views/fungi/FungiHomeView.vue'
import FungiDataMaterial from '@/views/fungi/FungiDataMaterial.vue'


//import TablePage from '@/components/TablePage'


const routes = [
  {
    path: '/',
    name: 'homel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/HomeLView.vue')
  component: HomeLView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/rights',
    name: 'rights',
    component: Rights
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/table/:idtable',
    name: 'table',
    component: TableView
  },

  {
    path: '/lichens/',
    name: 'mainlichens',
    component: LichensHomeView
  },
  {
    path: '/lichens/table/:idtable',
    name: 'lichenstables',
    component: LichensTableView
  },
  {
    path: '/lichens/table/:idtable/:idpage',
    name: 'lichensdatamaterial',
    component: LichensDataMaterial,
//    props: dynamicPropsFn,
/*
    props: { 
      dataset_uri:"https://isling.org:8000/dataset/list?f=200",
      tablestructur:"https://isling.org:8000/dataset/list?f=100&f_id=200",
      rowid: 534620 
    }
    */
  },
  {
    path: '/lichens/lichensgallery/',
    name: 'lichensgallery',
    component: LichenGalleryVue
  }, 
  {
    path: '/lichens/checklistmurmansk/',
    name: 'checklistmurmansk',
    component: LichensCheckilstMurmanskVue
  }, 
//fish:
{
  path: '/fish/',
  name: 'mainfish',
  component: FishHomeView
},
{
  path: '/fish/table/:idtable',
  name: 'fishtables',
  component: FishTableView
},
{
  path: '/fish/table/:idtable/:idpage',
  name: 'fishdatamaterial',
  component: FishDataMaterial,
},
{
  path: '/fish/fishgallery/',
  name: 'fishgallery',
  component: FishGallery,
},
//cyano:
{
  path: '/cyano/',
  name: 'maincyano',
  component: CyanoHomeView
},
{
  path: '/cyano/table/:idtable',
  name: 'cyanotables',
  component: CyanoTableView
},
{
  path: '/cyano/table/:idtable/:idpage',
  name: 'cyanodatamaterial',
  component: CyanoDataMaterial,
},
{
  path: '/cyano/cyanogallery/',
  name: 'cyanogallery',
  component: CyanoGallery,
},
//hepatics:
{
  path: '/hepatics/',
  name: 'mainhepatics',
  component: HepaticsHomeView
},
{
  path: '/hepatics/table/:idtable',
  name: 'hepaticstables',
  component: HepaticsTableView
},
{
  path: '/hepatics/table/:idtable/:idpage',
  name: 'hepaticsdatamaterial',
  component: HepaticsDataMaterial,
},
{
  path: '/hepatics/hepaticsgallery/',
  name: 'hepaticsgallery',
  component: HepaticsGallery,
},
//moss:
{
  path: '/moss/',
  name: 'mainmoss',
  component: MossHomeView
},
{
  path: '/moss/table/:idtable',
  name: 'mosstables',
  component: MossTableView
},
{
  path: '/moss/table/:idtable/:idpage',
  name: 'mossdatamaterial',
  component: MossDataMaterial,
},
//vascular:
{
  path: '/vascular/',
  name: 'mainvascular',
  component: VascularHomeView
},
{
  path: '/vascular/table/:idtable',
  name: 'vasculartables',
  component: VascularTableView
},
{
  path: '/vascular/table/:idtable/:idpage',
  name: 'vasculardatamaterial',
  component: VascularDataMaterial,
},
//fungi:
{
  path: '/fungi/',
  name: 'mainfungi',
  component: FungiHomeView
},
{
  path: '/fungi/table/:idtable',
  name: 'fungitables',
  component: FungiTableView
},
{
  path: '/fungi/table/:idtable/:idpage',
  name: 'fungidatamaterial',
  component: FungiDataMaterial,
},


  
  {
    path: '/table/:idtable/:idpage',
    name: 'generaldatamaterial',
    component: GeneralDataMaterial,
  },

  {
    path: '/taxonpage/:idpage',
    name: 'taxonpage',
    component: TaxonPage,
  },





  
]
/*
function dynamicPropsFn (route) {

  return {
    dataset_uri:"https://isling.org:8000/dataset/list?f="+route.params.idtable,
    tablestructur:"https://isling.org:8000/dataset/list?f=100&f_id="+route.params.idtable,
    rowid: route.params.idpage, 
  }
}
*/






const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
