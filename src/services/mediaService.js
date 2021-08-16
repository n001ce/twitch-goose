import * as tokenService from "./tokenService"
const BASE_URL = "/api/media/"

export function searchGames(query) {
  return fetch(`${BASE_URL}search/games/${query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function topGames() {
  return fetch(`${BASE_URL}topGames`)
  .then(res => res.json())
}

export function topStreams() {
  return fetch(`${BASE_URL}topStreams`)
  .then(res => res.json())
}

export function searchStreams(query) {
  return fetch(`${BASE_URL}search/streams/${query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}

export function addMedia(media) {
  return fetch(
    `${BASE_URL}addMedia`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(media)
    },
    { mode: "cors" })
  .then((res) => res.json())
}

export function removeMedia(api_id) {
  return fetch(
    `${BASE_URL}removeMedia/${api_id}`,
    {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
    },
    { mode: "cors" })
  .then((res) => res.json())
}

