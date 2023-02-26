import { register_URL } from "../api/constants.mjs";
import * as displayMsg from "../ui/displayError.mjs";

console.log(register_URL);

export async function register(url, data) {
  try {
    const url = register_URL;
    const userReg = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
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

