'use strict'

const popResults = () => {
  for (let i = 0; i < 5; i++) {
    $('#results').append('<h1>hello</h1')
  }
}

$(document).ready(() => {
  popResults()
  let random = 'https://en.wikipedia.org/wiki/Special:Random'
  $('#title').on('click', () => {
    $('#title').html(random)
  })
})
