import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: false, // все время будет же сбрасываться? $store.state.loggedIn
    isAdmin: false,
    userId: 0,
    theme: "mainCustomLightTheme",
//    areacoordvalue: "'geotable:2171:4:geom'",
 //   theme: "myFishTheme",
    
//    pointfieldname: '',
//    themeColor: 'dark',
//    themeColor: 'light',
//    materialname: '',

//    tableId: 200, //таблица по-умолчанию для отрисовки страницы материала (если ссылка на материал "снаружи" - то используется общая таблица для образцов)


//    dataset_uri_sps: 'https://isling.org:8000/dataset/list?f=198',
//    structure_sps: 'https://isling.org:8000/dataset/list?f=100&f_id=198',

//    imgsrc: '',
//colors of parts



 //   tableIdTo: null
  },
  getters: {
  },
  mutations: {
/*
    updatePoint(state, name){
      state.pointfieldname = name;
    },
*//*
    getTableIdToState(state){
      state.tableId = 200;
    },
*/
/*    
    getTableIdTo(state, tid){
    state.tableId = tid;
*/
    // если на материал переходишь из таблицы N - используется ид таблицы N (=tid - получаем как payload из BaseGeoTable)
/* Более подробно:
Откуда взялся tid? и что такое state? Это аргументы которые получают значения из метода (или хака - как в примере ниже):

    beforeUnmount(){
  this.$store.commit('getTableIdTo', this.meta.dataset_id); // где state = 'getTableIdTo', tid = this.meta.dataset_id
    },
*/
//    },
/*    
    getImgSrc(state, src){
      state.imgsrc = src;
      }, 
*/
  },
  actions: {
  },
  modules: {
  }
})

// косяк в том, что почему-то даже после обновления страницы материала tableId сбраcывается на умолчальный (2187).
