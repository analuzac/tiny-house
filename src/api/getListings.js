export default function getListings() {
  return fetch('https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse?', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.records.map(record => {
        return {
          id: record.id,
          coordinates: record.fields.coordinates,
          dimensions: record.fields.dimensions,
          rent: record.fields.rent,
          date: record.fields.date,
          amenities: record.fields.amenities
        };
      });
    });
}
