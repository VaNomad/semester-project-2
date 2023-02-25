import { API_AUCTION_LOGIN_URL } from "../api/constants.mjs";
import * as storage from "../storage/localstorage.mjs";

// const action = "/auth/login";
// const url = `${API_AUCTION_URL}${action}`;
console.log(API_AUCTION_LOGIN_URL);



export async function loginUser(url, data) {
  
  try {
    const userLogin = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const response = await fetch(url, userLogin);

    const { accessToken, ...profile } = await response.json();

    if (accessToken.length > 0) {
      window.location.replace("/indexIn.html");

      storage.save("token", accessToken);
      console.log(accessToken);
      

      storage.save("profile", profile);

      return response;

    } else {
      throw new Error("INVALID USERNAME OR PASSWORD!")
    }
    
  } catch (error) {
    console.log(error);
  }
}

