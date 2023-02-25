import { API_AUCTION_REGISTER_URL } from "../api/constants.mjs";

console.log(API_AUCTION_REGISTER_URL);

export async function register(url, data) {
  try {
    const userReg = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const response = await fetch(url, userReg);
    console.log(response);

    alert("You are now registered");
    window.location.replace("/login.html");

  } catch (error) {
    console.log(error);
  }
}

