import { register_URL } from "../api/constants.mjs";

export async function register(profile) {
  try {
    const url = register_URL;
    const userReg = {
      method: "post",
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(profile),
    };

    const response = await fetch(url, userReg);
    const result = await response.json();

    if (response.ok) {
      window.location.replace("/login.html?_registerSuccess=true");
      return result;
    }

  } catch (error) {
    console.log(error);
  }
}






