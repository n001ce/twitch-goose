import * as tokenService from "./tokenService"
const BASE_URL = "/api/games/"

export function search(type, query) {
  return fetch(`${BASE_URL}search/${query}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  }, {mode: "cors"})
  .then(res => res.json())
}


export function addGame(game) {
  return fetch(
    `${BASE_URL}addGame`,
    {
      method: 'POST',
      headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
      body: JSON.stringify(game)
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

