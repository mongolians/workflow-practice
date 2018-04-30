const api = require('./api')
const ui = require('./ui')

const onGetBooks = function (event) {
  event.preventDefault()
  api.getBooks()
    .then(ui.onGetBooksSuccess)
}

const addHandlers = function () {
  $('#get-books').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
