import axios from 'axios';
import { BASE_API_URL } from '../settings/settings';
import { setupInterceptorsTo } from './interceptors';

const instance = setupInterceptorsTo(axios.create({ baseURL: BASE_API_URL }));

export { instance };
