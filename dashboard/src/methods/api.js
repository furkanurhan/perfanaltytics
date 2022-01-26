/* eslint-disable eol-last */
const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://performance-analytics-app.herokuapp.com/'
  : 'http://localhost:3000/'

function fetchMeasureList (params) {
  return fetch(`${SERVER_URL}measures?${new URLSearchParams(params)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('fetchMeasureList failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

function fetchWebsitesList (params) {
  return fetch(`${SERVER_URL}sites?${new URLSearchParams(params)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('fetchWebsitesList failed')
      }
      return response.json()
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {
  fetchMeasureList,
  fetchWebsitesList
}