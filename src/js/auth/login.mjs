import { login_URL } from "../api/constants.mjs";
import * as storage from "../storage/localstorage.mjs";

// const action = "/auth/login";
// const url = `${API_AUCTION_URL}${action}`;
console.log(login_URL);



export async function loginUser(data) {
  try {

  const url = login_URL;

    const userLogin = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const response = await fetch(url, userLogin);
    console.log(response);
    
    

    if (response.ok) {

      const { accessToken, ...profile } = await response.json();
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

