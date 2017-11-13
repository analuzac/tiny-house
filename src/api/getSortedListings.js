import env from '../env';

export default function getSortedListings(sort) {
  // const sortVar = sort ? `sort[0][field]=${sort}` : '';
  //const sortVar = sort ? sort : '';
  const sortVar = sort;
  return fetch(
    `${env.API_BASE_URL}/listings/sort/${sortVar}`
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
