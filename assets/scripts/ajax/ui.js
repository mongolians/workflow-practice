'use strict'

const onGetBooksSuccess = function (data) {
  $('#apimessage').html('Song successfully posted!')
  $('#apimessage').css('background-color', 'green')
  setTimeout(() => {
    $('#apimessage').html('')
  }, 4000
  )
}

const onError = function (data) {
  $('#apimessage').html('Cant get books')
  $('#apimessage').css('background-color', 'red')
  setTimeout(() => {
    $('#apimessage').html('')
  }, 4000
  )
}

module.exports = {
  onGetBooksSuccess,
  onError
}
