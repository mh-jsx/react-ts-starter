import axios from 'axios';

const GET_USER_BY_ACCESS_TOKEN_URL = 'auth/verify-token';

export function getUserByToken(token: string) {
  return axios.get(GET_USER_BY_ACCESS_TOKEN_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
