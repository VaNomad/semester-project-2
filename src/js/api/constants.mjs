const host = "https://nf-api.onrender.com";
const base = "/api/v1/auction";
export const baseUrl = `${host}${base}`;

const listings = "/listings";
export const listings_URL = `${baseUrl}${listings}`;

const login = "/auth/login";
export const login_URL = `${baseUrl}${login}`;

const register = "/auth/register";
export const register_URL = `${baseUrl}${register}`;
