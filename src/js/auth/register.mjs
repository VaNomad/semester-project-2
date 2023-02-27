import { register_URL } from "../api/constants.mjs";
import * as displayMsg from "../ui/displayError.mjs";

console.log(register_URL);

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
    console.log(response);

    if (response.ok) {
      displayMsg.displayRegisterSuccess();
      window.location.replace("/login.html");
      return result;

    } else {
      displayMsg.displayRegisterError();
    }

  } catch (error) {
    console.log(error);
  }
}






