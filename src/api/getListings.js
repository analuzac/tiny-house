//sort=[{field: "rent", direction: "desc"}]

export default function getListings(/* { filter } */) {
  let filter = 'Berkeley, CA';
  filter = filter
    ? '&filterByFormula=' + encodeURI(`({coordinates} = '${filter}')`)
    : '';
  // this didn't work --> const sortBy = encodeURI('[{field: "rent", direction: "desc"}]');
  let sort = 'sort[0][field]=rent';

  return fetch(
    `https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse?${sort}${filter}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer keyE9lXfaaEAGEG23',
        'Content-Type': 'application/json'
      }
    }
  )
    .then(response => response.json())
    .then(data => {
      console.log('ma data', data);
      // debugger;
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
