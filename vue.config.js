const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({ 
  outputDir: "../src/main/resources/static",  
  indexPath: "../static/vue/index.html",  
  devServer: {  
    port: 8081,
    proxy: "http://localhost:8088"  
  },  
  chainWebpack: config => {  
    const svgRule = config.module.rule("svg");    
    svgRule.uses.clear();    
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");  
  } 
})
