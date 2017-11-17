import env from '../env';

export default function createListing(listing, history) {
  let storedToken = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/listings`, {
    // For when i have userId ready:
    // return fetch(`${env.API_BASE_URL}/users/${userId}/listings`, {
    //
    method: 'POST',
    headers: {
      Authorization: storedToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(listing)
  }).then(response => {
    if (response.status === 401) {
      history.push('/registration');
      return response.text();
    }
    return response.json();
  });
}
