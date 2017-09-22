export default function updateListing(listingId, changes) {
  console.log('this is request input', listingId);
  console.log('this is request input', changes);
  delete changes.id;
  return fetch(
    `https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse/${listingId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer keyE9lXfaaEAGEG23',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: changes
      })
    }
  )
    .then(response => {
      return response.json();
    })
    .then(record => {
      console.log(record);
      return {
        // id: id,
        rent: record.fields.rent,
        dimensionst: record.fields.dimensions,
        coordinates: record.fields.coordinates,
        date: record.fields.date,
        amenities: record.fields.amenities
      };
    });
}
