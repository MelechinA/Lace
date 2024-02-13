// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
//import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Vuetify

import { createVuetify } from 'vuetify'
//import { VDataTable } from 'vuetify/labs/VDataTable'
/*
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    selectedbg: '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const myLichenTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: 'green',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    selectedbg: '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}


export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
      myLichenTheme,
    }
  }
})
*/

/*
Color description
All colors took from (different beetwen reguler and light - two steps, between other - one step): https://vuetifyjs.com/en/styles/colors/
VS colors - it is so called Complimentary colors (comlimentary to regular and regularlight) by: https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors 

    regular: usual elements a spcially needs to anonimous
    regularlight: usual elements needs to users
    accent: say "need click Me !"
    accentlight: use if abovedon't fit by style
    attention: use to impotant elements or admin buttons
    attentionlight:use if abovedon't fit by style
    vs: "warning"s or other dangerous/ Also for highlight rare design elements (like "." in L.)
    vslight: use if abovedon't fit by style
*/

// const mainCustomLightTheme = {
//   dark: false,
//   colors: {
//     regular:'#81C784',
//     regularlight:'#81C784',
//     accent:'#81C784',
//     accentlight:'#81C784',
//     attention:'#81C784',
//     attentionlight:'#81C784',
//     vs: '#c781c4',
//     vslight: '#c781c4',
//     footercolor: '#9E9E9E',
//   }
// };
// const mainCustomLightTheme = {
//   dark: false,
//   colors: {
//     regular:'#03A9F4',
//     regularlight:'#03A9F4',
//     accent:'#03A9F4',
//     accentlight:'#03A9F4',
//     attention:'#03A9F4',
//     attentionlight:'#03A9F4',
//     vs: '#FFFFFF',
//     vslight: '#FFFFFF',
//     footercolor: '#9E9E9E',
//   }
// };

const mainCustomLightTheme = {
  dark: false,
  colors: {
    regular:'#2196F3',
    regularlight:'#90CAF9',
    accent:'#2962FF',
    accentlight:'#82B1FF',
    attention:'#0D47A1',
    attentionlight:'#1565C0',
    vs: '#FFFFFF',
    vslight: '#FFFFFF',
    footercolor: '#9E9E9E',
//    footercolor: '#000000',
  }
};

const myLichenTheme = {
  dark: false,
  colors: {
    regular:'#FFD54F',
    regularlight:'#FFD54F',
    rsuperlight: '#FFD54F',
    accent:'#FFD54F',
    accentlight:'#FFD54F',
    attention:'#FFD54F',
    attentionlight:'#FFD54F',
    vs: '#4f78ff',
    vslight: '#4f78ff',
    footercolor: '#9E9E9E',
  }
};
const myFishTheme = {
  dark: false,
  colors: {
    regular:'#2196F3',
    regularlight:'#64B5F6',
    accent:'#2962FF',
    accentlight:'#2979FF',
    attention:'#0D47A1',
    attentionlight:'#1565C0',
    vs: '#f59342',
    vslight: '#f6a664'


  }
};

export default createVuetify({
  theme: {
    defaultTheme: 'mainCustomLightTheme',
    themes: {
      mainCustomLightTheme,
      myLichenTheme,
      myFishTheme,
    }
  }
})
