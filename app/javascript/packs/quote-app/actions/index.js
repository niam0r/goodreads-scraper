export const FETCH_QUOTES = "FETCH_QUOTES";
export const FETCH_QUOTE = "FETCH_QUOTE";
export const REMOVE_QUOTE = "REMOVE_QUOTE";

const BASE_URL = "http://localhost:3000/api/v1";

export function fetchCars() {
  const url = `${BASE_URL}/quotes`;
  const promise = fetch(url).then(res => res.json());

  return {
    type: FETCH_QUOTES,
    payload: promise
  };
}



