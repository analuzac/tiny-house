import env from '../env';

export default function getOneListing(listingId, history) {
  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/listings/${listingId}`, {
    method: 'GET',
    headers: {
      Authorization: storedToken,
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status === 401) {
      history.push('/');
      return response.text();
    }
    return response.json();
  });
  // .catch(err => {
  //   console.log('THE_ERR', err);
  // });
}
