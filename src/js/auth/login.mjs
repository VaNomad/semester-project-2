import { API_AUCTION_URL } from "../api/constants.mjs";
import * as storage from "../storage/localstorage.mjs";

const action = "/auth/login";

export async function loginUser(url, data) {
  
  try {
    const userLogin = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const url = (API_AUCTION_URL + action);

    const response = await fetch(url, userLogin);

    const { accessToken, ...profile } = await response.json();

    if (accessToken.length > 0) {
      window.location.replace("/indexIn.html");

      storage.save("token", accessToken);

      storage.save("profile", profile);

      return response;

    } else {
      throw new Error("INVALID USERNAME OR PASSWORD!")
    }
    
  } catch (error) {
    console.log(error);
  }
}

