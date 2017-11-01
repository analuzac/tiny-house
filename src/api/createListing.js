import env from '../env';

export default function createListing(listing) {
  return fetch(`${env.API_BASE_URL}/users/1/listings`, {
    // For when i have userId ready:
    // return fetch(`${env.API_BASE_URL}/users/${userId}/listings`, {
    //
    method: 'POST',
    headers: {
      // Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(listing.fields)
  }).then(response => {
    return response.json();
  });
}
