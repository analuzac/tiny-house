import env from '../env';

export default function getOneListing(listingId) {
  return fetch(
    `${env.API_BASE_URL}/listings/${listingId}`,
    {
      // method: 'GET',
      // headers: {
      //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
      //   'Content-Type': 'application/json'
    }
  ).then(response => {
    return response.json();
  });
}
