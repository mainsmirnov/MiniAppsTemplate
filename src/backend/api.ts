const URL = 'https://api.npoint.io/479059c7074b89847a26'; // test json

// queries
export async function getData() {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error('Can\'t load data');
  }

  const data = await res.json();
  return data;
}

