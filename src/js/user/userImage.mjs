import { get } from "../storage/localstorage.mjs";

export function userImg() {
  const token = get("token");
  if (token) {
    const profilePicture = document.querySelector(".profilePicture");
    const profileImg = get("profile");
    profilePicture.src = profileImg.avatar;
  }
}