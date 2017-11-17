import env from '../env';

export default function updateListing(listingId, changes, history) {
  delete changes.id;

  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/listings/${listingId}`, {
    method: 'PATCH',
    headers: {
      Authorization: storedToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(changes)
  }).then(response => {
    if (response.status === 401 || response.status === 403) {
      history.push('/registration/update');
      return response.text();
    }
    return response.json();
  });
  // .catch(err => {
  //   console.log('THE_ERR', err);
  // });
}
