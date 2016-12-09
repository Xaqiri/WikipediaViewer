'use strict'

const popResults = (results, pages, baseURL) => {
  for (let i = 0; i < 15; i++) {
    let page = pages[results[i]]
    let title = page.title
    let extract = page.extract
    let r = $('<div id=resultCard></div>')
    let rt = $('<h2 id=resultTitle>' + title + '</h2>')
    let rb = $('<h4 id=resultBody>' + extract + '</h4>')
    $('#results').append(r)
    $(r).append(rt)
    $(r).append(rb)
    $(r).wrap(() => {
      let link = $('<a/>')
      link.attr('href', baseURL + title)
      link.attr('target', '_blank')
      return link
    })
  }
}

$('#searchBar').val('')
$(document).ready(() => {
  const apiURL = 'https://en.wikipedia.org/w/api.php'
  const baseURL = 'https://en.wikipedia.org/wiki/'
  const random = baseURL + 'Special:Random'
  let searchTerm = ''
  let baseQuery = apiURL + '?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch='
  let results = []
  $('#searchButton').on('click', () => {
    $('#results').empty()
    searchTerm = $('#searchBar').val()
    if (searchTerm) {
      $.getJSON(baseQuery + searchTerm, (data) => {
        results = Object.keys(data.query.pages)
        popResults(results, data.query.pages, baseURL)
      })
    }
  })
  $('#randomButton').on('click', () => {
    window.open(random)
  })
})
