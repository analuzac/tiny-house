import env from '../env';

export default function updateListing(listingId, changes) {
  delete changes.id;
  //console.log('this is request input listingId', listingId);
  //console.log('this is request input changes', changes);
  return fetch(`${env.API_BASE_URL}/listings/${listingId}`, {
    method: 'PATCH',
    headers: {
      //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(changes)
  }).then(response => {
    return response.json();
  });
}
