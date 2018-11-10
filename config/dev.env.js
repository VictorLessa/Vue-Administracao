'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://ec2-52-67-61-88.sa-east-1.compute.amazonaws.com:8080/api/1.0.0"',
  // API_URL: '"http://localhost:8081/api/1.0.0"',
  IMAGE_URL: '"http://acheifarmacias.com.br/achei-public-data/pharmacy/"',
  DASH_IMG: '"/static/dash_imgs/"'
})
