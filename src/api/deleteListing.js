import env from '../env';

export default function deleteListing(listingId, history) {
  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/listings/${listingId}`, {
    method: 'DELETE',
    headers: {
      Authorization: storedToken,
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status === 401 || response.status === 403) {
      history.push('/registration');
      return response.text();
    }
    return response.json();
  });
  // .catch(err => {
  //   console.log('THE_ERR', err);
  // });
}
