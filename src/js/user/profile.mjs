// import { profiles_URL } from "../api/constants.mjs";
import { get } from "../storage/localstorage.mjs";

// const token = get("token");
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const name = params.get("name");

// const avatar = document.querySelector("#avatar");
// console.log(avatar);

// const user = JSON.parse(localStorage.getItem("profile"));
// const profileName = user.name;
// console.log(profileName);
// avatar.src = user.avatar



// const avatarImg = document.querySelector("#avatarImg");
// const profileImg = get("profile");
// avatarImg.src = profileImg.avatar;
// console.log(avatarImg);
// const profileImg = get("profile");
// const profileName = profile.name;
// console.log(profileName);

// avatar.src = profileImg.avatar;
// const user = JSON.parse(localStorage.getItem("profile"));
// const profileName = user.name;
// console.log(profileName);


// export async function userProfile() {
    
//     try {
//         const getProfile = JSON.parse(localStorage.profile);
//         const name = getProfile.name;
//         return name;
//     } catch (error) {
//         console.log("Could not get the profile name");
//     }
// }
// userProfile();

// export async function getProfile() {
//   const token = get("token");
//   const url = `${profiles_URL}${userProfile}/media`;
//   const data = {
//     headers: {
//       "content-Type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${token}`,
//     },
//     method: "put",
//   };

//   const response = await fetch(url, data);
//   console.log(response);

//   return await response.json()
// }

// export async function updateAvatar(newAvatar) {

//   const url = `${profiles_URL}${userProfile}/media`;

//   const response = await fetch(url, {
//       method: "get",
//       body: JSON.stringify(newAvatar)
//   })

//   return await response.json()
// }

const profiles_URL = "https://nf-api.onrender.com/api/v1/auction/profiles";

// export function get(key) {
//   try {
//     const value = localStorage.getItem(key);
//     return JSON.parse(value);
//   } catch {
//     return null
//   }
// }

export async function userProfile() {
    
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
  const url = `${profiles_URL}/${userProfile()}/media`;
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
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error retrieving profile media", error);
  }
}

getProfile();
