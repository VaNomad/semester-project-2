import { profiles_URL } from "../api/constants.mjs";
import { get } from "../storage/localstorage.mjs";

export function userProfile() {
    
    try {
        const getProfile = JSON.parse(localStorage.profile);
        const name = getProfile.name;
        return name;
    } catch (error) {
        console.log("Could not get the profile name");
    }
}

export async function getProfile() {
  const token = get("token");
  const url = `${profiles_URL}/${userProfile()}`;
  const data = {
    headers: {
      "content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    method: "get",
  };
  
  try {
    const response = await fetch(url, data);    
    const result = await response.json();
    return result;

  } catch (error) {
    console.log("Error retrieving profile media", error);
  }
}


