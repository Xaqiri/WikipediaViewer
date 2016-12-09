'use strict'

const popResults = (results, pages, baseURL) => {
  $('#results').empty()
  for (let i = 0; i < 15; i++) {
    let title = pages[results[i]].title
    let r = $('<h1>' + title + '</h1>')
    $('#results').append(r)
    $(r).wrap(() => {
      let link = $('<a/>')
      link.attr('href', baseURL + title)
      return link
    })
  }
}

$(document).ready(() => {
  const apiURL = 'https://en.wikipedia.org/w/api.php'
  const baseURL = 'https://en.wikipedia.org/wiki/'
  const random = baseURL + 'Special:Random'
  let searchTerm = ''
  let baseQuery = apiURL + '?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch='
  let results = []
  //popResults()
  $('#searchButton').on('click', () => {
    searchTerm = $('#searchBar').val()
    $.getJSON(baseQuery + searchTerm, (data) => {
      results = Object.keys(data.query.pages)
      popResults(results, data.query.pages, baseURL)
    })
  })
  $('#randomButton').on('click', () => {
    window.open(random)
  })
})
