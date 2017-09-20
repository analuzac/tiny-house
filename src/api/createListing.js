export default function createListing(listing) {
  return fetch('https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(listing)
  })
    .then(response => response.json())
    .then(record => ({
      id: record.id,
      coordinates: record.fields.coordinates,
      dimensions: record.fields.dimensions,
      rent: record.fields.rent,
      date: record.fields.date,
      amenities: record.fields.amenities
    }));
}

// {
//   fields: {
//     coordinates: 'Berkeley, CA',
//     dimensions: 300,
//     rent: 500,
//     date: 'October 1st, 2017',
//     amenities: 'water, recycling, compost'
//   }
// }
