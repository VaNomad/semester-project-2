import { profiles_URL } from "../api/constants.mjs";
import { get } from "../storage/localstorage.mjs";

const token = get("token");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const name = params.get("name");

export async function userProfile(name) {
    try {
        const getProfile = JSON.parse(localStorage.profile);
        const name = getProfile.name;
        return name;
    } catch (error) {
        console.log("Could not get the profile name");
    }
}
userProfile();

export async function getProfile() {
  const url = `${profiles_URL}${userProfile}?_listings=true`;
  const data = {
    headers: {
      "content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    method: "get",
  };

  const response = await fetch(url, data);
  console.log(response);

  return await response.json()
}

export async function updateAvatar(newAvatar) {

  const url = `${profiles_URL}${userProfile}/media`;

  const response = await fetch(url, {
      method: "get",
      body: JSON.stringify(newAvatar)
  })

  return await response.json()
}