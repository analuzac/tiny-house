import env from '../env';

export default function getFilteredListings(filter) {
  // const filterVar = filter
  //   ? '&filterByFormula=' + encodeURI(`({location} = '${filter}')`)
  //   : '';
  //const filterVar = filter ? filter : '';
  const filterVar = filter;
  return fetch(
    `${env.API_BASE_URL}/listings/filter/${filterVar}`
    // `https://api.airtable.com/v0/appHq8T1Eu4rcibs9/TinyHouse?${sortVar}${filterVar}`,
    // {
    //   method: 'GET',
    //   headers: {
    //     Authorization: 'Bearer keyE9lXfaaEAGEG23',
    //     'Content-Type': 'application/json'
    //   }
    // }
  ).then(response => {
    return response.json();
  });
}
