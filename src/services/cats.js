import { checkError, client } from './client';

export async function fetchCats() {
  const resp = await client.from('cats').select('*');
  return checkError(resp);
}

export async function fetchCatDetail(id) {
  const resp = await client.from('cats').select('*').match({ id }).single();
  return checkError(resp);
}
