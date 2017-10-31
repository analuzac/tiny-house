import { API_BASE_URL } from '../env';

export default function getOneListing(listingId) {
  return fetch(`${API_BASE_URL}/${listingId}`, {
    //`https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse/${listingId}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(record => {
      //console.log('ma record', record);
      return {
        id: record.id,
        coordinates: record.fields.coordinates,
        dimensions: record.fields.dimensions,
        rent: record.fields.rent,
        date: record.fields.date,
        amenities: record.fields.amenities
      };
    });
}
