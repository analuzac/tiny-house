import env from '../env';

export default function createUser(newUser, history) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      //   Authorization: 'Bearer keyE9lXfaaEAGEG23',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).then(response => {
    if (response.status === 400) {
      history.push('/signup');
      return response.text();
    }
    return response.json();
  });
}
