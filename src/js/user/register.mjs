import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/auth/register";

const regURL = (API_AUCTION_URL + action);

async function register(regURL, data) {
  try {
    const userReg = {
      headers: {
        "content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const response = await fetch(regURL, userReg);
    console.log(response);

    alert("You are now registered");
    window.location.replace("/login.html");

  } catch (error) {
    console.log(error);
  }
}
register();