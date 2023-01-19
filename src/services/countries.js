import { checkError, client } from './client';

// export async function getCountries() {
//   const resp = await client.from('countries').select('*');

//   return checkError(resp);
// }

export async function getCountries(order, searchName) {
  let query = client.from('countries').select('*');

  if (order === 'asc') {
    query = query.order('name', { ascending: true });
  } else if (order === 'desc') {
    query = query.order('name', { ascending: false });
  }

  if (searchName) {
    // `%${booger}%` allows for list to update by character, not just a matching case
    query = query.ilike('name', `%${searchName}%`);
  }

  const response = await query;
  return checkError(response);
}

// export async function orderCountriesaz() {
//   const resp = await client.from('countries').select('*').order('name', { ascending: true });
//   return checkError(resp);
// }
// export async function orderCountriesza() {
//   const resp = await client.from('countries').select('*').order('name', { ascending: false });
//   return checkError(resp);
// }
