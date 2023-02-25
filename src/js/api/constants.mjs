const host = 'https://nf-api.onrender.com';
const base = '/api/v1/auction';
export const API_AUCTION_URL = `${host}${base}`;

const login = "/auth/login";
export const API_AUCTION_LOGIN_URL = `${API_AUCTION_URL}${login}`;

const register = "/auth/register";
export const API_AUCTION_REGISTER_URL = `${API_AUCTION_URL}${register}`;
