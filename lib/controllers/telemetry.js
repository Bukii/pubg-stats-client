const API = require('../api')
const atob = require('atob')
const _ = require('lodash')
const axios = require('axios')
var self = require('../index')

const match = require('./match')

exports.url = async function (region, id) {
  let result = JSON.parse(await match.data(region, id, self.token))
  let url = _.filter(result.included, { type: 'asset' })[0].attributes.URL
  return new Promise((resolve, reject) => {
    return resolve(url)
  })
}
exports.logPlayerPosition = async function(url) {
  let result = await axios.get(url);
  
  let t = _.filter(result.data, {
      _T: 'LogPlayerPosition'
  })
  return new Promise((resolve, reject) => {
    return resolve(t)
  })
}


