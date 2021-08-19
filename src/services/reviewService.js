import * as tokenService from "./tokenService"
const BASE_URL = "/api/reviews/"

export function create(id) {
    return fetch(
      `${BASE_URL}/stream/${id}`,
      {
        method: 'POST',
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify()
      },
      { mode: "cors" })
      .then((res) => res.json())
    }
    export function removeReview(id) {
      return fetch(
        `${BASE_URL}/stream/${id}/deleteReview`,
        {
          method: 'DELETE',
          headers: {'Authorization': 'Bearer ' + tokenService.getToken()},
        },
        { mode: "cors" })
        .then((res) => res.json())
      }
