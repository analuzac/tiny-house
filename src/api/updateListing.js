export default function updateListing(listingId, changes) {
  delete changes.id;
  //console.log('this is request input listingId', listingId);
  //console.log('this is request input changes', changes);

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
      //console.log(record);
      return {
        id: record.id,
        rent: record.fields.rent,
        dimensions: record.fields.dimensions,
        coordinates: record.fields.coordinates,
        date: record.fields.date,
        amenities: record.fields.amenities
      };
    });
}
