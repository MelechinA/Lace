const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
/*Server-specific settings*/
 //uncomment and change this settings for hosting dev vue-project
/*
  devServer: {
    port: 8080,
    host: 'kpabg.ru',
  }
*/ 
//// //// /////
/*end server-specific settings*/


  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/'

})

