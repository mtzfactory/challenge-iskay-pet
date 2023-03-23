import {BASE_URL, STORES_ENDPOINT} from '~/config';
import {get} from '~/infra/http';
import {Store} from '~/models';
import {getErrorMessage} from '~/toolbox';

export async function getIkpStores() {
  try {
    const stores = await get<Store[]>(`${BASE_URL}${STORES_ENDPOINT}`);
    return {data: stores, error: null};
  } catch (error) {
    const message = getErrorMessage(error);
    return {data: null, error: message};
  }
}
