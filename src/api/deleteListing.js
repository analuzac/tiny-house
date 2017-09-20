export default function deleteListing(listingId) {
  return fetch(
    `https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse/${listingId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer keyE9lXfaaEAGEG23',
        'Content-Type': 'application/json'
      }
    }
  ).then(response => response.json());
}
