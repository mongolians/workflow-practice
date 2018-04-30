'use strict'
const config = require('../config')

const getBooks = function (data) {
  return $.ajax({
    url: config.apiUrl + '/books/',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  getBooks
}
